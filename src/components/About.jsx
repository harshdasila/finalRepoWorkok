import React from 'react'
import NavbarInfo from './NavbarInfo'
import Navbar from './Navbar'
import Footer from './Footer'
import Copywrite from './Copywrite'

const About = () => {
  return (
    <div>
      <NavbarInfo/>
      <Navbar/>
      <div className='bg-white p-5'>
      <div className='flex justify-center items-center font-[28px] text-[#515151] '> 
         <h1 className='flex text-2xl font-semibold p-5 mt-7 border-b-4 border-gradient-to-r from-blue-400 via-green-400 to-yellow-400'>About US</h1>
         
      </div>
      <div className='flex justify-center items-center '>
        <div className='text-lg leading-6 w-3/4 p-5'>
            We at Copy & Supplies (www.supplyndservices.com) work towards a unique goal of being the one stop destination for all kinds of printing needs for Home & Offices. Our aim is to provide the most impeccable service in North America. Our method of functioning involves procuring the most genuine and affordable products directly from multiple OEM (Original Equipment Manufacturer) and shipping directly to the consumer without any middle man. We always stay updated with the latest products and trends and will keep our customers updated too.We strive to add better products to our catalog with time. Happy Shopping !
         </div>
      </div>
      
      </div>
      <Footer/>
      <Copywrite/>
      
      
    </div>
  )
}

export default About
