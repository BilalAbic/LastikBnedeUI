import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
  // Featured products
  const featuredProducts = [
    { id: 1, brand: 'Michelin', model: 'Pilot Sport 4', size: '225/45 R17', price: 2499, healthStatus: 100 },
    { id: 2, brand: 'Bridgestone', model: 'Potenza S001', size: '205/55 R16', price: 1999, healthStatus: 85 },
  ]
  
  // Categories
  const categories = [
    { id: 1, name: 'Yaz Lastikleri', count: 24 },
    { id: 2, name: 'Kış Lastikleri', count: 18 },
    { id: 3, name: 'Dört Mevsim Lastikleri', count: 12 },
    { id: 4, name: 'SUV Lastikleri', count: 16 },
  ]

  return (
    <div className="max-w-screen-xl mx-auto section-padding">
      <h1 className="mb-8">Ürünler</h1>
      
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-12">
        <Image
          src="/images/products-hero.jpg"
          alt="Lastik Ürünleri"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Yüksek Performanslı Lastikler</h2>
          <p className="text-gray-200 mb-6">En iyi markalardan en uygun fiyatlarla kaliteli lastikler</p>
          <Link href="/lastik-listesi" className="btn-primary inline-block">
            Tüm Lastikleri Gör
          </Link>
        </div>
      </div>
      
      {/* Featured Products */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Öne Çıkan Ürünler</h2>
          <Link href="/lastik-listesi" className="text-accent text-sm font-medium">
            Tümünü Gör →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="card">
              <div className="relative h-64">
                <Image
                  src={`/images/tire-${product.id}.jpg`}
                  alt={`${product.brand} ${product.model}`}
                  fill
                  className="object-cover"
                />
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
          
          {/* View All Card */}
          <div className="card flex items-center justify-center">
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Daha Fazla Ürün</h3>
              <p className="text-sm text-gray-medium mb-4">
                Tüm lastik modellerimizi inceleyin
              </p>
              <Link
                href="/lastik-listesi"
                className="btn-primary inline-block"
              >
                Tüm Ürünler
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Kategoriler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/lastik-listesi?category=${category.id}`}
              className="card p-6 hover:border-accent transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-medium">{category.count} ürün</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 