


const Hero = () => {
  return (
    <div>
      <div className='h-screen bg-cover bg-no-repeat bg-center bg-model-y'>
        
        <div>
          <div className='absolute pt-[7vh] left-[50%] translate-x-[-50%] inset-x-0  text-center'>
            <h1 className='text-[40px] font-semibold '>
              Model Y
            </h1>
            <p className='text-[23px] font-semibold  underline underline-offset-4 tracking-wide mt-[-4px] '>0.99% <span className='font-[500]'>APR Financing</span></p>
            <p className='text-[14px] font-light mt-[4px]'>From <span className='font-[600]'>$299</span>/mo Lease After Est. Gas Savings</p>
          </div>
        </div>
        <div className='flex flex-col items-center sm:flex-row absolute mt-[70vh] justify-center left-[50%] translate-x-[-50%] inset-x-0'>
          <button className='rounded-[4px] bg-[#ffffff] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-black sm:mx-2'>Order Now</button>
          <button className='rounded-[4px] bg-[#222222] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white sm:mx-2'>Demo Drive</button>
        </div>

      </div>

    </div>
    
  )
}

export default Hero