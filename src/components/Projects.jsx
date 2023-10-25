import React from 'react'
import project1 from '../assets/project1.jpeg'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.jpeg'
import project6 from '../assets/project6.png'
import project7 from '../assets/project7.png'


const Projects = () => {

    const [buttonName, setButtonName] = React.useState(null);

    const projectDetails = [
        {
            id: 1,
            projectName: 'Recipelicious - Web Application',
            projectImage: project1,
            code: 'https://github.com/anayagarde/recipelicious-web-application',
            projectDetails: 'Full Stack Web Application built using ReactJS, Spring Boot, and MySQL. Easy and user-friendly application to note down your favourite recipes!'
        },
        {
            id: 2,
            projectName: 'Grocery Delivery - Dijkstra',
            projectImage: project2,
            code: 'https://github.com/anayagarde/grocery-delivery',
            projectDetails: 'Application developed to demonstrate use of Dijkstra Shortest path Algorithm for finding best route to deliver groceries during COVID 19. Data Structure - Graphs & Language - Java'
        },
        {
            id: 3,
            projectName: 'Machine Learning & Deep Learning',
            projectImage: project3,
            code: 'https://github.com/anayagarde/ML-Projects',
            projectDetails: 'A collection of various machine learning Algorithms and projects.\n' +
            '1. Book Recommendation System - using KNN Algorithm\n' +
            '2. Colour Extraction using OpenCv and KMeans Algorithm\n' +
            '3. House Price prediction\n' +
            '4. Text Recognition System using CNN and Gradio GUI'
        },
        {
            id: 4,
            projectName: 'Serverless Data Protection in Cloud',
            projectImage: project4,
            code: '',
            projectDetails: 'A Serverless framework to Discover, Backup, and Recover cloud native assets. Used various AWS services and Boto3 to build the architecture'

        },
        {
            id: 5,
            projectName: 'Fitness Tracking System',
            projectImage: project5,
            code:'https://github.com/anayagarde/fitness-tracker',
            projectDetails: 'Application developed to track and keep record various fitness parameters of a person. Built using C++ and Linked List data structure'
        },
        {
            id: 6,
            projectName: 'Clearing Feed Generation',
            projectImage: project6,
            code: 'https://github.com/anayagarde/ClearingFeedGeneration_Group9',
            projectDetails: 'Application built using Spring Boot, Angular, and MySql to generate feeds in Clearing System'
        },
        {
            id: 7,
            projectName: 'Quizz App - Flutter',
            projectImage: project7,
            code: 'https://github.com/anayagarde/quizz-app',
            projectDetails: 'A basic Quiz Application built using Flutter and Dart'
        },
    ]

    const handleClickButton = (id) => {
        setButtonName(id)
    }

  return (
    <div name="projects" className='w-full bbg-gradient-to-b from-slate-300 to-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-600 md:h-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full p-8'>
            <h2 className='pb-4 text-4xl font-bold inline border-b-4 border-zinc-800 dark:border-zinc-50 text-gray-700 dark:text-white'>
                Projects
            </h2>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0 pt-6 w-full h-full'>
                    {projectDetails.map(r => (
                        <div key = {r.id} className='shadow-sm shadow-gray-700 dark:shadow-gray-300 rounded-md'>
                            <div className='flex'>
                            <img src={r.projectImage} className="rounded-t-md h-full"/>
                            </div>
                            <button data-modal-target={r.id} data-modal-toggle={r.id} className='justify-center text-gray-700 dark:text-white hover:scale-110 py-5 duration-200 w-full text-sm' onClick={() => handleClickButton(r.id)}>
                            {r.projectName}
                            </button>
                      </div>
                    ))}
                    {buttonName !== null &&
                       <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
                       <div className="bg-white dark:bg-slate-200 rounded-md shadow-lg w-3/5 border-stone-200">
                         <div className="flex justify-between bg-gray-200 dark:bg-slate-500 p-4 rounded-t-md">
                           <h2 className="text-xl font-semibold text-black dark:text-white">{`${projectDetails[buttonName - 1].projectName}`}</h2>
                           <button
                             className="text-gray-700 dark:text-white hover:text-gray-900"
                             onClick={() => setButtonName(null)}
                           >
                             <span className="text-xl font-bold">X</span>
                           </button>
                         </div>
                         <div className="p-4">
                           <p className="mb-4">
                            <p className='text-justify py-4'>{projectDetails[buttonName - 1].projectDetails}</p>
                            <a href={projectDetails[buttonName - 1].code} target="_blank"><p c className="text-black p-1 rounded w-full text-center font-bold">Project Link</p></a>
                           </p>
                         </div>
                       </div>
                     </div>}
                </div>

        </div>
    </div>
  )
}

export default Projects