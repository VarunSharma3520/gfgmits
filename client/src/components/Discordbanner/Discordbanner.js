import React from 'react'
import { Link } from 'react-router-dom'

export default function Discordbanner() {
  return (
    
      <div class="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="flex flex-col items-center justify-between gap-4 rounded-lg bg-green-200 p-4 sm:flex-row md:p-8">
            <div className='text-center'>
              <h2 class="text-xl font-semibold  text-gray-600 md:text-2xl">Ready to develop yourself ?</h2>
              <p class="text-green-700 text-2xl font-bold md:text-3xl">Join Our Discord Community today.</p>
            </div>

            <Link to="#" class="inline-block rounded-lg bg-green-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base">Join Discord</Link>
          </div>
        </div>
      </div>
    
  )
}
