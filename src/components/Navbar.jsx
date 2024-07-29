import  {useState,useEffect } from 'react'
import { TfiHelpAlt } from "react-icons/tfi";
import { SlGlobe } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import Menu from './Menu';
import Vehicles from './dropdown/Vehicles';


const Navbar = () => {
  const [nav,setNav]=useState(false)
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [transparent, setTransparent] = useState(true);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
          // if scroll down, hide the navbar
          setShow(false);
      } else {
          // if scroll up, show the navbar
          setShow(true);
      }
      setLastScrollY(window.scrollY);
      setTransparent(window.scrollY === 0);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

        // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleNav=()=>{
    setNav(!nav)
  }
  
    useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth >= 768) {
              setNav(false);
          }
      };

      window.addEventListener('resize', handleResize);

      // Cleanup event listener on component unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const handleMouseEnter = (index) => {
    setIsDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(null);
  };

  return (

    <div className={`fixed w-full flex justify-between items-center px-9 p-2 text-sm font-medium ${show?'transform translate-y-0  z-10 duration-700 ' : 'transform translate-y-[-100%] bg-white text-black z-10 duration-700'} ${transparent ? 'bg-transparent' : 'bg-white text-black'}`}>
      <div >
        <img className="h-3"src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=" alt="" />
      </div>

      <div className='hidden lg:inline font-[600] text-center'>
        
        <ul className="flex justify-center hover:cursor-pointer">
          <li className='py-1 px-4 hover:shadow' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>Vehicles</li>

          <li className='py-1 px-4 hover:shadow' onMouseEnter={()=>handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>Energy</li>

          <li className='py-1 px-4 hover:shadow' onMouseEnter={()=>handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>Charging</li>

          <li className='py-1 px-4 hover:shadow' onMouseEnter={()=>handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>Discover</li>

          <li className='py-1 px-4 hover:shadow' onMouseEnter={()=>handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>Shop</li>
        </ul>
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
      <div className={`lg:hidden ${nav?'bg-white fixed top-0 right-0 w-full h-screen z-30':'fixed right-[-100%]'}`}>

        <div className='flex justify-end p-4 '>
          <IoMdClose onClick={handleNav} className='hover:cursor-pointer hover:bg-black/10 p-1' size={35} />
        </div>   

        <Menu/>

      </div>

      {/* Dropdown content */}
      {isDropdownOpen ===1 && (
        <div 
          className="absolute top-10 inset-x-0 bg-white shadow-lg h-[460px] w-full"
          onMouseEnter={()=>handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <Vehicles />
        </div>
      )}
      </div>

      

      


      

    
  )
}

export default Navbar