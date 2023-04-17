import React from 'react'
import { HiDownload } from 'react-icons/hi'

const About = () => {
  return (
    <div name="about" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4'>
            <h2 className='pb-4 text-4xl font-bold inline border-b-4 text-white'>
                About
            </h2>
            <p className='pt-8 flex text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br/>
            <p className='pb-6 text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

           <a href='../assets/icon-image.jpeg' download={"Anaya's Resume"} target='_blank'>
           <button className='group text-white w-fit px-4 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' >
                Resume
                <span>
                    <HiDownload size={20} className='ml-1'/>
                </span>
            </button>
            </a>   
        </div>
    </div>
  )
}

export default About