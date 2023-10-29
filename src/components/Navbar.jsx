import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import DarkModeToggle from './DarkModeToggle';

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
            link:'activities'
        },
        {
            id: 7,
            link:'contact'
        },
    ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-gray-700 dark:text-white bg-slate-300 dark:bg-slate-900 fixed top-0 left-0 z-50">
        <div>
            <Link to={'home'} smooth duration={500}>
                <h1 className='lg:text-5xl text-3xl font-signature ml-2 cursor-pointer'>
                    Anaya Garde
                </h1>
            </Link>
        </div>
        <ul className='hidden md:flex'>
            {links.map((r) => (
            <li key={r.id} className="px-3 cursor-pointer capitalize font-medium text-gray-800 dark:text-gray-400 hover:scale-105 duration-100">
            <Link to={r.link} smooth duration={500}>{r.link}</Link>
            </li>
            ))}
        </ul>
        <DarkModeToggle />

        <div onClick={() => setHamburgerMenu(!hamburgerMenu)} className='cursor-pointer pr-4 z-10 text-gray-800 dark:text-gray-400 md:hidden'>
            {hamburgerMenu ? <FaBars size={30}/> : <FaTimes size={30}/>}
        </div>
        {!hamburgerMenu && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-300 to-slate-50 dark:bg-gradient-to-b dark:from-black dark:to-gray-800 text-zinc-800 dark:text-gray-400'> 
        {links.map((r) => (
            <li key={r.id} className="py-3 cursor-pointer capitalize text-zinc-800 dark:text-gray-400 hover:scale-105 duration-100">
            <Link to={r.link} smooth duration={500}>{r.link}</Link>
            </li>
            ))}
        </ul>)
}
    </div>
  );
};

export default Navbar;