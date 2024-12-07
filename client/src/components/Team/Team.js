import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import ankit from './ankit.jpg';
import piyush from './piyush.jpg';
import harshdev from './harshdev.jpeg';
import tapasya from './tapasya.jpg';
import santosh from './santosh.jpg';
import shivam from './shivam.jpg';
import vikas from './vikas.jpg';
import rahul from './rahul.jpg';
import soumya from './soumya.jpg';
import harsh from './harsh.jpg';
import { Link } from 'react-router-dom';
export default function Team() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Meet Our Dynamic Team Of Enthusiastic People</p>
        </div>
        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto object-cover object-top mb-4 w-36 h-36 rounded-full" src={soumya} alt="Bonnie Avatar" />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Soumya Sethi</a>
            </h3>
            <p>President</p>
            <Link to='https://www.linkedin.com/in/soumya-sethi/' class="flex justify-center mt-4 space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin w-5 h-5" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>


            </Link>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto mb-4 w-36 h-36 object-cover rounded-full" src={piyush} alt="Helene Avatar" />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Piyush Sanwale</a>
            </h3>
            <p>Vice President</p>
            <Link to='https://www.linkedin.com/in/piyush-sanwale-66a7ab235/' class="flex justify-center mt-4 space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin w-5 h-5" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </Link>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto object-cover object-top mb-4 w-36 h-36 rounded-full" src={rahul} alt="Jese Avatar" />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Rahul Ravat </a>
            </h3>
            <p>Technical Head</p>
            <Link to='https://www.linkedin.com/in/rahulrawatr/' class="flex justify-center mt-4 space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin w-5 h-5" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </Link>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto mb-4 w-36 h-36 rounded-full object-cover" src={santosh} alt="Joseph Avatar" />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Santosh Ranawat</a>
            </h3>
            <p>Technical Head</p>
            <Link to='https://www.linkedin.com/in/santosh-ranawat-b262561b5/' class="flex justify-center mt-4 space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin w-5 h-5" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </Link>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={ankit} alt="Sofia Avatar" />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Ankit Jat</a>
            </h3>
            <p>Public Relations & Outreach Head</p>
            <ul class="flex justify-center mt-4 space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin w-5 h-5" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto object-cover object-top mb-4 w-36 h-36 rounded-full" src={harshdev} alt="Leslie Avatar" />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Harshdev Tripathi </a>
            </h3>
            <p>Event Head </p>
            <Link to='https://www.linkedin.com/in/harshdevtripathi/' class="flex justify-center mt-4 space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin w-5 h-5" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </Link>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto object-cover mb-4 w-36 h-36 rounded-full" src={harsh} alt="Michael Avatar" />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Harsh Patel</a>
            </h3>
            <p>Design/Branding Head</p>
            <ul class="flex justify-center mt-4 space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin w-5 h-5" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto mb-4 w-36 h-36 object-cover rounded-full" src={shivam} alt="Neil Avatar" />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Shivam Kumar </a>
            </h3>
            <p>Marketing Head </p>
            <ul class="flex justify-center mt-4 space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin w-5 h-5" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto object-cover object-top mb-4 w-36 h-36 rounded-full" src={vikas} alt="Neil Avatar" />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Vikas sijoriya </a>
            </h3>
            <p>Marketing Head </p>
            <Link to='https://www.linkedin.com/in/vikas-sijoriya-044400224/' class="flex justify-center mt-4 space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin w-5 h-5" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </Link>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img class="mx-auto object-cover mb-4 w-36 h-36 rounded-full" src={tapasya} alt="Neil Avatar" />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Tapasya Dimree </a>
            </h3>
            <p>Social Media Head</p>
            <Link to='https://www.linkedin.com/in/tapasya-dimree-49b42922b/' class="flex justify-center mt-4 space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin w-5 h-5" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
