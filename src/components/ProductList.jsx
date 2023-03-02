import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

const ProductList = ({ product }) => {


  return (
    <>
       <div className='relative flex flex-col justify-center items-start border rounded-2xl pb-5 shadow-sm duration-200 hover:scale-105 bg-[#F6F6F6]' key={product.id} >
          <img src= {product.image !== 'N/A' ? product.image : 'https://via.placeholder.com/400' } alt= { product.title } />
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
            <button><AiOutlineHeart fontSize={23}/></button>
          </div>
       </div>
    </>
  )
}

export default ProductList