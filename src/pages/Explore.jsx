import React from 'react';
import ProductList from "../components/ProductList";
import { useState, useEffect } from 'react';


const Explore = () => {

  const [products, setProducts] = useState ([]);
  
  const getProducts = async () => {
    const response = await fetch('http://localhost:8000/products');
    const data = await response.json();

    setProducts(data);
  }
  
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h2 className="popular-section font-semibold text-3xl text-center mb-5 z-20 py-5 bg-[#F6F6F6]"> Explore Different Shoes And Affordable Prices</h2>
      {
        products?.length > 0 
        ?
        (<div className='container relative mx-auto p-6 grid justify-center items-center space-x-0 space-y-4 md:space-x-4 md:grid-cols-3 lg:grid-cols-4'>
          {products.map((product) => (
            <div>{products && <ProductList product={product}/>}</div>
          ))}
          </div> )
        : (<div className="font-bold text-center relative top-[50%]"><h2>No Products Currently</h2></div> )
      }
    </>
  );
}

export default Explore;