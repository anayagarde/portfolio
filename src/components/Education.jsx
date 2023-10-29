import React from 'react'
import { GrCloudComputer } from 'react-icons/gr'
import { MdOutlineCastForEducation } from 'react-icons/md'
import { PiBookOpenTextDuotone } from 'react-icons/pi'

const Education = () => {
  return (
        <div name="education" className='h-screen w-full bg-gradient-to-b from-slate-300 to-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-600 max-sm:h-full'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4'>
                <h2 className='pb-4 pt-12 text-4xl font-bold inline border-b-4 border-zinc-800 dark:border-zinc-50 text-gray-700 dark:text-white'>
                    Education
                </h2>
                <div className='z-0 py-16 px-8 flex justify-items-center max-w-3xl'>
                    <ol class="relative w-full items-center border-l border-gray-600 dark:border-gray-300">                  
                        <li class="mb-10 ml-6">            
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-300">
                            <GrCloudComputer/>
                            </span>
                            <h3 class="flex items-center mb-1 ml-3 text-lg font-extrabold text-gray-900 dark:text-white">MKSSS's Cummins College of Engineering for Women, Pune</h3>
                            <time class="block mb-2 ml-3 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">2018-2022 | CGPA - 9.39</time>
                            <p class="mb-4 ml-3 text-base font-normal text-gray-500 dark:text-gray-400">Bachelor of Technology in Computer Engineering</p>
                        </li>
                        <li class="mb-10 ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-300">
                            <MdOutlineCastForEducation />
                            </span>
                            <h3 class="mb-1 ml-3 text-lg font-extrabold text-gray-900 dark:text-white">Dr. Kalmadi Shamarao Junior College, Pune</h3>
                            <time class="block ml-3 mb-2 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">2016-2018 | 88.92%</time>
                            <p class="text-base ml-3 font-normal text-gray-500 dark:text-gray-400">Higher Secondary Education - HSC Board</p>
                        </li>
                        <li class="ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-300">
                            <PiBookOpenTextDuotone />
                            </span>
                            <h3 class="mb-1 ml-3 text-lg font-extrabold text-gray-900 dark:text-white">City International School, Kothrud, Pune</h3>
                            <time class="block ml-3 mb-2 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">2016 | CGPA - 10</time>
                            <p class="text-base ml-3 font-normal text-gray-500 dark:text-gray-400">Secondary Education - CBSE Board</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
      )
}

export default Education