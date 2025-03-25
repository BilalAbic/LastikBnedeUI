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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Lastik Analizi</h1>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Lastik Markası</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Model</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Ebat</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Fotoğraf</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full"
            required
          />
          {previewUrl && (
            <div className="mt-4">
              <Image
                src={previewUrl}
                alt="Lastik önizleme"
                width={300}
                height={200}
                className="rounded"
              />
            </div>
          )}
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          disabled={!previewUrl}
        >
          Analiz Et
        </button>
      </form>

      {showResults && (
        <div className="mt-8 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4">Analiz Sonuçları</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">Lastiğinizin durumu: <span className="font-semibold">İyi</span></p>
            <p className="mb-4">Tahmini kullanım ömrü: <span className="font-semibold">2 yıl</span></p>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Satışa Çıkar</h3>
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={isForSale}
                  onChange={(e) => setIsForSale(e.target.checked)}
                  className="h-4 w-4"
                />
                <span>Bu lastiği satışa çıkarmak istiyorum</span>
              </div>
              
              {isForSale && (
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-2">Fiyat (TL)</label>
                  <input
                    type="number"
                    value={price}
                    onChange={handlePriceChange}
                    className="w-full p-2 border rounded"
                    placeholder="0"
                    min="0"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 