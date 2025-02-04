import React, { useState, useEffect }  from 'react'
import image from "../assets/profile-pic1.jpg"
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll';

const TextAnimation = ({ text, loop }) => {
    const [headerText, setHeaderText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
            setHeaderText((prev) => prev + text[index]);
            setIndex(index + 1);
        } else if (loop) {
            setHeaderText('');
            setIndex(0);
        } else {
          clearInterval(interval);
        }
      }, 120);
      return () => clearInterval(interval);
    }, [index, text, loop]);
    return (
         <p className='text-4xl md:text-6xl pt-8 font-bold text-gray-700 dark:text-white max-w-xl'>{headerText}</p>
      );
}

const Home = () => {
    return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-slate-300 to-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-600'>
        <div className='max-w-screen-xl mx-auto my-auto flex flex-col items-center px-4 w-full h-full md:flex-row'>
            <div className='flex flex-col justify-center h-2/3 sm:h-full'>
                <TextAnimation text="Driven by curiosity, defined by code!" loop={false}/>
                <p className='text-gray-700 dark:text-gray-400 text-lg sm:text-2xl py-6 max-w-xl font-serif'>
                    Hi, I am Anaya Garde!
                    I like to explore new technologies and transform ideas to solutions.
                </p>
                <div>
                    <Link className='group text-white w-fit px-6 py-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' to={'about'} smooth duration={500}>
                        About me
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardDoubleArrowRight size={20} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            {/* <img src={image} class="rounded-full mx-auto w-3/4 sm:w-1/4 mb-5"></img> */}
            <div class="relative w-60 h-60 sm:w-80 sm:h-80 mx-auto mb-5 overflow-hidden rounded-full">
  <img src={image} alt="Circular image" class="object-cover w-full h-full"></img>
</div>


        </div>
    </div>
  )
}

export default Home