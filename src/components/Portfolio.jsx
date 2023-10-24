import React from 'react'

const Portfolio = () => {

  return (
    <div name="portfolio" className='h-screen w-full bg-gradient-to-b from-slate-300 to-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-600'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4'>
                <h2 className='pb-4 text-4xl font-bold inline border-b-4 border-zinc-800 dark:border-zinc-50 text-gray-700 dark:text-white'>
                    Portfolio
                </h2>
              <div class="border-b border-gray-200 dark:border-gray-700 py-16">
                  <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                      <li class="mr-2">
                          <button class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                             Achievements
                          </button>
                      </li>
                      <li class="mr-2">
                          <button class="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                              Co-curricular Activities
                          </button>
                      </li>
                      <li class="mr-2">
                          <button class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                              Extra Curricular Activities
                          </button>
                      </li>
                  </ul>
              </div>

                </div>
            </div>
  )
}

export default Portfolio