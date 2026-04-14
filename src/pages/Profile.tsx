import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { useAuth } from '@/contexts/AuthContext'
import { useProfile } from '@/hooks/useProfile'
import { useStreak } from '@/hooks/useStreak'

export default function Profile() {
  const { user, loading: authLoading, signOut } = useAuth()
  const { profile, updateDailyGoal } = useProfile()
  const { currentStreak, longestStreak, wordsLearnedToday, progressPercent } = useStreak()
  const navigate = useNavigate()

  const [editingGoal, setEditingGoal] = useState(false)
  const [goalValue, setGoalValue] = useState(profile?.daily_word_goal ?? 10)
  const [saving, setSaving] = useState(false)

  // Not signed in
  if (!authLoading && !user) {
    return (
      <>
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl px-4 py-3 flex items-center justify-center">
          <h1 className="font-headline font-bold text-xl tracking-tight">VocabBuilder</h1>
        </header>
        <main className="flex-1 px-4 pb-32 flex flex-col items-center justify-center min-h-[70dvh]">
          <div className="text-center space-y-6 max-w-sm">
            <div className="bg-primary-container p-5 rounded-full w-fit mx-auto">
              <span
                className="material-symbols-outlined text-on-primary-container text-5xl"
                data-icon="person"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >person</span>
            </div>
            <h2 className="font-headline text-2xl font-extrabold text-on-background">Sign in to see your profile</h2>
            <p className="font-body text-sm text-on-surface-variant">Track your streaks, set daily goals, and monitor your progress.</p>
            <div className="flex flex-col gap-3">
              <Link
                to="/signin"
                className="bg-primary text-on-primary font-label px-6 py-3 rounded-full font-semibold hover:bg-primary-dim transition-all shadow-sm text-center"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-surface-container-low border-2 border-outline-variant/30 text-on-surface font-label px-6 py-3 rounded-full font-semibold hover:bg-surface-container transition-all text-center"
              >
                Create Account
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }

  // Loading
  if (authLoading) {
    return (
      <>
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl px-4 py-3 flex items-center justify-center">
          <h1 className="font-headline font-bold text-xl tracking-tight">VocabBuilder</h1>
        </header>
        <main className="flex-1 px-4 pb-32 flex items-center justify-center min-h-[70dvh]">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="font-body text-sm text-on-surface-variant">Loading profile...</p>
          </div>
        </main>
      </>
    )
  }

  const handleSaveGoal = async () => {
    setSaving(true)
    await updateDailyGoal(goalValue)
    setSaving(false)
    setEditingGoal(false)
  }

  const handleSignOut = async () => {
    await signOut()
    navigate({ to: '/' })
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl px-4 py-3 flex items-center justify-center">
        <h1 className="font-headline font-bold text-xl tracking-tight">VocabBuilder</h1>
      </header>

      <main className="flex-1 px-4 pb-32 space-y-6">
        {/* User Info Card */}
        <section className="mt-4 bg-surface-container-low rounded-lg p-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center shrink-0 overflow-hidden">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <span
                  className="material-symbols-outlined text-on-primary-container text-3xl"
                  data-icon="person"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >person</span>
              )}
            </div>
            <div>
              <h2 className="font-headline text-xl font-bold text-on-background">
                {profile?.display_name || user?.email?.split('@')[0] || 'Learner'}
              </h2>
              <p className="font-body text-sm text-on-surface-variant">{user?.email}</p>
            </div>
          </div>
        </section>

        {/* Streak Stats */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-highest rounded-lg p-5 flex flex-col items-center gap-2">
            <div className="bg-primary-container p-3 rounded-full">
              <span
                className="material-symbols-outlined text-on-primary-container"
                data-icon="local_fire_department"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >local_fire_department</span>
            </div>
            <span className="font-headline text-3xl font-bold text-on-background">{currentStreak}</span>
            <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest">Current Streak</span>
          </div>
          <div className="bg-surface-container-highest rounded-lg p-5 flex flex-col items-center gap-2">
            <div className="bg-tertiary-container p-3 rounded-full">
              <span
                className="material-symbols-outlined text-on-tertiary-container"
                data-icon="military_tech"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >military_tech</span>
            </div>
            <span className="font-headline text-3xl font-bold text-on-background">{longestStreak}</span>
            <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest">Best Streak</span>
          </div>
        </section>

        {/* Today's Progress */}
        <section className="bg-surface-container-low rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-lg font-bold text-on-background">Today's Progress</h3>
            <span className="font-headline text-lg font-bold text-primary">{progressPercent}%</span>
          </div>
          <div className="h-2 w-full bg-tertiary-container/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-tertiary rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="font-body text-sm text-on-surface-variant">
            {wordsLearnedToday} / {profile?.daily_word_goal ?? 10} words learned today
          </p>
        </section>

        {/* Daily Word Goal Setting */}
        <section className="bg-surface-container-low rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-lg font-bold text-on-background">Daily Word Goal</h3>
            {!editingGoal ? (
              <button
                onClick={() => {
                  setGoalValue(profile?.daily_word_goal ?? 10)
                  setEditingGoal(true)
                }}
                className="text-primary font-label font-semibold text-sm hover:underline"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={handleSaveGoal}
                disabled={saving}
                className="bg-primary text-on-primary font-label px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-primary-dim transition-all disabled:opacity-60"
              >
                {saving ? 'Saving...' : 'Save'}
              </button>
            )}
          </div>

          {editingGoal ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-on-surface-variant">Words per day</span>
                <span className="font-headline text-2xl font-bold text-primary">{goalValue}</span>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                value={goalValue}
                onChange={(e) => setGoalValue(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between font-label text-[10px] text-on-surface-variant uppercase tracking-wider">
                <span>1 word</span>
                <span>50 words</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="bg-secondary-container p-3 rounded-full">
                <span className="material-symbols-outlined text-on-secondary-container" data-icon="target">target</span>
              </div>
              <div>
                <span className="font-headline text-2xl font-bold text-on-background">{profile?.daily_word_goal ?? 10}</span>
                <span className="font-body text-sm text-on-surface-variant ml-2">words / day</span>
              </div>
            </div>
          )}
        </section>

        {/* Sign Out */}
        <button
          onClick={handleSignOut}
          className="w-full bg-surface-container-low border-2 border-error/20 text-error font-label px-6 py-3 rounded-full font-semibold hover:bg-error-container/10 transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-lg" data-icon="logout">logout</span>
          Sign Out
        </button>
      </main>
    </>
  )
}
