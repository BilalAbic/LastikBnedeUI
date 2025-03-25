export default function Loading() {
  return (
    <div className="max-w-screen-xl mx-auto section-padding">
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-gray-dark animate-spin"></div>
          <div className="h-16 w-16 rounded-full border-4 border-transparent border-t-accent absolute top-0 animate-spin"></div>
        </div>
        <p className="mt-6 text-gray-medium">Yükleniyor...</p>
      </div>
    </div>
  )
} 