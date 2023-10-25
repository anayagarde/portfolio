import React from 'react'
import { MdWorkOutline } from 'react-icons/md'
import { IoIosCodeWorking } from 'react-icons/io'
import { PiProjectorScreenBold } from 'react-icons/pi'

const Experience = () => {
  return (
    <div name="experience" className='h-screen w-full bg-gradient-to-b from-slate-300 to-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-600 max-sm:h-full'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4'>
                <h2 className='pb-4 text-4xl font-bold inline border-b-4 border-zinc-800 dark:border-zinc-50 text-gray-700 dark:text-white'>
                    Work Experience
                </h2>
                <div className='z-0 py-16 px-8 flex justify-items-center'>
                    <ol class="relative w-full items-center border-l border-gray-600 dark:border-gray-300">                  
                        <li class="mb-10 ml-6">            
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-500">
                            <MdWorkOutline />
                            </span>
                            <h3 class="flex items-center mb-1 text-lg font-extrabold text-gray-900 dark:text-white">Deutsche India Private Ltd</h3>
                            <time class="block mb-2 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">Graduate Analyst (July 2022 - July 2023)</time>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Built microservices using Java, Spring, Axiom, VAS, GraphQL, and Oracle.</p>
                            <time class="block mb-2 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">Senior Analyst (July 2023 - Present)</time>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Working as full stack developer in Corporate Bank Technology division's Working Capital team.</p>
                        </li>
                        <li class="mb-10 ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-500">
                            <IoIosCodeWorking />
                            </span>
                            <h3 class="mb-1 text-lg font-extrabold text-gray-900 dark:text-white">Deutsche India Private Ltd</h3>
                            <time class="block mb-2 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">Technology Intern (May 2021 - July 2021)</time>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Worked on creating a full stack Data Visualization Application using ReactJS, Spring Boot, and MySQL.</p>
                        </li>
                        <li class="ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-500">
                            <PiProjectorScreenBold />
                            </span>
                            <h3 class="mb-1 text-lg font-extrabold text-gray-900 dark:text-white">Veritas Technologies</h3>
                            <time class="block mb-2 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">Project Intern (October 2021 - June 2022)</time>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Worked on Final Year project on Serverless Data Protection on Cloud</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
  )
}

export default Experience