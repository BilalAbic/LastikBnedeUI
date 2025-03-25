"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'
import { useAuth } from './AuthContext'
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  const isActive = (path: string) => pathname === path

  return (
    <>
      <nav className="bg-[#1a1a1a] text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo.png"
                alt="Lastik Bende Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold">Lastik Analizi</span>
            </Link>

            {/* Main Menu */}
            <nav className="hidden md:flex flex-1 justify-center">
              <div className="flex space-x-8">
                <Link 
                  href="/" 
                  className={`text-sm font-medium transition-colors ${
                    isActive('/') ? 'text-orange-500' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Ana Sayfa
                </Link>
                <Link 
                  href="/analiz"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/analiz') ? 'text-orange-500' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Analiz
                </Link>
                <Link 
                  href="/urunler"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/urunler') ? 'text-orange-500' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Ürünler
                </Link>
                <Link 
                  href="/lastik-listesi"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/lastik-listesi') ? 'text-orange-500' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Lastik Listesi
                </Link>
                <Link 
                  href="/hakkimizda"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/hakkimizda') ? 'text-orange-500' : 'text-white hover:text-gray-300'
                  }`}
                >
                  Hakkımızda
                </Link>
              </div>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="text-sm">
                    <span className="text-gray-400 mr-1">Merhaba,</span>
                    <span className="font-medium">{user.fullName || user.email.split('@')[0]}</span>
                  </div>
                  <button 
                    onClick={logout}
                    className="text-sm bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    Çıkış Yap
                  </button>
                </div>
              ) : (
                <>
                  <Link 
                    href="/giris" 
                    className="text-sm text-white hover:text-gray-300 transition-colors"
                  >
                    Giriş Yap
                  </Link>
                  <Link 
                    href="/kayit" 
                    className="text-sm bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    Kayıt Ol
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  )
}

export default Navbar 