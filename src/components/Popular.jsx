import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";



const Popular = () => {

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
    <div>
      <h2 className="popular-section font-semibold text-3xl text-center mt-32 mb-5 z-10"> Popular Products</h2>
      {products && <ProductList products={products} />}
    </div>
  );
}

export default Popular;