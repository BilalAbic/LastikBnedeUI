import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">Logo</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Ana Sayfa</Link>
            <Link to="/analysis" className="text-gray-700 hover:text-gray-900">Analiz</Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900">Ürünler</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">Hakkımızda</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 