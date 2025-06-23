import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi';
import { PiTextAlignRight } from 'react-icons/pi';
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate();

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/aboutus" },
        { label: "Sermons", path: "/sermon" },
        { label: "Get Involved", path: "/getinvolved" },
        { label: "Contact Us", path: "/contactus" } 
      ];

    const [mobileMenu,setmobileMenu] = useState(false);
    const toggleMenu = () => {
        setmobileMenu(prev => !prev);
      };

      const handleNavigate = (path) => {
        navigate(path);
        setmobileMenu(false)
      }
      const [isSticky,setIsSticky] = useState()

      useEffect(() => {
        const handleScroll = () => {
          setIsSticky(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  return (
    <div 
            className={`fixed top-0 left-0 w-full h-20 z-50 flex justify-between items-center px-10 transition-all duration-500 ease-[cubic-bezier(.4,2,.3,1)] ${isSticky ? "shadow-xl backdrop-blur-lg bg-[#334238] border-b border-gray-700/50" : "bg-[#334238]"}`}
            style={{
                willChange: "transform, box-shadow, border-radius",
            }}
     >
        <div className='w-40 h-[60%] flex justify-center items-center'>
            <img src="/images/genzlogo.png" alt="" className='w-15' onClick={()=>navigate("/")} />
            <h3 className='text-[14px] text-[#FAF2E8] font-medium'>Gen-Z for Christ</h3>
        </div>
        <div className='hidden md:flex w-[50%] h-[60%]  items-center relative'>
            <ul className='flex gap-[14px] ' >
                {navItems.map((item,index) => (
                    <li 
                    key={index}
                    onClick={() => handleNavigate(item.path)}
                    className=' cursor-pointer px-4 text-[#FAF2E8]'
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>

      <div className='md:hidden z-50 cursor-pointer' onClick={toggleMenu}>
        {mobileMenu ? <FiX size={24} /> : <PiTextAlignRight size={24} />}
      </div>
        {mobileMenu && (
            <ul className='absolute top-20 right-4 w-[75vw] bg-[#2b2a28] shadow-lg rounded p-6 flex flex-col gap-4 z-40 md:hidden'>
                {navItems.map((item,index) => (
                    <li
                    key={index} 
                    onClick={() => handleNavigate(item.path)}
                    className='cursor-pointer font-medium text-[#FAF2E8]'
                    >
                        {item.label}
                    </li>
                ))}
            
        </ul>
        )}
        
    </div>
  )
}

export default Header
