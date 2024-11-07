'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { AuthService } from '@/lib/services/auth-service'
import { useAuth } from '@/contexts/auth-context'

export default function LogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()
  const { setIsAuthenticated } = useAuth()

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await AuthService.logout()
      setIsAuthenticated(false)
      router.push('/')
    } catch (error) {
      console.error('Error logging out:', error)
      // You might want to show an error message to the user here
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <Button variant="ghost" onClick={handleLogout} disabled={isLoggingOut}>
      {isLoggingOut ? 'Cerrando sesión...' : 'Cerrar sesión'}
    </Button>
  )
}