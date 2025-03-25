"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

type User = {
  email: string
  fullName?: string
} | null

interface AuthContextType {
  user: User
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (userData: { email: string, fullName: string, phone: string, password: string }) => Promise<boolean>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Tarayıcı depolama alanından kullanıcı bilgilerini al
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser))
        } catch (error) {
          console.error('User data parsing error:', error)
          localStorage.removeItem('user')
        }
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true)
    
    // Gerçek uygulamada burada API çağrısı yapılır
    try {
      // Demo kullanıcısı için basit kontrol
      if (email === 'demo@lastikbende.com' && password === 'demo123') {
        const userData = { email }
        if (typeof window !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(userData))
        }
        setUser(userData)
        setLoading(false)
        return true
      }
      setLoading(false)
      return false
    } catch (error) {
      console.error('Login error:', error)
      setLoading(false)
      return false
    }
  }

  const register = async (userData: { email: string, fullName: string, phone: string, password: string }): Promise<boolean> => {
    setLoading(true)
    
    // Gerçek uygulamada burada API çağrısı yapılır
    try {
      // Simüle edilmiş başarılı kayıt
      const { email, fullName } = userData
      const user = { email, fullName }
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user))
      }
      setUser(user)
      setLoading(false)
      return true
    } catch (error) {
      console.error('Register error:', error)
      setLoading(false)
      return false
    }
  }

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user')
    }
    setUser(null)
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 