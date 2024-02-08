import React from 'react'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className='Categories'>
    <div className='flex justify-center mt-7 '>
      <div className='text-3xl '>
        Featured Categories
      </div>
      
    </div>
    <div className='category-list features-container flex items-center justify-center'>
        <CategoryItem name={"Printer-Accesories"} imgLink={"https://copynsupplies.com/wp-content/uploads/2019/03/printer_accessories.png"}/>
        <CategoryItem name={"Generic Drivers"} imgLink={"https://copynsupplies.com/wp-content/uploads/2019/03/generic_drivers.png"}/>
        <CategoryItem name={"Printer Ink"} imgLink={"https://copynsupplies.com/wp-content/uploads/2019/03/kisspng-printer-ink-cartridge-vector-color-stereo-5a7439db59b908.9339065715175664273675-300x300.jpg"}/>
        <CategoryItem name={"Printers"} imgLink={"https://copynsupplies.com/wp-content/uploads/2019/03/printercategory-300x300.png"}/>
    </div>
    </div>
  )
}

export default Categories
