import React from 'react'
import DiscountCard from './DiscountCard'

const DiscountsContainer = () => {
  return (
    <div className='DiscountsContainer flex justify-center p-3 mx-auto bg-white'>
      <DiscountCard discount={40} imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/discount1-1-300x192.png"/>
      <DiscountCard discount={30} imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/inkdiscount-300x192.png"/>
      <DiscountCard discount={30} imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/accessoriesdiscount-300x192.png"/>
    </div>
  )
}

export default DiscountsContainer
