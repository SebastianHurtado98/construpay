'use client'

import { useAuth } from '@/contexts/auth-context'
import MainLayout from './layout/main-layout'

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <MainLayout>{children}</MainLayout>
  }

  return <>{children}</>
}