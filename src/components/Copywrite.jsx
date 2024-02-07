import React from 'react';

function Copywrite() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className=' bg-[#007eff] text-white text-sm p-5 leading-7'>
            
            <p className='text-xl'>© {currentYear} Copy & Supplies. All rights reserved.</p>
            <p>
                Disclaimer: Merchandise purchased from Copy & Supplies is directly supported by their Original Equipment Manufacturer (OEM). We strictly adhere to CTS's & FTC's Mail, Internet, or Telephone Order Merchandise Rule for Buyer indemnity. Copy & Supplies is an online independent e-commerce web portal for various brands and products. Copy & Supplies hereby disclaims any association or affiliation with products purchased on our website www.copynsupplies.com. The merchandise that we offer is also available on the respective brand owners' websites. Kindly refer to our Refund Policy or Contact us anytime for any queries.
            </p>
        </footer>
    );
}

export default Copywrite;
