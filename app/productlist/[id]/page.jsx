"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import { useParams } from 'next/navigation';

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

  if (isLoading) return <div className="flex items-center justify-center min-h-screen text-lg">Loading...</div>;
  if (error) return <div className="flex items-center justify-center min-h-screen text-lg">Error: {error}</div>;
  if (!product) return <div className="flex items-center justify-center min-h-screen text-lg">No product found</div>;

  return (
    <>
      <Header />
      <div className="p-8 bg-[#F8F6E4]-50">
        
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <Image src="/iphone.jpg" alt={product.title} width={400} height={400} className="object-cover w-full h-full md:h-auto rounded-t-lg md:rounded-none md:rounded-l-lg" />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-gray-600 mt-4">{product.description}</p>
            <p className="text-gray-500 mt-2">Category: <span className="font-semibold">{product.category}</span></p>
            <div className="mt-4">
              <p className="text-2xl font-semibold text-green-600">Price: ${product.price}</p>
              <p className="text-yellow-500 mt-2 font-medium">Rating: {product.rating} / 5</p>
              <p className={`mt-2 ${product.stock < 10 ? 'text-red-600' : 'text-gray-500'}`}>
                {product.availabilityStatus} (Stock: {product.stock})
              </p>
              <p className="text-gray-500 mt-2">SKU: {product.sku}</p>
            </div>
          </div>
        </div>

        
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-8 p-6">
          <h2 className="text-2xl font-bold text-gray-800">Product Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <p className="text-gray-600"><span className="font-semibold">Brand:</span> {product.brand}</p>
            <p className="text-gray-600"><span className="font-semibold">Weight:</span> {product.weight}g</p>
            <p className="text-gray-600"><span className="font-semibold">Dimensions:</span> {product.dimensions.width}cm (W) x {product.dimensions.height}cm (H) x {product.dimensions.depth}cm (D)</p>
            <p className="text-gray-600"><span className="font-semibold">Warranty:</span> {product.warrantyInformation}</p>
            <p className="text-gray-600"><span className="font-semibold">Shipping:</span> {product.shippingInformation}</p>
            <p className="text-gray-600"><span className="font-semibold">Return Policy:</span> {product.returnPolicy}</p>
          </div>
        </div>

       
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-8 p-6">
          <h2 className="text-2xl font-bold text-gray-800">Customer Reviews</h2>
          <div className="mt-6 space-y-4">
            {product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-lg font-semibold text-gray-800">{review.reviewerName}</p>
                  <p className="text-yellow-500 font-medium">Rating: {review.rating} / 5</p>
                  <p className="text-gray-600 mt-2">{review.comment}</p>
                  <p className="text-sm text-gray-400 mt-1">Reviewed on {new Date(review.date).toLocaleDateString()}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No reviews available for this product.</p>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
