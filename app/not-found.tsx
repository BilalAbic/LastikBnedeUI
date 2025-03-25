import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-screen-xl mx-auto section-padding">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Sayfa Bulunamadı</h2>
        <p className="text-gray-medium max-w-md mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya dönüp tekrar deneyebilirsiniz.
        </p>
        <Link href="/" className="btn-primary">
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  )
} 