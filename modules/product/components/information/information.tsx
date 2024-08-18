import React from 'react';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  size: string;
};

type ProductInfoProps = {
  product: Product;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div>
      <h2 className='text-2xl font-semibold'>{product.name}</h2>
      <p className='text-lg font-medium text-gray-600'>${product.price}</p>
      <p className='text-sm text-gray-500'>{product.description}</p>
      <p className='text-sm text-gray-500'>Size: {product.size}</p>
    </div>
  );
};

export default ProductInfo;
