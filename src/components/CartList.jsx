import React, { useState } from 'react'

const CartList = ({image, title, price}) => {

  const [increase, setIncrease] = useState(1)

  return (
    <section>
      <div className='flex space-x-2 hover:border rounded-lg'>
        <img className='w-1/2 md:w-1/3' src={image} alt={title} />
        <div className='w-1/2 px-3 py-5 md:py-10'>
          <h6 className='text-xs font-semibold md:text-sm'>{ title }</h6>
          <span className='text-sm md:text-md'>{ price }</span>
          <div className='flex space-x-2'>
            <button className='border p-1 bg-black text-white font-medium md:px-2' onClick={() => setIncrease(() => increase + 1)}>+</button>
            <p className='p-1'>{ increase }</p>
            <button className='border p-1 bg-black text-white font-medium md:px-2' onClick={() => setIncrease(() => increase - 1)}>-</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartList;