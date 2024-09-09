"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  useEffect(() => {
    if (isMounted && id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.error('Error fetching product:', err));
    }
  }, [id, isMounted]);

  if (!isMounted || !product) return <div>Loading...</div>;

  return (
    <div className='p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg'>
      <div className='flex flex-col items-center md:flex-row'>
       
        <Image src={product.thumbnail} alt={product.title} width={400} height={300} className='rounded-md' />

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
    </div>
  );
};

export default ProductDetail;
