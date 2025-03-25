"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/components/AuthContext'

export default function Register() {
  const router = useRouter()
  const { register, loading: authLoading } = useAuth()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [termsChecked, setTermsChecked] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Hata kontrolü
    if (password !== confirmPassword) {
      setError('Şifreler eşleşmiyor')
      return
    }

    if (!termsChecked) {
      setError('Kullanım şartlarını kabul etmeniz gerekmektedir')
      return
    }

    setLoading(true)
    
    try {
      const success = await register({ email, fullName, phone, password })
      if (success) {
        router.push('/kayit-basarili')
      } else {
        setError('Kayıt olurken bir hata oluştu')
      }
    } catch (err) {
      setError('Kayıt olurken bir hata oluştu')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto section-padding">
      <div className="max-w-md mx-auto">
        <h1 className="mb-8 text-center">Kayıt Ol</h1>
        
        <div className="card p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-500 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                Ad Soyad
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="input-field"
                placeholder="Ad Soyad"
                required
              />
            </div>
            
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
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Telefon
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field"
                placeholder="5XX XXX XX XX"
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
                minLength={6}
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Şifre Tekrar
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input-field"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
                className="h-4 w-4 rounded border-gray-dark text-accent focus:ring-accent bg-secondary"
              />
              <label htmlFor="terms" className="ml-2 block text-sm">
                <span className="text-gray-medium">
                  <Link href="/kullanim-sartlari" className="text-accent hover:underline">
                    Kullanım şartlarını
                  </Link>{' '}
                  ve{' '}
                  <Link href="/gizlilik-politikasi" className="text-accent hover:underline">
                    gizlilik politikasını
                  </Link>{' '}
                  kabul ediyorum
                </span>
              </label>
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
                  Kayıt yapılıyor...
                </span>
              ) : (
                'Kayıt Ol'
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-medium">Zaten hesabınız var mı?</span>
            <Link href="/giris" className="text-sm text-accent ml-1 hover:underline">
              Giriş Yap
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 