"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import FileUpload from '@/components/FileUpload'

export default function Analysis() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [price, setPrice] = useState<number>(1500);
  const [isForSale, setIsForSale] = useState<boolean>(false);
  const [healthStatus, setHealthStatus] = useState<number>(85);

  const handleFileChange = (file: File | null) => {
    // Clean up previous preview URL if it exists
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    
    setSelectedFile(file);
    
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    } else {
      setPreviewUrl(null);
    }
  };

  // Clean up object URL when component unmounts
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFile) {
      setShowResults(true);
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setPrice(value);
    }
  };

  const handleListForSale = () => {
    setIsForSale(true);
    // Burada gerçek bir uygulamada API çağrısı yapılabilir
  };

  return (
    <div className="max-w-screen-xl mx-auto section-padding">
      <h1 className="mb-8">Lastik Bende - Lastik Analizi</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Analysis Form */}
        <div className="card p-6">
          <h2 className="text-lg font-medium mb-6">Analiz Formu</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2">
                Lastik Markası
              </label>
              <select className="input-field" required>
                <option value="">Marka seçiniz</option>
                <option value="michelin">Michelin</option>
                <option value="bridgestone">Bridgestone</option>
                <option value="goodyear">Goodyear</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Lastik Modeli
              </label>
              <select className="input-field" required>
                <option value="">Model seçiniz</option>
                <option value="model1">Model 1</option>
                <option value="model2">Model 2</option>
                <option value="model3">Model 3</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Lastik Ebatı
              </label>
              <select className="input-field" required>
                <option value="">Ebat seçiniz</option>
                <option value="205-55-r16">205/55 R16</option>
                <option value="215-55-r17">215/55 R17</option>
                <option value="225-45-r17">225/45 R17</option>
              </select>
            </div>

            {/* Photo Upload Section */}
            <div>
              <label className="block text-sm font-medium mb-2" id="file-upload-label">
                Lastik Fotoğrafı
              </label>
              <FileUpload 
                onFileChange={handleFileChange}
                previewUrl={previewUrl}
                maxSizeMB={5}
                acceptedFileTypes={['image/jpeg', 'image/png', 'image/jpg']}
              />
              {!previewUrl && (
                <p className="text-xs text-red-500 mt-2">* Lastik fotoğrafı yüklemek zorunludur</p>
              )}
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full"
              disabled={!previewUrl}
            >
              Analiz Et
            </button>
          </form>
        </div>
        
        {/* Analysis Results */}
        <div className="space-y-6">
          {showResults ? (
            <>
              <div className="card p-6">
                <h2 className="text-lg font-medium mb-6">Analiz Sonuçları</h2>
                <div className="relative h-64 mb-6 bg-gray-dark/10 rounded-lg overflow-hidden">
                  {previewUrl && (
                    <Image
                      src={previewUrl}
                      alt="Lastik Analiz Sonucu"
                      fill
                      className="object-contain"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <span className="text-xs bg-accent px-2 py-1 rounded-full">Analiz Tamamlandı</span>
                    </div>
                  </div>
                </div>
                
                {/* ChatGPT Analiz Raporu */}
                <div className="mb-6 p-4 bg-secondary/50 rounded-lg border border-gray-dark">
                  <div className="flex items-center mb-2">
                    <svg className="h-5 w-5 mr-2 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 21.5L17.5 13L13 8.5L14.5 7L20.5 13L14.5 19L13 17.5L17.5 13L9 21.5Z" fill="currentColor" />
                      <path d="M7.5 21.5H3.5C2.95 21.5 2.5 21.05 2.5 20.5V16.5L11 8L16 13L7.5 21.5Z" fill="currentColor" />
                      <path d="M11 8L15.5 3.5L21.5 9.5L17 14L11 8Z" fill="currentColor" />
                    </svg>
                    <h4 className="text-sm font-medium">ChatGPT Analiz Raporu</h4>
                  </div>
                  <p className="text-sm text-gray-medium">
                    Lastik %15 aşınma gösteriyor. 8.5mm diş derinliği ile güvenli sürüş için yeterli. Düzenli rotasyon ve balans kontrolü ile 24 ay daha kullanılabilir. Yol tutuşu iyi durumda, fren mesafesi standartlara uygun.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-dark">
                    <span className="text-sm">Diş Derinliği</span>
                    <span className="text-sm font-medium text-accent">8.5mm</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-dark">
                    <span className="text-sm">Aşınma Oranı</span>
                    <span className="text-sm font-medium text-accent">15%</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-dark">
                    <span className="text-sm">Tahmini Ömür</span>
                    <span className="text-sm font-medium text-accent">24 ay</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm">Sağlık Durumu</span>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${healthStatus === 100 ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                      %{healthStatus}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-4">Lastik Bende'de Satışa Çıkar</h3>
                {isForSale ? (
                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                      <svg className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-center text-sm text-gray-medium mb-2">
                      Lastik Bende'de satışa çıkarıldı!
                    </p>
                    <div className="flex flex-col items-center">
                      <p className="text-center font-medium text-lg text-accent mb-1">
                        {price.toLocaleString('tr-TR')} ₺
                      </p>
                      <span className={`text-xs px-2 py-1 rounded-full mb-3 ${healthStatus === 100 ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                        %{healthStatus}
                      </span>
                    </div>
                    <button 
                      className="mt-2 text-sm text-accent underline"
                      onClick={() => setIsForSale(false)}
                    >
                      Düzenle
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Fiyat
                      </label>
                      <div className="flex items-center">
                        <input
                          type="number"
                          value={price}
                          onChange={handlePriceChange}
                          className="input-field flex-grow"
                          min="0"
                          step="50"
                        />
                        <span className="ml-2 text-sm font-medium">₺</span>
                      </div>
                      <p className="text-xs text-gray-medium mt-1">
                        Lastik durumuna göre Lastik Bende'nin önerdiği fiyat: 1.500 ₺
                      </p>
                    </div>
                    
                    <button
                      type="button"
                      className="btn-primary w-full"
                      onClick={handleListForSale}
                    >
                      Lastik Bende'de Satışa Çıkar
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="card p-6 flex flex-col items-center justify-center h-full">
              <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center mb-4">
                <svg className="h-12 w-12 text-gray-medium" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Analiz Sonuçları</h3>
              <p className="text-sm text-gray-medium text-center max-w-md">
                Lastik Bende analizi yapmak için lütfen formu doldurun ve bir lastik fotoğrafı yükleyin.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 