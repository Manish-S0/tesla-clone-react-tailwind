import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { SlGlobe } from "react-icons/sl";

const Menu = () => {
  return (
    <div >
      <div className='flex justify-between items-center hover:bg-black/5 font-[600] text-[17px] mx-5 my-3 rounded hover:cursor-pointer py-2'>
        <div className=' px-3 my-2 opacity-80'>Vehicles</div>
          <div className='opacity-50'>
            <MdKeyboardArrowRight size={27}/>
          </div>
      </div>
        <div className='flex justify-between items-center hover:bg-black/5 font-[600] text-[17px] mx-5 my-3 rounded hover:cursor-pointer py-2'>
          <div className='px-3 my-2 opacity-80'>Energy</div>
          <div className='opacity-50'>
            <MdKeyboardArrowRight size={27}/>
          </div>
        </div> 
        <div className='flex justify-between items-center hover:bg-black/5 font-[600] text-[17px] mx-5 my-3 rounded hover:cursor-pointer py-2'>
          <div className=' px-3 my-2 opacity-80'>Charging</div>
          <div className='opacity-50'>
            <MdKeyboardArrowRight size={27}/>
          </div>
        </div>
        <div className='flex justify-between items-center hover:bg-black/5 font-[600] text-[17px] mx-5 my-3 rounded hover:cursor-pointer py-2'>
          <div className='px-3 my-2 opacity-80'>Discover</div>
          <div className='opacity-50'>
            <MdKeyboardArrowRight size={27}/>
          </div>
        </div>

        <div className='flex justify-between items-center hover:bg-black/5 font-[600] text-[17px] mx-5 my-3 rounded hover:cursor-pointer py-2'>
          <div className=' px-3 my-2 opacity-80'>Shop</div>
            
        </div>

        <div className='flex justify-between items-center hover:bg-black/5 font-[600] text-[17px] mx-5 my-3 rounded hover:cursor-pointer py-2'>
          <div className=' px-3 my-2 opacity-80'>Support</div>
            
        </div>
        <div className='flex justify-between items-center hover:bg-black/5 font-[600] text-[17px] mx-5 my-3 rounded hover:cursor-pointer py-2'>

          <div className='flex items-center'>
            <div className='px-3 my-2 opacity-80'>
              <SlGlobe size={20}/>
            </div>
            <div className=' my-2 opacity-80'>United States</div>
          </div>
          <div className='opacity-50 mr-0.5'>
            <MdKeyboardArrowRight size={27}/>
          </div>
          
        </div>
        

        <div className='flex  items-center hover:bg-black/5 font-[600] text-[17px] mx-5 my-3 rounded hover:cursor-pointer py-2'>
          <div className='px-3 my-2'>
            <VscAccount size={20}/>
          </div>
          <div className='opacity-80'>Account</div>
            
        </div>

          {/* TODO: use map function */}

          
    </div>
  )
}

export default Menu