import { useState } from 'react';
import './style.css';

import { logo_black } from './../assests/index';
import { NavLink } from 'react-router-dom';

const Header = ({ onActivePageChange }) => {
  const [openNav, setOpenNav] = useState();
  const [selectedLink, setSelectedLink] = useState('Home')

  const handleNav = () => {
    if (openNav) {
      setOpenNav(null);
    } else {
      setOpenNav('open');
    }
  }

  const handleNavLinkSelector = (s) => {
    setSelectedLink(s);
    handleNav();
  }

  return (
    <>
      <header className='w-full mt-4 flex items-center justify-center lg:hidden'>
        <div className={`w-[95%] bg-[#C1BAB0] ${openNav ? "h-96" : "h-20"
          } overflow-hidden top-4 transition-all duration-500 ease-in-out texture`}>

          <nav className='w-full p-4 flex items-center justify-between'>
            <div className='w-10 h-10 lg:w-18 lg:h-18'>
              <img
                src={logo_black}
                alt='nikhil sai ankilla portfolio logo'
                className='w-full h-full object-cover'
              />
            </div>

            <div id="nav-icon3" className={openNav} onClick={handleNav}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>

          <nav className='w-full pb-6'>
            <ul className='w-full flex items-center justify-center flex-col gap-3'>
              <NavLink to='/' className={`text-xl navLinksStyle ${selectedLink === "Home" ? "font-bold" : "font-medium"}  cursor-pointer`} onClick={() => handleNavLinkSelector("Home")}>Home</NavLink>
              <NavLink to='/about' className={`text-xl navLinksStyle ${selectedLink === "About" ? "font-bold" : "font-medium"} cursor-pointer`} onClick={() => handleNavLinkSelector("About")}>About</NavLink>
              <NavLink to='/skills' className={`text-xl navLinksStyle ${selectedLink === "Skills" ? "font-bold" : "font-medium"}  cursor-pointer`} onClick={() => handleNavLinkSelector("Skills")}>Skills</NavLink>
              <NavLink to='/projects' className={`text-xl navLinksStyle ${selectedLink === "Projects" ? "font-bold" : "font-medium"}  cursor-pointer`} onClick={() => handleNavLinkSelector("Projects")}>Projects</NavLink>
              <NavLink to='/contact' className={`text-xl navLinksStyle ${selectedLink === "Contact" ? "font-bold" : "font-medium"} cursor-pointer`} onClick={() => handleNavLinkSelector("Contact")}>Contact</NavLink>
            </ul>
          </nav>

        </div>
      </header>

      <header className='hidden lg:block absolute top-5 left-5 w-20 bg-[#C1BAB0] texture' style={{ height: "calc(100vh - 30px)" }}>
        <nav className='w-full p-4 flex items-center justify-between flex-col relative'>

          <div className='w-12 h-12 absolute top-4'>
            <img
              src={logo_black}
              alt='nikhil sai ankilla portfolio logo'
              className='w-full h-full object-cover'
            />
          </div>

          <ul className='w-full flex items-center justify-center flex-col-reverse gap-16 absolute top-56'>
            <NavLink to='/' className={`text-xl navLinksStyle ${selectedLink === "Home" ? "font-bold" : "font-medium"} -rotate-90 cursor-pointer`} onClick={() => handleNavLinkSelector("Home")}>Home</NavLink>
            <NavLink to='/about' className={`text-xl navLinksStyle ${selectedLink === "About" ? "font-bold" : "font-medium"} -rotate-90 cursor-pointer`} onClick={() => handleNavLinkSelector("About")}>About</NavLink>
            <NavLink to='/skills' className={`text-xl navLinksStyle ${selectedLink === "Skills" ? "font-bold" : "font-medium"} -rotate-90 cursor-pointer`} onClick={() => handleNavLinkSelector("Skills")}>Skills</NavLink>
            <NavLink to='/projects' className={`text-xl navLinksStyle ${selectedLink === "Projects" ? "font-bold" : "font-medium"} -rotate-90 cursor-pointer`} onClick={() => handleNavLinkSelector("Projects")}>Projects</NavLink>
            <NavLink to='/contact' className={`text-xl navLinksStyle ${selectedLink === "Contact" ? "font-bold" : "font-medium"} -rotate-90 cursor-pointer`} onClick={() => handleNavLinkSelector("Contact")}>Contact</NavLink>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header