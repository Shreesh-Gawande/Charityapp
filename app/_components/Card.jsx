import React from 'react';
import Image from 'next/image'; 

function Card({ imageSrc, heading, description, price }) {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs mt-10'>
      <Image src={imageSrc} alt={heading} width={300} height={500} className='w-full h-64 object-cover' />
      <div className='p-4'>
        <h2 className='text-xl text-black font-bold mb-2' >{heading}</h2>
        <p className='text-gray-700 text-sm mb-4'>{description}</p>
        <p className='text-lg font-semibold text-green-500 '>{price}    <span className='text-gray-400 '>Donated till now </span></p>
      </div>
    </div>
  );
}

export default Card;
