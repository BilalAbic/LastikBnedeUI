import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div>
            <img
              src="/images/tire-detail1.jpg"
              alt="Lastik Detay"
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-3 gap-4 mt-4">
              <img
                src="/images/tire-detail2.jpg"
                alt="Lastik Detay 2"
                className="w-full rounded-lg cursor-pointer"
              />
              <img
                src="/images/tire-detail3.jpg"
                alt="Lastik Detay 3"
                className="w-full rounded-lg cursor-pointer"
              />
              <img
                src="/images/tire-detail4.jpg"
                alt="Lastik Detay 4"
                className="w-full rounded-lg cursor-pointer"
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">Lastik Test {id}</h1>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Kullanıcı Bilgilendirme ve Notifikasyon</h2>
                <p className="text-gray-600">
                  Lastik durumu hakkında detaylı bilgilendirme ve öneriler
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Analiz Sonuçları</h2>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Diş derinliği: 7mm</li>
                  <li>Basınç durumu: Normal</li>
                  <li>Aşınma durumu: %15</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 