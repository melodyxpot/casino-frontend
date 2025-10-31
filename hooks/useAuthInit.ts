'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchProfile } from '@/store/slices/authSlice'

/**
 * Hook to initialize authentication state on app startup
 * Fetches user profile if token exists but user data is missing
 */
export const useAuthInit = () => {
  const dispatch = useAppDispatch()
  const { token, user, isAuthenticated, isLoading } = useAppSelector(state => state.auth)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // If we have a token but no user data, fetch the profile
    if (token && !user && !isLoading) {
      console.log('AuthInit: Token found but no user data, fetching profile...')
      dispatch(fetchProfile())
    }
  }, [dispatch, token, user, isLoading])

  return {
    isInitialized: !token || (token && user) || isLoading
  }
}

export default useAuthInit
