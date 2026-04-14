import { useActionState, useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { useAuth } from '@/contexts/AuthContext'
import { isGoogleAuthEnabled, isAppleAuthEnabled } from '@/lib/supabase'
import Header from '@/components/header'

export default function SignIn() {
  const { signIn, signInWithGoogle, signInWithApple } = useAuth()
  const navigate = useNavigate()
  const [oauthError, setOauthError] = useState<string | null>(null)

  const [error, submitAction, isPending] = useActionState(async (_prev: string | null, formData: FormData) => {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error: signInError } = await signIn(email, password)
    if (signInError) return signInError.message

    navigate({ to: '/' })
    return null
  }, null)

  const handleGoogleSignIn = async () => {
    setOauthError(null)
    const { error: err } = await signInWithGoogle()
    if (err) setOauthError(err.message)
  }

  const handleAppleSignIn = async () => {
    setOauthError(null)
    const { error: err } = await signInWithApple()
    if (err) setOauthError(err.message)
  }

  const displayError = error || oauthError

  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center space-y-2">
            <div className="bg-primary-container p-4 rounded-full w-fit mx-auto">
              <span
                className="material-symbols-outlined text-on-primary-container text-4xl"
                data-icon="login"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >login</span>
            </div>
            <h2 className="font-headline text-3xl font-extrabold text-on-background">Welcome back</h2>
            <p className="font-body text-sm text-on-surface-variant">Sign in to track your streak and progress</p>
          </div>

          {/* Error */}
          {displayError && (
            <div className="bg-error-container/20 border border-error/30 rounded-lg px-4 py-3 flex items-center gap-3">
              <span className="material-symbols-outlined text-error text-lg" data-icon="error">error</span>
              <p className="font-body text-sm text-error">{displayError}</p>
            </div>
          )}

          {/* Email Form */}
          <form action={submitAction} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="signin-email" className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Email
              </label>
              <input
                id="signin-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-surface-container-lowest border-2 border-outline-variant/40 focus:border-primary rounded-lg px-4 py-3 font-body text-on-surface transition-colors outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="signin-password" className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Password
              </label>
              <input
                id="signin-password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-surface-container-lowest border-2 border-outline-variant/40 focus:border-primary rounded-lg px-4 py-3 font-body text-on-surface transition-colors outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-primary text-on-primary font-label px-6 py-3 rounded-full font-semibold hover:bg-primary-dim transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* OAuth Divider + Buttons */}
          {(isGoogleAuthEnabled || isAppleAuthEnabled) && (
            <>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-outline-variant/30" />
                <span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Or</span>
                <div className="flex-1 h-px bg-outline-variant/30" />
              </div>

              <div className="space-y-3">
                {isGoogleAuthEnabled && (
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full bg-surface-container-low border-2 border-outline-variant/30 text-on-surface font-label px-6 py-3 rounded-full font-semibold hover:bg-surface-container transition-all flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Continue with Google
                  </button>
                )}
                {isAppleAuthEnabled && (
                  <button
                    onClick={handleAppleSignIn}
                    className="w-full bg-on-background text-background font-label px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    Continue with Apple
                  </button>
                )}
              </div>
            </>
          )}

          {/* Sign Up Link */}
          <p className="text-center font-body text-sm text-on-surface-variant">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}
