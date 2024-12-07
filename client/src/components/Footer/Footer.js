import React from 'react'
import gfg2 from './gfg2.png';
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer class="text-gray-600 body-font">

      <div class="bg-gray-100 dark:bg-gray-800">
        <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className='w-14 h-14' src={gfg2} alt="" srcset="" />
            <span class="ml-3 text-xl dark:text-white text-black">GFG Student Chapter MITSG</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Copyright —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">MITS Gwalior</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

          
            <Link  to='https://www.instagram.com/geeksforgeeks_mits?igsh=MW9sZ2Q5dm82N3p6bQ==' className='ml-3'>
              <FaInstagram />
            </Link>
            
            <Link to='https://www.linkedin.com/in/geeksforgeeks-mits-student-chapter-5b2986293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='ml-3'>
              <FaLinkedin />
            </Link>
            <Link to='/inst' className='ml-3'>
              <FaDiscord />
            </Link>

            




          </span>
        </div>
      </div>
    </footer>
  )
}
