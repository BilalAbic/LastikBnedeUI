import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="relative h-[36rem] rounded-xl overflow-hidden mb-16">
          <Image
            src="/images/hero-bg.jpg"
            alt="Lastik Bende"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute top-1/2 -translate-y-1/2 left-12 max-w-xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Lastik Analizi Yap
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Detaylı lastik analizi için hemen başlayın
            </p>
            <Link 
              href="/analiz"
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Detaylı Analiz Yap
            </Link>
          </div>
        </section>

        {/* Popular Products */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Popüler Ürünler</h2>
            <Link 
              href="/urunler"
              className="text-gray-600 hover:text-black transition-colors flex items-center"
            >
              Tümünü Gör
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Link 
                key={index}
                href={`/urunler/${index}`}
                className="group"
              >
                <div className="relative h-80 rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={`/images/product-${index}.jpg`}
                    alt={`Popüler Ürün ${index}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">Popüler Ürün {index}</h3>
                <p className="text-gray-600">Detaylı ürün açıklaması</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Öne Çıkan Kategoriler</h2>
            <Link 
              href="/kategoriler"
              className="text-gray-600 hover:text-black transition-colors flex items-center"
            >
              Tümünü Gör
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Michelin', image: 'michelin.jpg' },
              { name: 'Yokluk', image: 'yokluk.jpg' },
              { name: 'Kışlık', image: 'kislik.jpg' },
              { name: 'Dört Mevsim', image: 'dort-mevsim.jpg' }
            ].map((category) => (
              <Link 
                key={category.name}
                href={`/kategoriler/${category.name.toLowerCase()}`}
                className="group"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 border mb-3">
                  <div className="relative w-full h-full p-6">
                    <Image
                      src={`/images/categories/${category.image}`}
                      alt={category.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-center font-medium">{category.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* User Information */}
        <section className="bg-gray-50 rounded-xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-bold mb-4">Kullanıcı Bilgilendirme</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Güvenlik Politikası</li>
                <li>İade ve Değişim</li>
                <li>Teslimat ve Montaj</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Politikalar</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Kullanıcı Sözleşmesi</li>
                <li>Gizlilik Politikası</li>
                <li>KVKK</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Fotoğraflar</h3>
              <p className="text-gray-600">
                Tüm fotoğraflar gerçek ürün ve hizmetlerimize aittir.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 