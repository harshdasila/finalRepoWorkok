import React from 'react'

const Sales = () => {
  return (
    <div
    className='h-[650px] w-full bg-no-repeat bg-center bg-cover relative p-5 shadow-md'
    style={{
      backgroundImage: 'url("https://copynsupplies.com/wp-content/uploads/2019/03/sns-bestreviews-office-three-best-laser-printers-20190318.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}
  >
    <div className='main-container relative p-3'>
        <div className='relative w-[300px] h-[280px] top-[58px] left-[58px]'>
            <div className='discount-card bg-blue-500 w-[290px] h-full rounded-[10px] rotate-45 text-white lg:flex items-center justify-center'>
                <div className='absolute transform -rotate-45 text-center'>
                    <div className='text-[24px] leading-1  italic font-semibold'>Summer season sale</div>
                    <div className='text-[26px] mb-[10px]'>START PURCHASE NOW</div>
                    <button className='text-[14px] leading-1  border border-1 p-3'>PURCHASE NOW</button>
                </div>
               
            </div>
            
        </div>
        <div className='discount-card relative w-[115px] h-[115px] transform rotate-45 text-center bg-white rounded-[10px] top-[-270px] left-[206px]'>
            <div className=' absolute transform -rotate-45 text-center lg:flex items-center justify-center w-full h-full'>
                <div className=''>
                <div className='font-bold text-blue-500 text-[25px]'>
                    UPTO 50%
                </div>
                <div className='text-blue-500 text-[30px]'>
                    OFF
                </div>
                </div>
            </div>
</div>

    </div>
    
  </div>
  
  )
}

export default Sales
