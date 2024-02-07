import React from 'react'

const DiscountCard = ({discount,imgLink}) => {
    console.log(discount)
    
  return (
    
    <div
        className='h-[240px] w-[350px] bg-no-repeat bg-center bg-cover relative p-5 shadow-md mx-3'
        style={{
        backgroundImage: `url(${imgLink})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
        }}
    >
        <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 discount-text w-1/2 text-center'>
        <div className='text-xl font-bold border-y border-white my-2 hover:bg-gray-800 hover:text-white ease-in'>
            {`UPTO ${discount}% OFF`}
        </div>
        <button className='my-2 border border-white p-2 hover:bg-gray-800 hover:text-white ease-in'>
            PURCHASE NOW
        </button>
        </div>
        <div className='absolute w-full h-1 bg-white top-0'></div>
        <div className='absolute w-full h-1 bg-white bottom-0'></div>
    </div>



  )
}

export default DiscountCard
