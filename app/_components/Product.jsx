"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Product({ id, title, description, category, price, rating }) {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-[1300px] mx-auto p-6 bg-white shadow-lg rounded-lg'>
      <div className='flex-shrink-0 mb-4 md:mb-0'>
        <Image src="/iphone.jpg" alt={title} width={300} height={200} className="rounded-md" />
      </div>

      <div className='md:ml-8 text-center md:text-left'>
        <h1 className='text-xl font-bold text-gray-800'>{title}</h1>
        <p className='text-gray-600 mt-2'>{description}</p>
        <p className='text-gray-500 mt-2'>Category: {category}</p>
        <div className='mt-4 flex flex-col md:flex-row items-center justify-between'>
          <div>
            <p className='text-lg font-semibold text-green-500'>${price}</p>
            <p className='text-yellow-400 mt-2'>Rating: {rating} / 5</p>
          </div>
          <div className='mt-4 md:mt-0'>
            <Link href={`/productlist/${id}`}>
              <Button className="mr-4">Book Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
