import { useEffect, useState } from "react";
import React from "react";
import ProductList from "./ProductList";



const Popular = () => {

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
    <section>
      <h2 className="font-semibold text-3xl text-center mt-32 mb-5 z-10"> Popular Products</h2>
      {
        products?.length > 0 
        ?
        (<div className='container relative mx-auto p-6 grid grid-cols-2 justify-center items-center space-x-0 space-y-4 md:space-x-4 md:grid-cols-3 lg:grid-cols-4'>
          {products.slice(0,4).map(( product ) => (
            <div><ProductList product={product}/></div>
          ))}
          </ div> )
        : (<div className="font-bold text-center relative top-[50%]"><h2>No Products Currently</h2></div> )
      }
    </section>
  );
}

export default Popular;