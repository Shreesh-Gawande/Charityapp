"use client"
import React, { useEffect, useState } from 'react';
import Header from '../_components/Header';
import Product from '../_components/Product';

function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
       
        {products.map(product => (
          <Product 
            key={product.id}
            image={product.thumbnail}
            title={product.title}
            description={product.description}
            category={product.category}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
