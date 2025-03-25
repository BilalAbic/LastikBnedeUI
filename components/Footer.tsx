import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-gray-dark mt-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Lastik Analizi</h3>
            <p className="text-gray-medium mb-4">
              Profesyonel lastik analiz ve bakım hizmetleri sunan firmamız, 
              müşteri memnuniyetini ön planda tutarak kaliteli hizmet sunmaktadır.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-medium hover:text-accent">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-medium hover:text-accent">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
              </a>
              <a href="#" className="text-gray-medium hover:text-accent">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-medium hover:text-accent">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/analiz" className="text-gray-medium hover:text-accent">
                  Analiz
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-gray-medium hover:text-accent">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/lastik-listesi" className="text-gray-medium hover:text-accent">
                  Lastik Listele
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-medium hover:text-accent">
                  Hakkımızda
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-medium">
                  Atatürk Cad. No:123, 34000 İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-medium">
                  +90 (212) 123 4567
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-medium">
                  info@lastikanalizi.com
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Bülten</h3>
            <p className="text-gray-medium mb-4">
              Kampanyalar ve yeni ürünlerden haberdar olmak için bültenimize abone olun.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="input-field"
              />
              <button type="submit" className="btn-primary w-full">
                Abone Ol
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-dark mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-medium text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lastik Analizi. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-medium hover:text-accent text-sm">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="text-gray-medium hover:text-accent text-sm">
              Kullanım Şartları
            </Link>
            <Link href="#" className="text-gray-medium hover:text-accent text-sm">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 