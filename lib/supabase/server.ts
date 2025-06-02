import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    "https://nmjsacgbcfjbtdezwsxw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tanNhY2diY2ZqYnRkZXp3c3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NDU5MzQsImV4cCI6MjA2NDQyMTkzNH0.XNC1VdtAoT7R_dAsrTSvvyUa5d4OngAIb0_HCe1TJxY",
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}