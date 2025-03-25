import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Lastik Analizi</h1>
            <p className="py-6">
              Lastiklerinizin durumunu analiz ederek size en uygun önerileri sunuyoruz.
            </p>
            <Link href="/analiz" className="btn btn-primary">
              Hemen Başla
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 