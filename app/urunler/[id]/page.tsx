'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  condition: string;
  image: string;
  description: string;
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Simüle edilmiş ürün verisi
    const mockProduct = {
      id: parseInt(params.id),
      name: 'Michelin Pilot Sport 4',
      size: '225/45 R17',
      price: 2500,
      condition: 'İyi',
      image: '/images/tire1.jpg',
      description: 'Yüksek performanslı yaz lastiği. Mükemmel yol tutuşu ve fren performansı sunar. Islak zeminde güvenli sürüş sağlar.'
    };
    
    setProduct(mockProduct);
  }, [params.id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/urunler"
          className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6"
        >
          ← Ürünlere Dön
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-96">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="space-y-4">
              <p className="text-gray-600">
                <span className="font-semibold">Ebat:</span> {product.size}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Durum:</span> {product.condition}
              </p>
              <p className="text-3xl font-bold text-blue-600">
                {product.price.toLocaleString('tr-TR')} ₺
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <h2 className="text-xl font-semibold mb-2">Ürün Açıklaması</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600">
                İletişime Geç
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 