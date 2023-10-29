import React from 'react'
import SocialMedia from './SocialMedia'
import image from '../assets/img-1.jpeg'
const Contact = () => {
  return (
    <div name="contact" className='h-screen w-full bg-gradient-to-b from-slate-300 to-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-600 max-sm:h-full'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4'>
                <h2 className='pb-4 text-4xl font-bold inline border-b-4 border-zinc-800 dark:border-zinc-50 text-gray-700 dark:text-white'>
                    Contact Me
                </h2>          
                <div class="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-12">
                  <div class="flex flex-col items-center pt-12">
                      <img class="w-32 h-32 mb-3 rounded-full shadow-lg" src={image}/>
                      <h5 class="mb-1 text-3xl font-bold text-gray-900 dark:text-white">Anaya Garde</h5>
                      <span class="text-xl font-semibold text-gray-500 dark:text-gray-400">anayagarde@gmail.com</span>
                      <div class="flex mt-4 space-x-3 md:mt-6">
                        <SocialMedia />
                      </div>
                  </div>
                </div>
            </div>
      </div>
  )
}

export default Contact