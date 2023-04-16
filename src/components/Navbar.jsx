import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(true);
    const links = [
        {
            id: 1,
            link:'home'
        },
        {
            id: 2,
            link:'about'
        },
        {
            id: 3,
            link:'education'
        },
        {
            id: 4,
            link:'experience'
        },
        {
            id: 5,
            link:'projects'
        },
        {
            id: 6,
            link:'portfolio'
        },
        {
            id: 7,
            link:'contact'
        },
    ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
            <h1 className='text-5xl font-signature ml-2'>Anaya</h1>
        </div>
        <ul className='hidden md:flex'>
            {links.map((r) => (
            <li key={r.id} className="px-3 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-100">
            {r.link}
            </li>
            ))}
        </ul>

        <div onClick={() => setHamburgerMenu(!hamburgerMenu)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
            {hamburgerMenu ? <FaBars size={30}/> : <FaTimes size={30}/>}
        </div>
        {!hamburgerMenu && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'> 
        {links.map((r) => (
            <li key={r.id} className="py-3 cursor-pointer capitalize text- text-gray-400 hover:scale-105 duration-100">
            {r.link}
            </li>
            ))}
        </ul>)
}
    </div>
  );
};

export default Navbar;