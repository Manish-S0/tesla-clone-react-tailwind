

const Footer = () => {
  return (
    <div className="bg-black text-white text-xs pt-16 px-8 flex flex-col justify-center items-center text-center text-[12px]">
      <p className='block justify-center pb-3'>
        ¹ Excludes taxes and fees with price subject to change.Available in select states and requires credit <br className='md:block'/>
        
         approval. <span className='underline underline-offset-2 font-semibold'> Est. gas savings </span> is $100/month.
        <br />
        <a href="#" className="flex justify-center underline underline-offset-2 text-blue-500 hover:underline font-semibold">See Details</a>
      </p>
      <p className='pb-3'>
        
        ² Price before estimated savings is $38,990, excluding taxes and fees. Subject to change.
        
        <br />
        <a href="#" className="flex justify-center underline underline-offset-2 text-blue-500 hover:underline font-semibold">Learn about est. gas savings</a>
      </p>
      <p className='pb-3'>
        ³ Price before estimated savings is $77,990, excluding taxes and fees. Subject to change.
        <br />
        <a href="#" className="flex justify-center underline underline-offset-2 text-blue-500 hover:underline font-semibold">Learn about est. gas savings</a>
      </p>
      <p className='pb-3'>
        ⁴ Price before estimated savings is $72,990, excluding taxes and fees. Subject to change.
        <br />
        <a href="#" className="flex justify-center underline underline-offset-2 text-blue-500 hover:underline font-semibold">Learn about est. gas savings</a>
      </p>


      <div className='pt-10 pb-5 '>
        <ul className='flex items-center sm:pt-5 sm:flex-row flex-col'>
          <li className='py-2 mx-2 hover:cursor-pointer'>Tesla © 2024</li>
          <li className='py-2 mx-2 hover:cursor-pointer'>Privacy & Legal</li>
          <li className='py-2 mx-2 hover:cursor-pointer'>Vehicle Recalls</li>
          <li className='py-2 mx-2 hover:cursor-pointer xs:hidden sm:block'>Contact</li>
          <li className='py-2 mx-1 hover:cursor-pointer'>News</li>
          <li className='py-2 mx-2 hover:cursor-pointer xs:hidden sm:block'>Get Updates</li>
          <li className='py-2 mx-2 hover:cursor-pointer xs:hidden sm:block'>Locations</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Footer
