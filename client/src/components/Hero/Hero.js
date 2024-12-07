import React from 'react'
import gfg2 from './gfg2_1.png';
import { Link } from 'react-router-dom';
export default function Hero() {
  return (
    <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
      <div class="container mx-auto px-6 flex relative py-16 justify-between">
        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          
          <h1 class="font-bebas-neue uppercase text-6xl sm:text-6xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            GFG Student Chapter
            <span class="text-5xl sm:text-8xl">
              MITS Gwalior
            </span>
          </h1>
          <p class="text-lg sm:text-lg pt-2 text-gray-700 dark:text-white">
            A community of coders, developers, and technology enthusiasts.
          </p>
          <div class="flex mt-8">
            <Link to="/team" class="uppercase py-2 px-4 rounded-lg bg-green-600 border-2 border-transparent text-white text-md mr-4 hover:bg-green-800">
              Meet The Team
            </Link>
            <Link to="/event" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-green-600 text-green-600 dark:text-white hover:bg-green-800 hover:text-white text-md">
              Our Events
            </Link>
          </div>
        </div>
        <div className='hidden lg:block'>
          <img src={gfg2} class="max-w-xs md:max-w-lg m-auto" />
        </div>
        
      </div>
    </div>
  )
}
