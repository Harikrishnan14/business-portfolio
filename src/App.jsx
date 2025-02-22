import { useState } from 'react'
import Nav from './components/Nav'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import SectionSix from './components/SectionSix'
import SectionSeven from './components/SectionSeven'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function App() {
  return (
    <>
      <Nav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />

      <footer className='p-20 flex items-center justify-around'>
        <div className='font-bold text-2xl'>Binhoff.co</div>
        <ul className='menu'>
          <li>Product</li>
          <li>Install</li>
          <li>Quick start</li>
        </ul>
        <ul className='menu'>
          <li>Blog</li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className='flex items-center gap-4'>
          <div className="icon">
            <FaTwitter />
          </div>
          <div className="icon">
            <FaFacebookF />
          </div>
          <div className="icon">
            <AiFillInstagram />
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
