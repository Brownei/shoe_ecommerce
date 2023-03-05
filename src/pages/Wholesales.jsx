import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import gsap from "gsap";

const Wholesales = () => {

  const [products, setProducts] = useState ([]);
  
  const getProducts = async () => {
    const response = await fetch('http://localhost:8000/products');
    const data = await response.json();

    setProducts(data);
  }
  
  useEffect(() => {
    getProducts();
    gsap.fromTo('.wholesale-section', 1.5, {opacity: 0, y: 50}, {opacity: 1, y: 0})
  }, []);

  return (
    <section>
      <div className='bg-[#F6F6F6] border-b-0 overflow-hidden'>
        <h2 className="wholesale-section font-semibold text-3xl text-center pt-7 pb-2">Promo 30% Off For Buying in Bulk</h2>
      </div>
      {
        products?.length > 0 
        ?
        (<div className='container relative mx-auto p-6 grid grid-cols-2 justify-center items-center space-x-0 space-y-4 md:space-x-4 md:grid-cols-3 lg:grid-cols-4'>
          {products.slice(10).map((product) => (
            <div>{products && <ProductList product={product}/>}</div>
          ))}
          </div> )
        : (<div className="font-bold text-center absolute top-[50%] left-[30%] md:left-[45%]"><h2>No Products Currently</h2></div> )
      }
    </section>
  )
}

export default Wholesales