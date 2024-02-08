import React from 'react'

const ChooseUs = () => {
  return (
    <div className='p-9 mt-[3rem]  bg-[#007eff]'>
    <div className='flex justify-center  '>
        <div className='text-3xl font-bold'>Why Choose US</div>
    </div>
    <div className='flex justify-between'>
            <div className='choose-us-item lg:w-2/5 lg:pl-5 ml-5'>
                <h1 className='text-white flex justify-center items-center text-[23px] font-weight-[600] border-b-2 border-white'>Authentic Products</h1>
                <div className='text-white text-balance font-[400] text-[18px] mt-5 pb-3'>
                  Our Brand is a synonym to authenticity. We procure only genuine products from verified vendors to ensure quality. We completely back our services by providing a 10 days no question refund policy.
                </div>
            </div>
            <div className='choose-us-item lg:w-2/5 lg:pr-5 mr-5'>
                <h1 className='text-white flex justify-center items-center text-[23px] font-weight-[600] border-b-2 border-white '>Round The Clock Customer Service
</h1>
                <div className='text-white text-balance font-[400] text-[18px] mt-5 pb-3'>
                All your questions regarding Order status, Order tracking, Cancellation, refunds & general queries are entertained 24X7 by our customer service representatives. We understand the importance of your order and value your time.
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs
