import React from 'react'
import { useState } from 'react'
import e1 from './e1.jpeg'
import e2 from './e2.jpeg'
import e3 from './e3.jpeg'
import Modal from './Modal'
import { Link } from 'react-router-dom'
export default function Event() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
 
  return (
    <div className='grid grid-cols-1 justify-items-center sm:gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 py-4 px-4 sm:px-6 lg:px-8'>



      <div class="max-w-sm bg-white border border-green-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src={e3} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tech Fusion</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ready to transform your placement journey into a thrilling success story? 🎉 Unleash Your Potential with Our Mock Placement Test Series</p>

          <div className='flex justify-between'>

            <button onClick={() => setShowModal1(true)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Details
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdkxdUo2g95kY2T9speLO65Km9Aaxphzz0XcWGsJQ7toANRqg/viewform" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Register
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
      {showModal1 && <Modal setShowModal={setShowModal1} descr="GeeksforGeeks Student Chapter MITS presents you Techfuzion👩‍💻

Ready to transform your placement journey into a thrilling success story? 🎉 Unleash Your Potential with Our Mock Placement Test Series !!  🚀

🗓 From 4/03/2024 to 7/03/2024, Get ready to explore with the following activities.

1. Online coding contest - 4/03/2024 (4:00 - 6:00)
2. Workshop by Industry Expert from GeeksforGeeks + Quiz round - 5/03/2024 (12:00 - 2:00)
3. Group discussion - 6/03/2024 (4:00 - 6:00)
4. Personal Interview by the Faculties of the institute-7/03/2024 (1:00 - 2:00)
5. Prize distribution - 7/03/2024 (5:00 to 6:00)

↗️ Registration amount : ₹100 Only!!
🏆 Exiting gifts for the top 3 performers in the final round and top 10 performers in each round.
✅ participation certificate to all
" />}

      <div class="max-w-sm bg-white border border-green-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src={e1} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Code Conquer Collect</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.</p>

          <div className='flex justify-between'>

            <Link to="https://drive.google.com/drive/folders/1BAQJDNhcI_blp4y71fg9reGyVPVp_5Z7"  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Glimpse
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Closed
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>

        </div>
      </div>






    </div>
  )
}
