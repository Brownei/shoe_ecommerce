import React from 'react';
import ProductList from "../components/ProductList";
import { useState, useEffect } from 'react';


const Explore = () => {

  const [products, setProducts] = useState (null);
  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProducts(data);
      })
  }, [])

  return (
    <div className='mt-10'>
      <h2 className="popular-section font-semibold text-3xl text-center mb-5 z-20 py-5 bg-[#F6F6F6]"> Explore Different Shoes And Affordable Prices</h2>
      {products && <ProductList products={products} />}
    </div>
  );
}

export default Explore;