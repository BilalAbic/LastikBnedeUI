import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Lastik Test 1',
    image: '/images/tire-detail1.jpg',
    description: 'Yüksek performanslı lastik analizi'
  },
  {
    id: '2',
    name: 'Lastik Test 2',
    image: '/images/tire-detail2.jpg',
    description: 'Detaylı çatlak analizi'
  }
];

const ProductsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Ürünler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage; 