import React from 'react'
import SocialMedia from './SocialMedia'
import { HiMail } from 'react-icons/hi'
const Contact = () => {
  return (
    <div name="contact" className='h-screen w-full bg-gradient-to-b from-slate-300 to-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-600 max-sm:h-full'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4'>
                <h2 className='pb-4 text-4xl font-bold inline border-b-4 border-zinc-800 dark:border-zinc-50 text-gray-700 dark:text-white'>
                    Contact Me
                </h2>
               <SocialMedia />
               <HiMail className='justify-center text-xl text-grey-800 dark:text-white' size={40}/>
              <h1 className='text-xl text-grey-800 dark:text-white'>Email: anayagarde@gmail.com</h1>
            </div>
        </div>
  )
}

export default Contact