import React from 'react'
import project1 from '../assets/project1.jpeg'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.jpeg'
import project6 from '../assets/project6.png'
import project7 from '../assets/project7.png'


const Projects = () => {

    const imageLinks = [
        {
            id: 1,
            projectName: 'Recipelicious - Web Application',
            projectImage: project1,
            code: 'https://github.com/anayagarde/recipelicious-web-application',
        },
        {
            id: 2,
            projectName: 'Grocery Delivery - Dijkstra',
            projectImage: project2,
            code: 'https://github.com/anayagarde/grocery-delivery',
        },
        {
            id: 3,
            projectName: 'Machine Learning & Deep Learning',
            projectImage: project3,
            code: 'https://github.com/anayagarde/ML-Projects'
        },
        {
            id: 4,
            projectName: 'Serverless Data Protection in Cloud',
            projectImage: project4,
            code: '',
        },
        {
            id: 5,
            projectName: 'Fitness Tracking System',
            projectImage: project5,
            code:'https://github.com/anayagarde/fitness-tracker',
        },
        {
            id: 6,
            projectName: 'Clearing Feed Generation',
            projectImage: project6,
            code: 'https://github.com/anayagarde/ClearingFeedGeneration_Group9',
        },
        {
            id: 7,
            projectName: 'Quizz App - Flutter',
            projectImage: project7,
            code: 'https://github.com/anayagarde/quizz-app',
        },
    ]
  return (
    <div name="projects" className='w-full bbg-gradient-to-b from-slate-300 to-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-600 md:h-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full p-8'>
            <h2 className='pb-4 text-4xl font-bold inline border-b-4 border-zinc-800 dark:border-zinc-50 text-gray-700 dark:text-white'>
                Projects
            </h2>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0 pt-6 w-full h-full'>
                    {imageLinks.map(r => (
                        <div key = {r.id} className='shadow-sm shadow-gray-700 dark:shadow-gray-300 rounded-md'>
                            <div className='flex'>
                            <img src={r.projectImage} className="rounded-t-md h-full"/>
                            </div>
                            <button className='justify-center text-gray-700 dark:text-white hover:scale-110 py-5 duration-200 w-full text-sm' onClick = {() => {window.open(r.code)}}>{r.projectName}</button>
                        </div>
                    ))}
                   
                </div>

        </div>
    </div>
  )
}

export default Projects