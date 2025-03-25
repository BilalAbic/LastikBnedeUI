"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from './AuthContext'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && !target.closest('.mobile-menu-content')) {
        onClose()
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])
  
  // Close menu when route changes
  useEffect(() => {
    onClose()
  }, [pathname, onClose])
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleLogout = () => {
    logout()
    onClose()
  }
  
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm">
      <div className="mobile-menu-content h-full w-4/5 max-w-sm bg-secondary p-6 ml-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Menü</h2>
          <button onClick={onClose} className="p-2">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        
        {user && (
          <div className="bg-gray-dark/50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-medium">Giriş yapıldı</p>
            <p className="font-medium mb-2">{user.fullName || user.email}</p>
            <button 
              onClick={handleLogout}
              className="text-sm text-accent hover:underline"
            >
              Çıkış Yap
            </button>
          </div>
        )}
        
        <nav className="space-y-6">
          <Link 
            href="/" 
            className={`block py-2 text-lg ${
              pathname === '/' ? 'text-accent font-medium' : 'text-white'
            }`}
          >
            Ana Sayfa
          </Link>
          <Link 
            href="/analiz" 
            className={`block py-2 text-lg ${
              pathname === '/analiz' ? 'text-accent font-medium' : 'text-white'
            }`}
          >
            Analiz
          </Link>
          <Link 
            href="/urunler" 
            className={`block py-2 text-lg ${
              pathname === '/urunler' ? 'text-accent font-medium' : 'text-white'
            }`}
          >
            Ürünler
          </Link>
          <Link 
            href="/lastik-listesi" 
            className={`block py-2 text-lg ${
              pathname === '/lastik-listesi' ? 'text-accent font-medium' : 'text-white'
            }`}
          >
            Lastik Listesi
          </Link>
          <Link 
            href="/hakkimizda" 
            className={`block py-2 text-lg ${
              pathname === '/hakkimizda' ? 'text-accent font-medium' : 'text-white'
            }`}
          >
            Hakkımızda
          </Link>
        </nav>
        
        {!user && (
          <div className="mt-auto pt-8 border-t border-gray-dark mt-8 flex flex-col gap-3">
            <Link href="/giris" className="btn-secondary w-full">
              Giriş Yap
            </Link>
            <Link href="/kayit" className="btn-primary w-full">
              Kayıt Ol
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default MobileMenu 