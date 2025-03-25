"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function TireList() {
  // Sample products data
  const allProducts = [
    { id: 1, brand: 'Michelin', model: 'Pilot Sport 4', size: '225/45 R17', price: 2499, healthStatus: 100, category: 1 },
    { id: 2, brand: 'Bridgestone', model: 'Potenza S001', size: '205/55 R16', price: 1999, healthStatus: 85, category: 1 },
    { id: 3, brand: 'Goodyear', model: 'Eagle F1', size: '235/40 R18', price: 2799, healthStatus: 100, category: 1 },
    { id: 4, brand: 'Continental', model: 'PremiumContact 6', size: '215/55 R17', price: 2299, healthStatus: 92, category: 1 },
    { id: 5, brand: 'Pirelli', model: 'P Zero', size: '245/40 R19', price: 3199, healthStatus: 100, category: 1 },
    { id: 6, brand: 'Michelin', model: 'Alpin 6', size: '205/55 R16', price: 2199, healthStatus: 100, category: 2 },
    { id: 7, brand: 'Bridgestone', model: 'Blizzak LM005', size: '225/45 R17', price: 2399, healthStatus: 78, category: 2 },
    { id: 8, brand: 'Continental', model: 'WinterContact TS 860', size: '195/65 R15', price: 1899, healthStatus: 100, category: 2 },
    { id: 9, brand: 'Goodyear', model: 'UltraGrip 9+', size: '205/55 R16', price: 2099, healthStatus: 88, category: 2 },
    { id: 10, brand: 'Michelin', model: 'CrossClimate 2', size: '215/55 R17', price: 2599, healthStatus: 100, category: 3 },
    { id: 11, brand: 'Goodyear', model: 'Vector 4Seasons Gen-3', size: '205/55 R16', price: 2299, healthStatus: 95, category: 3 },
    { id: 12, brand: 'Continental', model: 'AllSeasonContact', size: '225/45 R17', price: 2499, healthStatus: 100, category: 3 },
  ]

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [selectedHealthStatus, setSelectedHealthStatus] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string>('default')

  // Categories
  const categories = [
    { id: 1, name: 'Yaz Lastikleri' },
    { id: 2, name: 'Kış Lastikleri' },
    { id: 3, name: 'Dört Mevsim Lastikleri' },
    { id: 4, name: 'SUV Lastikleri' },
  ]

  // Get unique brands
  const brands = Array.from(new Set(allProducts.map(product => product.brand)))

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) return false
    if (selectedBrand && product.brand !== selectedBrand) return false
    if (selectedHealthStatus === 'new' && product.healthStatus !== 100) return false
    if (selectedHealthStatus === 'used' && product.healthStatus === 100) return false
    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price
    if (sortBy === 'price-desc') return b.price - a.price
    if (sortBy === 'health-desc') return b.healthStatus - a.healthStatus
    if (sortBy === 'health-asc') return a.healthStatus - b.healthStatus
    return 0
  })

  return (
    <div className="max-w-screen-xl mx-auto section-padding">
      <h1 className="mb-8">Lastik Listesi</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="lg:col-span-1">
          <div className="card p-6 space-y-6 sticky top-24">
            <div>
              <h3 className="text-lg font-medium mb-4">Filtreler</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Kategori</label>
                  <select 
                    className="input-field" 
                    value={selectedCategory || ''}
                    onChange={(e) => setSelectedCategory(e.target.value ? Number(e.target.value) : null)}
                  >
                    <option value="">Tüm Kategoriler</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Marka</label>
                  <select 
                    className="input-field"
                    value={selectedBrand || ''}
                    onChange={(e) => setSelectedBrand(e.target.value || null)}
                  >
                    <option value="">Tüm Markalar</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Sağlık Durumu</label>
                  <select 
                    className="input-field"
                    value={selectedHealthStatus || ''}
                    onChange={(e) => setSelectedHealthStatus(e.target.value || null)}
                  >
                    <option value="">Tümü</option>
                    <option value="new">Sıfır Ürünler (100%)</option>
                    <option value="used">Kullanılmış Ürünler</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Sıralama</label>
                  <select 
                    className="input-field"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="default">Varsayılan</option>
                    <option value="price-asc">Fiyat (Artan)</option>
                    <option value="price-desc">Fiyat (Azalan)</option>
                    <option value="health-desc">Sağlık Durumu (Yüksek-Düşük)</option>
                    <option value="health-asc">Sağlık Durumu (Düşük-Yüksek)</option>
                  </select>
                </div>
              </div>
            </div>
            
            <button 
              className="btn-secondary w-full"
              onClick={() => {
                setSelectedCategory(null)
                setSelectedBrand(null)
                setSelectedHealthStatus(null)
                setSortBy('default')
              }}
            >
              Filtreleri Temizle
            </button>
          </div>
        </div>
        
        {/* Product List */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-medium">
              {sortedProducts.length} ürün bulundu
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="card">
                <div className="relative h-64">
                  <Image
                    src={`/images/tire-${(product.id % 5) + 1}.jpg`}
                    alt={`${product.brand} ${product.model}`}
                    fill
                    className="object-cover"
                  />
                  {product.healthStatus === 100 && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        Sıfır Ürün
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{product.brand} {product.model}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-gray-medium">{product.size}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${product.healthStatus === 100 ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                      %{product.healthStatus}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-semibold">₺{product.price}</span>
                    <Link
                      href={`/urunler/${product.id}`}
                      className="text-sm text-accent font-medium"
                    >
                      İncele →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            
            {sortedProducts.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-12">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-gray-medium" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 21.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill="currentColor" />
                    <path d="M3.5 4.5h3l2 10h8l2-7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Ürün Bulunamadı</h3>
                <p className="text-sm text-gray-medium text-center max-w-md mb-4">
                  Seçtiğiniz filtrelere uygun ürün bulunamadı. Lütfen farklı filtreler deneyiniz.
                </p>
                <button 
                  className="btn-secondary"
                  onClick={() => {
                    setSelectedCategory(null)
                    setSelectedBrand(null)
                    setSelectedHealthStatus(null)
                    setSortBy('default')
                  }}
                >
                  Filtreleri Temizle
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 