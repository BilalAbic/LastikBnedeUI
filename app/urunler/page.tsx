'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  const [products] = useState([
    {
      id: 1,
      name: 'Michelin Pilot Sport 4',
      size: '225/45 R17',
      price: 2500,
      condition: 'İyi',
      image: '/images/tire1.jpg'
    },
    {
      id: 2,
      name: 'Bridgestone Turanza T005',
      size: '205/55 R16',
      price: 2200,
      condition: 'Çok İyi',
      image: '/images/tire2.jpg'
    },
    {
      id: 3,
      name: 'Goodyear Eagle F1',
      size: '245/40 R18',
      price: 2800,
      condition: 'Mükemmel',
      image: '/images/tire3.jpg'
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Lastik Listesi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">Ebat: {product.size}</p>
              <p className="text-gray-600 mb-2">Durum: {product.condition}</p>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                {product.price.toLocaleString('tr-TR')} ₺
              </p>
              
              <Link
                href={`/urunler/${product.id}`}
                className="block w-full bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
              >
                İncele
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 