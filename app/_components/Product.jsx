import Image from 'next/image';
import React from 'react';

function Product({  title, description, category, price, rating }) {
  return (
    <div className='flex items-center justify-between w-full max-w-[1024px] p-6 bg-white shadow-lg rounded-lg'>
      
      <div className='flex-shrink-0'>
        <Image src="" alt={title} width={200} height={200} className="rounded-md" />
      </div>

      
      <div className='ml-8'>
        <h1 className='text-xl font-bold text-gray-800'>{title}</h1>
        <p className='text-gray-600 mt-2'>{description}</p>
        <p className='text-gray-500 mt-2'>Category: {category}</p>
        <p className='text-lg font-semibold text-green-500 mt-4'>${price}</p>
        <p className='text-yellow-400 mt-2'>Rating: {rating} / 5</p>
      </div>
    </div>
  );
}

export default Product;
