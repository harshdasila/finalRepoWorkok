import React from 'react'
import LogoImg from '../images/Logo.jpeg'
import { Link, Navigate } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className='flex h-[5rem] justify-between bg-white'>
      <div className='flex p-2'>
        <img className='ml-5 text-xl' src={LogoImg} alt='logo'></img>
      </div>
      <div className='flex p-4 text-lg font-semibold mr-[4rem]'>
        <button className='navbar-text mx-3 flex justify-center items-center hover:text-blue-500'>
        <Link to="/">Home</Link>
          </button>
        <button className='navbar-text mx-3 flex justify-center items-center hover:text-blue-500'>
        <Link to="/about">About Us</Link>
        </button>
        <button className='navbar-text mx-3 flex justify-center items-center hover:text-blue-500'> 
          Contact US
        </button>
      </div>
    </div>
  )
}

export default Navbar
