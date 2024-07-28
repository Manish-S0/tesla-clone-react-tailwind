

const Section = ({title,price,description,leftButton,rightButton,image,text,title_img}) => {
  return (
    <div>

      <div className={`h-screen bg-cover bg-center bg-no-repeat bg-${image}`}>
        <div>
          <div className={`absolute pt-[10vh] justify-center flex flex-col  inset-x-0 text-center text-${text}`}>
            {title? <div>
              <h1 className='text-4xl font-bold '>
              {title}
              </h1>
            </div>:<div className="absolute left-[35%] pt-[10vh] flex flex-col w-[30%] "><img src={title_img} alt="" /></div>

            }
            
            <p className='text-xl font-semibold '>{price}</p>
            <h6 className='text-xl'>{description}</h6>
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