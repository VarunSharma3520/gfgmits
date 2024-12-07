import { Fragment } from 'react'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Disclosure, Switch, Menu, Transition } from '@headlessui/react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import gfgicon from './gfg2.png';
const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'Team', to: '/team', current: false },
  { name: 'Events', to: '/event', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
  const [enabled, setEnabled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  console.log(theme)
  useEffect(() => setMounted(true), [])

  if (!mounted) { return null }
  return (
    <Disclosure as="nav" className="dark:bg-gray-800 bg-white fixed w-full z-40">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-16 w-auto"
                    src={gfgicon}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={
                          ({isActive})=>isActive ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                        }
                     
                       
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}

                <div className='flex items-center justify-center mx-4'>

                  {
                    theme === 'light' ? (
                      <BiMoon
                        className="cursor-pointer"
                        fill="black"
                        size={25}
                        onClick={() => setTheme('dark')}
                      />
                    )
                      :
                      <BiSun
                        className="cursor-pointer"
                        size={25}
                        onClick={() => setTheme('light')}
                      />
                  }
                </div>

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
