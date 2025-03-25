"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/components/AuthContext'

export default function Login() {
  const router = useRouter()
  const { login, loading: authLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      const success = await login(email, password)
      if (success) {
        router.push('/')
      } else {
        setError('E-posta veya şifre hatalı')
      }
    } catch (err) {
      setError('Giriş yapılırken bir hata oluştu')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto section-padding">
      <div className="max-w-md mx-auto">
        <h1 className="mb-8 text-center">Giriş Yap</h1>
        
        <div className="card p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-500 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-posta
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="ornek@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Şifre
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-dark text-accent focus:ring-accent bg-secondary"
                />
                <label htmlFor="remember" className="ml-2 block text-sm">
                  Beni hatırla
                </label>
              </div>
              
              <div className="text-sm">
                <Link href="/sifremi-unuttum" className="text-accent hover:underline">
                  Şifremi unuttum
                </Link>
              </div>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full"
              disabled={loading || authLoading}
            >
              {loading || authLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Giriş yapılıyor...
                </span>
              ) : (
                'Giriş Yap'
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-medium">Hesabınız yok mu?</span>
            <Link href="/kayit" className="text-sm text-accent ml-1 hover:underline">
              Kayıt Ol
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-dark">
            <div className="text-center text-sm text-gray-medium mb-2">
              Demo Hesabı
            </div>
            <div className="text-xs text-gray-medium text-center">
              E-posta: demo@lastikbende.com<br />
              Şifre: demo123
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 