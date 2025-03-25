import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Lastik Analizi</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="/images/tire1.jpg" alt="Lastik 1" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Section heading</h3>
            <p className="text-gray-600">Detaylı lastik analizi ve değerlendirmesi</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="/images/tire2.jpg" alt="Lastik 2" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Section heading</h3>
            <p className="text-gray-600">Profesyonel lastik bakım hizmetleri</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="/images/tire3.jpg" alt="Lastik 3" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Section heading</h3>
            <p className="text-gray-600">Uzman lastik değerlendirmesi</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 