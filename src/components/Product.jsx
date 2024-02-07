import React from 'react'

const Product = ({imgLink,Name,Price}) => {
  return (
    <div className='h-[350px] w-[300px] m-7 p-3 rounded-lg'>
      <img src={imgLink}></img>
      <div className='bg-white p-4  shadow-md'>
        <div className='font-bold text-xl text-gray-800'>
            {Name}
        </div>
        <div className='flex items-center'>
        <div className='font-semibold text-lg text-blue-600 mr-2'>
            Price ${Price}
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300'>
            Read More
        </button>
        </div>
        </div>
    </div>
  )
}

export default Product
