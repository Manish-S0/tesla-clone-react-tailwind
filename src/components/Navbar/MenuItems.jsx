import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const MenuItems = (menuComponent) => {
  return (
    <div className="flex justify-between items-center hover:bg-black/5 font-[600] text-[17px] mx-5 my-3 rounded hover:cursor-pointer py-2"> 
      {menuComponent.map((item) => (
        <div className=' key={item.id}'>
          <div className="px-3 my-2 opacity-80">
            {item.label}
          </div>
          <div>
            <MdKeyboardArrowRight size={27} />
          </div>
        </div>
      ))}
    
    </div>
  )
}

export default MenuItems