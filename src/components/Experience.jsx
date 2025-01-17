import React from 'react'
import { TbServerCog } from 'react-icons/tb'
import { IoIosCodeWorking } from 'react-icons/io'
import { AiOutlineCloudServer } from 'react-icons/ai'

const Experience = () => {
  return (
    <div name="experience" className='h-screen w-full bg-gradient-to-b from-slate-300 to-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-600 max-sm:h-full'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4'>
                <h2 className='pb-4 pt-12 text-4xl font-bold inline border-b-4 border-zinc-800 dark:border-zinc-50 text-gray-700 dark:text-white'>
                    Work Experience
                </h2>
                <div className='z-0 py-16 px-8 flex justify-items-center max-w-screen-3xl'>
                    <ol class="relative w-full items-center border-l border-gray-600 dark:border-gray-300">                  
                        <li class="mb-10 ml-6">            
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-300">
                            <TbServerCog size={20}/>
                            </span>
                            <h3 class="flex ml-3 items-center mb-1 text-lg font-extrabold text-gray-900 dark:text-white">Deutsche Bank, Pune, India</h3>
                            <time class="block ml-3 mb-2 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">Senior Analyst (August 2023 - July 2024)</time>
                            <p class="mb-4 ml-3 text-base font-normal text-gray-500 dark:text-gray-400">Worked as a full stack developer in Corporate Bank Technology division's Working Capital team. Collaborated and worked alongside cross-functional teams. Technologies: Java, SpringBoot, ReactJS, GraphQL, Oracle along with in-house frameworks such as Axiom, VAS, and Rtdb. Received Rising Star Award for exceptional deliveries in the team.</p>
                            <time class="block mb-2 ml-3 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">Graduate Analyst (July 2022 - July 2023)</time>
                            <p class="mb-4 text-base ml-3 font-normal text-gray-500 dark:text-gray-400">Acquired an understanding of the business domain and architecture of project and was involved in deliverables and high priority poduction fixes. Participated in Mental Health Hackathon and GenAI Global Hackathon. Active participation in hosting events and volunteering activities.</p>
                        </li>
                        <li class="mb-10 ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-300">
                            <IoIosCodeWorking size={25}/>
                            </span>
                            <h3 class="mb-1 text-lg ml-3 font-extrabold text-gray-900 dark:text-white">Deutsche Bank, Pune, India</h3>
                            <time class="block mb-2 ml-3 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">Intern (May 2021 - July 2021)</time>
                            <p class="text-base ml-3 font-normal text-gray-500 dark:text-gray-400">Built a full stack Data Visualization Application using ReactJS, Spring Boot, and MySQL</p>
                        </li>
                        <li class="ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-300">
                            <AiOutlineCloudServer size={25}/>
                            </span>
                            <h3 class="mb-1 ml-3 text-lg font-extrabold text-gray-900 dark:text-white">Veritas Technologies, Pune, India</h3>
                            <time class="block ml-3 mb-2 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">Project Intern (October 2021 - June 2022)</time>
                            <p class="text-base ml-3 font-normal text-gray-500 dark:text-gray-400">Worked on B.Tech. Project - Serverless Data Protection in Cloud. Acquired in-depth undertsanding of serverless computing, data security, cloud computing, Docker, and Kubernetes. </p>
                            <p class="text-base ml-3 text-md font-semibold text-gray-700 dark:text-gray-300"><a href="https://ieeexplore.ieee.org/document/10112206" target="_blank">IEEE Conference Paper</a></p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
  )
}

export default Experience