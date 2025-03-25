import Image from 'next/image'
import Link from 'next/link'

export default function ProductDetail({ params }: { params: { id: string } }) {
  // Sample product data
  const product = {
    id: params.id,
    brand: 'Michelin',
    model: 'Pilot Sport 4',
    size: '225/45 R17',
    price: 2499,
    healthStatus: parseInt(params.id) === 1 ? 100 : 85,
    description: 'Yüksek performanslı lastik özellikleri ve detaylı açıklama metni burada yer alacak. Lastik hakkında tüm teknik detaylar ve kullanım önerileri.',
    specs: {
      size: '225/45 R17',
      loadIndex: '91',
      speedSymbol: 'W',
      season: 'Yaz',
      fuelEfficiency: 'B',
      wetGrip: 'A',
      noiseLevel: '72dB',
    },
    features: [
      'Yüksek hızlarda mükemmel yol tutuş',
      'Islak zeminde üstün performans',
      'Düşük yuvarlanma direnci',
      'Uzun ömürlü sırt deseni',
    ],
    images: [
      '/images/tire-detail.jpg',
      '/images/tire-thumbnail-1.jpg',
      '/images/tire-thumbnail-2.jpg',
      '/images/tire-thumbnail-3.jpg',
    ],
  }

  // Related products
  const relatedProducts = [
    { id: 2, brand: 'Bridgestone', model: 'Potenza S001', size: '205/55 R16', price: 1999, healthStatus: 85 },
    { id: 3, brand: 'Goodyear', model: 'Eagle F1', size: '235/40 R18', price: 2799, healthStatus: 100 },
    { id: 4, brand: 'Continental', model: 'PremiumContact 6', size: '215/55 R17', price: 2299, healthStatus: 92 },
  ]

  return (
    <div className="max-w-screen-xl mx-auto section-padding">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-8">
        <Link href="/" className="text-gray-medium hover:text-white">
          Ana Sayfa
        </Link>
        <span className="mx-2 text-gray-medium">/</span>
        <Link href="/urunler" className="text-gray-medium hover:text-white">
          Ürünler
        </Link>
        <span className="mx-2 text-gray-medium">/</span>
        <span className="text-white">Lastik Test {product.id}</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-6">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt={`${product.brand} ${product.model}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="relative h-24 rounded-lg overflow-hidden border-2 border-transparent hover:border-accent cursor-pointer">
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.brand} {product.model}</h1>
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-sm px-3 py-1 rounded-full font-medium ${product.healthStatus === 100 ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                %{product.healthStatus}
              </span>
              <span className="text-sm text-gray-medium">{product.healthStatus === 100 ? 'Sıfır Ürün' : 'Kullanılmış Ürün'}</span>
            </div>
            <p className="text-gray-medium">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Teknik Özellikler</h2>
            <div className="grid grid-cols-2 gap-y-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <span className="block text-gray-medium text-sm">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Özellikler</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-dark">
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-sm text-gray-medium mb-1">Fiyat</span>
                <span className="text-2xl font-bold">₺{product.price}</span>
              </div>
              <div className="flex space-x-4">
                <button className="border border-gray-dark rounded-lg px-6 py-3 hover:border-accent transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="btn-primary flex items-center gap-2">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Benzer Ürünler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
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
        </div>
      </div>
    </div>
  )
} 