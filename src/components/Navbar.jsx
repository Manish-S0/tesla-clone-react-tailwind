import React, { useEffect, useState } from 'react'
import { TfiHelpAlt } from "react-icons/tfi";
import { SlGlobe } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import NavItems from './Navbar/NavItems';
import Navbar1 from './Navbar/Navbar1';
import Menu from './Menu';

const Navbar = () => {
  const [nav,setNav]=useState(false)

  const handleNav=()=>{
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center px-10 p-4 text-sm font-medium'>
      <div >
        <img className="h-3"src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=" alt="" />
      </div>

      <div className='hidden lg:inline font-[600] text-center'>
        
        <NavItems navComponent={[{id:1,label:'Vehicles'},{id:2,label:'Energy'},{id:3,label:'Charging'},{id:4,label:'Discover'},{id:5,label:'Shop'}]}/>
      </div>

      <div className='hidden lg:inline'>
        <ul className='flex justify-center hover:cursor-pointer'>
          <li className='py-1 px-1 mx-1 hover:shadow'>
          <TfiHelpAlt size={20} />
          </li>
          <div className='py-1 px-1 hover:shadow'>
           <SlGlobe size={20}/>
          </div>
          <li className='py-1 px-1 mx-1 hover:shadow'>
            <VscAccount size={20}/>
          </li>
        </ul>
      </div>


      <div className='lg:hidden'>
        <button onClick={handleNav} className='inline-flex rounded-md py-2 px-4 p-2 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10 items-center'>
          Menu
        </button>
      </div>
      <div className={`lg:hidden ${nav?'bg-white absolute top-0 right-0 w-full h-full z-10':'fixed right-[-100%]'}`}>

        <div className='flex justify-end p-4 '>
          <IoMdClose onClick={handleNav} className='hover:cursor-pointer hover:bg-black/10 p-1' size={35} />
        </div>

        <Menu/>

      </div>
    </div>
  )
}

export default Navbar