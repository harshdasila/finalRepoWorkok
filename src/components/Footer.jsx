import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faMapLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    
    <div className='contact-us flex justify-center items-center bg-black pt-[4rem] pb-6'>
      <div className='contact-us-item lg:w-2/6 pl-5 ml-5'>
                <h1 className='text-white flex justify-center items-center text-[23px] font-weight-[600] border-b-2 border-blue w-4/5'>About Copy & Supplies</h1>
                <div className='text-white font-[400] text-[18px] mt-[22.75px] pb-3 leading-8'>
                We at Copy & Supplies work towards a unique goal of being the one stop destination for all kinds of printing needs for Home & Offices.
                </div>
                <div className='flex gap-[7px] mt-3'>
                    <a href='https://www.facebook.com/' className='flex justify-center items-center w-10 h-10 bg-[#272535]'>
                        <FontAwesomeIcon className='mx-1' icon={faFacebook} size='lg' style={{color: "#ffffff",}}/>
                    </a>
                    <a href='https://twitter.com' className='flex justify-center items-center w-10 h-10 bg-[#272535]'>
                    <FontAwesomeIcon className='mx-1' icon={faTwitter} size='lg' style={{color: "#ffffff",}}/>
                    </a>
                    <a href='https://www.instagram.com/' className='flex justify-center items-center w-10 h-10 bg-[#272535]'>
                    <FontAwesomeIcon className='mx-1' icon={faInstagram} size='lg' style={{color: "#ffffff",}}/>
                    </a>
                </div>
        </div>
        <div className='contact-us-item lg:w-2/6 pl-5 ml-5'>
                <h1 className='text-white flex justify-center items-center text-[23px] font-weight-[600] border-b-2 border-blue '>Contact Us</h1>
                <div className='text-white font-[400] text-[18px] mt-5 pb-3 leading-[30px]'>
                    <div className='flex  items-center mb-3'>
                        <FontAwesomeIcon className='flex' icon={faMapLocationDot} style={{color: "#ffffff",}} />
                        <span className='ml-4'>
                        2 W Welton Ave, Temple, TX 76501, United States
                        </span>
                    </div>
                    <div className='flex items-center mb-3'>
                        <FontAwesomeIcon icon={faMessage} style={{color: "#ffffff"}} />
                        <div className='ml-5 '>   
                            <div className=''>
                                General - info@supplyandservices.com
                            </div>
                            <div className=''>
                                Billing - billing@supplyandservices.com
                            </div>
                        </div>
                    </div>
                    <div className='flex  items-center mb-3'>
                        <FontAwesomeIcon icon={faMobile} style={{color: "#ffffff",}} />
                        <span className='ml-6'>
                        2 W Welton Ave, Temple, TX 76501, United States
                        </span>
                    </div>
                </div>
        </div>

        <div className='lg:w-2/6 pl-5 ml-5'>
    <h1 className=' text-white flex justify-center items-center text-[23px] font-weight-[600] border-b-2 border-blue'>Information</h1>
    <div className='contact-us-item text-white font-[400] text-[18px] mt-5 pb-3 leading-8'>
        <ul className='flex flex-col items-center'> {/* Apply flexbox styles here */}
            <li>About Us</li>
            <li>Disclaimer</li>
            <li>Refund Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
</div>

        
      </div>
  )
}

export default Footer
