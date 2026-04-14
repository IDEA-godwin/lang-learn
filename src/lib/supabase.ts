import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    'Missing Supabase environment variables. ' +
    'Please set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in your .env file. ' +
    'See .env.example for reference.'
  )
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey)

// OAuth feature flags (read from env)
export const isGoogleAuthEnabled = import.meta.env.VITE_ENABLE_GOOGLE_AUTH === 'true'
export const isAppleAuthEnabled = import.meta.env.VITE_ENABLE_APPLE_AUTH === 'true'
