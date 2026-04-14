import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'

interface StreakData {
  currentStreak: number
  longestStreak: number
  wordsLearnedToday: number
  dailyGoal: number
  goalMet: boolean
  progressPercent: number
  loading: boolean
}

export function useStreak(): StreakData & { recordWordsLearned: (count: number) => Promise<void> } {
  const { user, profile } = useAuth()
  const [currentStreak, setCurrentStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)
  const [wordsLearnedToday, setWordsLearnedToday] = useState(0)
  const [loading, setLoading] = useState(true)

  const dailyGoal = profile?.daily_word_goal ?? 10
  const goalMet = wordsLearnedToday >= dailyGoal
  const progressPercent = dailyGoal > 0 ? Math.min(100, Math.round((wordsLearnedToday / dailyGoal) * 100)) : 0

  const fetchStreakData = useCallback(async () => {
    if (!user) {
      setLoading(false)
      return
    }

    try {
      // Fetch streak
      const { data: streakData } = await supabase
        .from('streaks')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (streakData) {
        // Check if streak should be reset (missed a day)
        const lastActivity = streakData.last_activity_date
          ? new Date(streakData.last_activity_date)
          : null
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        if (lastActivity) {
          const lastDate = new Date(lastActivity)
          lastDate.setHours(0, 0, 0, 0)
          const diffDays = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24))

          if (diffDays > 1) {
            // Streak broken — reset
            await supabase
              .from('streaks')
              .update({ current_streak: 0 })
              .eq('user_id', user.id)
            setCurrentStreak(0)
          } else {
            setCurrentStreak(streakData.current_streak)
          }
        } else {
          setCurrentStreak(streakData.current_streak)
        }
        setLongestStreak(streakData.longest_streak)
      }

      // Fetch today's progress
      const todayStr = new Date().toISOString().split('T')[0]
      const { data: progressData } = await supabase
        .from('learning_progress')
        .select('words_learned_count')
        .eq('user_id', user.id)
        .eq('date', todayStr)
        .single()

      setWordsLearnedToday(progressData?.words_learned_count ?? 0)
    } catch {
      // Silently handle errors (user might not have streak row yet)
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    fetchStreakData()
  }, [fetchStreakData])

  const recordWordsLearned = async (count: number) => {
    if (!user) return

    const todayStr = new Date().toISOString().split('T')[0]
    const newTotal = wordsLearnedToday + count

    // Upsert today's progress
    await supabase
      .from('learning_progress')
      .upsert(
        {
          user_id: user.id,
          date: todayStr,
          words_learned_count: newTotal,
        },
        { onConflict: 'user_id,date' }
      )

    setWordsLearnedToday(newTotal)

    // Check if daily goal is now met (and wasn't before)
    if (newTotal >= dailyGoal && wordsLearnedToday < dailyGoal) {
      const { data: streakData } = await supabase
        .from('streaks')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (streakData) {
        const lastActivity = streakData.last_activity_date
          ? new Date(streakData.last_activity_date)
          : null
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        let newStreak = 1
        if (lastActivity) {
          const lastDate = new Date(lastActivity)
          lastDate.setHours(0, 0, 0, 0)
          const diffDays = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24))

          if (diffDays === 0) {
            // Already counted today
            newStreak = streakData.current_streak
          } else if (diffDays === 1) {
            // Consecutive day
            newStreak = streakData.current_streak + 1
          }
          // diffDays > 1 means streak broken, starts at 1
        }

        const newLongest = Math.max(newStreak, streakData.longest_streak)

        await supabase
          .from('streaks')
          .update({
            current_streak: newStreak,
            longest_streak: newLongest,
            last_activity_date: todayStr,
          })
          .eq('user_id', user.id)

        setCurrentStreak(newStreak)
        setLongestStreak(newLongest)
      }
    }
  }

  return {
    currentStreak,
    longestStreak,
    wordsLearnedToday,
    dailyGoal,
    goalMet,
    progressPercent,
    loading,
    recordWordsLearned,
  }
}
