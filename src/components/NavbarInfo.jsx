import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../App.css';

const NavbarInfo = () => {
  return (
    <div className='navbarInfo bg-black flex lg:h-[2.75rem] sm:h-auto justify-center'>
      <div className='navbarItem flex justify-center items-center text-white mx-4' >
        <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}} />
        <span className='navbarSpan text-sm ml-2 '>2 W Welton Ave, Temple, TX 76501, United States</span>
      </div>
      <div className='navbarItem flex justify-center items-center text-white mx-4'>
        <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} />
        <span className='navbarSpan text-sm ml-2'> info@supplyandservices.com</span>
      </div>
      <div className='navbarItem flex justify-center items-center text-white mx-4'>
        <FontAwesomeIcon className='mx-1' icon={faFacebook} />
        <FontAwesomeIcon className='mx-1' icon={faTwitter} />
        <FontAwesomeIcon className='mx-1' icon={faInstagram} />
      </div>
      <div className='navbarItem flex justify-center items-center text-white mx-4'>
        <FontAwesomeIcon className='mx-1' icon={faPhone} />
        <span className='navbarSpan'>+1 803 753 8877</span>
      </div>
    </div>
  )
}

export default NavbarInfo
