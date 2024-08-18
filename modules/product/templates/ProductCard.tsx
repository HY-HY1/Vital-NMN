import React from 'react';
import CheckoutButton from '@/modules/common/buttons/checkoutButton/checkoutButton';
import ProductInfo from '@/modules/product/components/information/information';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  size: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='grid grid-cols-2 gap-8 p-6 border rounded-lg shadow-md'>
      <div>
        {/* Placeholder for product image */}
        <img src='/path-to-your-image.jpg' alt={product.name} className='w-full h-auto' />
      </div>
      <div>
        {/* Use the ProductInfo component to display product details */}
        <ProductInfo product={product} />
        <div className='mt-4'>
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
