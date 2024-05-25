import React from 'react'



const Section = ({title,price,description,leftButton,rightButton,image}) => {
  return (
    <div>

      <div className={`h-screen bg-cover bg-center bg-no-repeat bg-${image}`}>
        <div>
          <div className='absolute pt-[17vh] left-[50%] translate-x-[-50%] inset-x-0  text-center'>
            <h1 className='text-4xl font-bold '>
              {title}
            </h1>
            <p className='text-sm font-semibold p-1'>{price}</p>
            <h6 className='text-xs'>{description}</h6>
          </div>

        </div>

        <div className='flex flex-col items-center sm:flex-row absolute mt-[80vh] justify-center left-[50%] translate-x-[-50%] inset-x-0'>
          <button className='rounded-[4px] bg-[#ffffff] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-black sm:mx-2'>{leftButton}</button>
          
          {rightButton && <button className='rounded-[4px] bg-[#222222] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white sm:mx-2'>{rightButton}</button>}
        </div>
        
      </div>

    </div>
    
  )
}

export default Section