import React from 'react'
import image from "../assets/img.jpeg"
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl md:text-7xl font-bold text-white'> I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Hi, I am Anaya Garde. I am currently working as a Software Developer. I enjoy working on Full Stack Applications and exploring new Technologies.
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardDoubleArrowRight size={20} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={image} className="rounded-2xl mx-auto w-1/2 md:-w-full"></img>
            </div>
        </div>
    </div>
  )
}

export default Home