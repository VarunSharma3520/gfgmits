import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Event from '../components/Event/Event'
import Footer from '../components/Footer/Footer'
export default function Eventpage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='py-16'>
        <Event></Event>
      </div>
      <Footer></Footer>
    </div>
  )
}
