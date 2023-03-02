import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

const ProductList = ({ products }) => {


  return (
    <div className='each-product container mx-auto p-4 flex flex-wrap max-w-sm justify-center items-center space-x-0 space-y-4 z-20 md:space-x-3 md:max-w-7xl'>
      { products.map((product) => (
       <div className='relative flex flex-col justify-center items-start border rounded-2xl pb-5 shadow-sm duration-200 hover:scale-105 bg-[#F6F6F6] md:w-1/3 lg:w-1/5' key={product.id} >
          <img src= { product.image } alt= { product.title } />
          <h4 className='text-start mx-3 my-2 text-lg'> { product.title } </h4>
          <div className='flex items-start mx-3 my-1 space-x-1'>
            <AiFillStar fontSize={20} fill='rgba(243, 181, 25)'/>
            <AiFillStar fontSize={20} fill='rgba(243, 181, 25)'/>
            <AiFillStar fontSize={20} fill='rgba(243, 181, 25)'/>
            <AiFillStar fontSize={20} fill='rgba(243, 181, 25)'/>
            <AiFillStar fontSize={20} fill='rgba(243, 181, 25)'/>
          </div>
          <div className='flex px-3 py-1'>
            <h6 className='font-light'> { product.price } </h6>
            <button><FiShoppingCart className='absolute bottom-6 right-5' fontSize={22} /></button>
          </div>
          <div className='absolute top-3 right-4'>
            <button><AiOutlineHeart onMo fontSize={23}/></button>
          </div>
       </div>
      ))}
    </ div>
  )
}

export default ProductList