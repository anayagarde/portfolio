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
                <div className='z-0 py-16 px-8 flex justify-items-center max-w-xl'>
                    <ol class="relative w-full items-center border-l border-gray-600 dark:border-gray-300">   
                    <li class="mb-10 ml-8">            
                            <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-300">
                            <GrCloudComputer/>
                            </span>
                            <h2 class="flex items-center mb-1 ml-5 text-lg font-extrabold text-gray-900 dark:text-white">University of Southern California</h2>
                            <p class="mb-4 ml-5 text-base font-normal text-gray-500 dark:text-gray-200">Masters of Science in Computer Science</p>
                            <time class="block mb-2 ml-5 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">Aug 2024 - May 2026 | GPA: 3.65</time>
                        </li>               
                        <li class="mb-10 ml-8">            
                            <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-300">
                            <GrCloudComputer/>
                            </span>
                            <h2 class="flex items-center mb-1 ml-5 text-lg font-extrabold text-gray-900 dark:text-white">MKSSS's Cummins College of Engineering for Women, Pune</h2>
                            <p class="mb-4 ml-5 text-base font-normal text-gray-500 dark:text-gray-200">Bachelor of Technology in Computer Engineering</p>
                            <time class="block mb-2 ml-5 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">Aug 2018 - July 2022 | CGPA - 9.39 (Gold Medalist)</time>
                        </li>
                        <li class="mb-10 ml-8">
                            <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-300">
                            <MdOutlineCastForEducation />
                            </span>
                            <h2 class="flex items-center mb-1 ml-5 text-lg font-extrabold text-gray-900 dark:text-white">Dr. Kalmadi Shamarao Junior College, Pune</h2>
                            <p class="mb-4 ml-5 text-base font-normal text-gray-500 dark:text-gray-200">Higher Secondary Education - HSC Board</p>
                            <time class="block ml-5 mb-2 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">2016-2018 | 88.92%</time>
                        </li>
                        <li class="ml-8">
                            <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-300">
                            <PiBookOpenTextDuotone />
                            </span>
                            <h2 class="flex items-center mb-1 ml-5 text-lg font-extrabold text-gray-900 dark:text-white">City International School, Kothrud, Pune</h2>
                            <p class="mb-4 ml-5 text-base font-normal text-gray-500 dark:text-gray-200">Secondary Education - CBSE Board</p>
                            <time class="block ml-5 mb-2 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">2016 | CGPA - 10</time>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
      )
}

export default Education