import React from 'react'

const CategoryItem = ({name,imgLink}) => {
  return (
    <div className='p-4 category-item'>
      <div>
        <img content='fit' src={imgLink}></img>
      </div>
      <button className='bg-white h-[60px] w-full p-3 flex justify-center items-center'>
        <span>{name}</span>
      </button>
    </div>
  )
}

export default CategoryItem
