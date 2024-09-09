"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '@/app/_components/Footer';
import { useParams } from 'next/navigation';
import Header from '@/app/_components/Header';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const { id } = useParams(); 

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(data => {
          setProduct(data);
          setIsLoading(false);
        })
        .catch(err => {
          console.error('Error fetching product:', err);
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found</div>;

  return (
    <>
    <Header/>
    <div className='p-6 w-full max-w-[1300px] mx-auto bg-white shadow-lg rounded-lg'>
      <div className='flex flex-col items-center md:flex-row'>
        <Image src="/iphone.jpg" alt={product.title} width={400} height={300} className='rounded-md' />
        <div className='md:ml-8 mt-4 md:mt-0'>
          <h1 className='text-2xl font-bold text-gray-800'>{product.title}</h1>
          <p className='text-gray-600 mt-2'>{product.description}</p>
          <p className='text-gray-500 mt-2'>Category: {product.category}</p>
          <div className='mt-4'>
            <p className='text-lg font-semibold text-green-500'>Price: ${product.price}</p>
            <p className='text-yellow-400 mt-2'>Rating: {product.rating} / 5</p>
          </div>
        </div>
      </div>
      
      <div className='mt-6'>
        <h2 className='text-xl font-semibold text-gray-800'>More Details:</h2>
        <p className='text-gray-600 mt-2'>Brand: {product.brand}</p>
        <p className='text-gray-600 mt-2'>Stock: {product.stock}</p>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default ProductDetail;
