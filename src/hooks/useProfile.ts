import { supabase } from '@/lib/supabase'
import { useAuth, type Profile } from '@/contexts/AuthContext'

export function useProfile() {
  const { user, profile, refreshProfile } = useAuth()

  const updateDailyGoal = async (newGoal: number) => {
    if (!user) return { error: new Error('Not authenticated') }

    const { error } = await supabase
      .from('profiles')
      .update({ daily_word_goal: newGoal })
      .eq('id', user.id)

    if (error) return { error: new Error(error.message) }

    await refreshProfile()
    return { error: null }
  }

  const updateProfile = async (updates: Partial<Pick<Profile, 'display_name' | 'avatar_url' | 'daily_word_goal'>>) => {
    if (!user) return { error: new Error('Not authenticated') }

    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id)

    if (error) return { error: new Error(error.message) }

    await refreshProfile()
    return { error: null }
  }

  return {
    profile,
    updateDailyGoal,
    updateProfile,
  }
}
