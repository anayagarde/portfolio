import React from 'react'
import { HiDownload } from 'react-icons/hi'
import SocialMedia from './SocialMedia'

const About = () => {
  return (
    <div name="about" className='h-screen w-full bg-gradient-to-b from-slate-300 to-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-600 max-sm:h-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4'>
            <h2 className='pb-4 pt-12 text-4xl font-bold inline border-b-4 border-zinc-800 dark:border-zinc-50 text-gray-700 dark:text-white'>
                About Me
            </h2>
            <p className='pt-8 text-xl flex text-gray-700 dark:text-white text-justify'>
                I am Anaya, a highly motivated and diligent software engineer with 1.5 years of experience. I am currently working as a Senior Analyst at Deutsche Bank, Pune. I have successfully completed my undergraduate degree with a major in computer science and gained valuable experience through summer and project internships. In addition to my academic achievements and professional experience, I find fulfillment in participating in volunteering activities and engaging in various hackathons and coding competitions.
            </p> <br></br>
            <p className='pb-8 text-xl text-gray-700 dark:text-white text-justify'>
            I have excellent problem-solving and analytical skills with proficiency in Java, ReactJS, Python, and Javascript and have strong fundamentals in core CS subjects like Data structures and Algorithms, Operating Systems, Networking, and Databases. I enjoy brainstorming on ideas and innovative solutions and exploring State-of-the-art technologies.
            </p>
           {/* <a href='../assets/icon-image.jpeg' download={"Anaya's Resume"} target='_blank'>
           <button className='group text-white w-fit px-4 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' >
                Resume
                <span>
                    <HiDownload size={20} className='ml-1'/>
                </span>
            </button>
            </a>    */}
            <SocialMedia />
        </div>
    </div>
  )
}

export default About