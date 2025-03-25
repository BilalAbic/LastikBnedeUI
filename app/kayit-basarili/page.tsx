import Link from 'next/link'

export default function RegisterSuccess() {
  return (
    <div className="max-w-screen-xl mx-auto section-padding">
      <div className="max-w-md mx-auto">
        <div className="card p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center">
              <svg className="h-10 w-10 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-xl font-semibold mb-2">Kayıt İşleminiz Başarılı!</h1>
          <p className="text-gray-medium mb-6">
            Hesabınız başarıyla oluşturuldu. Şimdi giriş yaparak lastik analizi ve diğer hizmetlerimizden yararlanabilirsiniz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/giris" className="btn-primary">
              Giriş Yap
            </Link>
            <Link href="/" className="btn-secondary">
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 