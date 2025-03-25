import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Hakkımızda</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/images/about-image.jpg"
              alt="Hakkımızda"
              className="w-full rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              Lastik analizi ve değerlendirmesi konusunda uzman ekibimizle,
              araç sahiplerine en iyi hizmeti sunmayı hedefliyoruz.
            </p>
            <p className="text-gray-600">
              Modern teknoloji ve uzman kadromuzla, lastiklerinizin durumunu
              detaylı olarak analiz ediyor ve size en doğru önerileri sunuyoruz.
            </p>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">İletişim Bilgileri</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Email: info@lastikanalizi.com</li>
                <li>Telefon: +90 (555) 123 45 67</li>
                <li>Adres: Teknoloji Mahallesi, İnovasyon Caddesi No:1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 