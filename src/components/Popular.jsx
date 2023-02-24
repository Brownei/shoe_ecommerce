import { useState } from "react";
import ProductList from "./ProductList";



const Popular = () => {

  const [products, setProducts] = useState ([
    { image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/852c5323-cf29-435d-919d-2936c4bce051/air-jordan-5-x-dj-khaled-mens-shoes-F3jrrH.png', 
      title:'Air Jordan 5 x DJ Khaled', 
      price:'50,000', 
      id: 1 },
    { image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fadf1b0c-c687-4e3d-8f4e-6d089d115a0c/air-jordan-13-retro-shoe-08RC9v.png', 
      title:'Air Jordan 13 Retro', 
      price:'50,000', 
      id: 2 },
    { image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4fe536ca-4075-40b4-8b07-7efd0f6b6183/air-penny-2-mens-shoes-mMv3Hx.png', 
      title:'Nike Air Penny 2', 
      price:'50,000', 
      id: 3 },
    { image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2557b521-7942-40b2-af87-9839b62bba32/air-more-uptempo-96-mens-shoes-zpkSSs.png', 
      title:'Nike Air More Uptempo `96 ', 
      price:'50,000', 
      id: 4 },
    { image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8e5c2b2d-ffed-4874-a843-338faf37b8e3/dunk-high-retro-mens-shoes-dTVTCk.png', 
      title:'Nike Dunk High Retro', 
      price:'50,000', 
      id: 5 },
    { image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png', 
      title:'Nike Air Force 1', 
      price:'50,000', 
      id: 6 },
  ]);

  return (
    <div>
      <h2 className="popular-section font-semibold text-3xl text-center mt-32 mb-5 z-10"> Popular Products</h2>
      <ProductList products={products} />
    </div>
  );
}

export default Popular;