import React from 'react';
import Card from './components/Card';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import GetInTouch from './components/GetInTouch';

export default function App() 
{
  useEffect(() => {
    Aos.init({
      once: true,

    })
  })
  return (
    <div className='min-h-screen py-10 px-3 sm:px-5 bg-gray-100'>
      <div data-aos='fade-down' data-aos-duration='800'>
        <Card />
      </div>
      <div data-aos='fade-up' data-aos-duration='800' data-aol-delay='400'>
        <About />
      </div>
      <div data-aos='fade-up' data-aos-duration='800' data-aol-delay='400'>
        <Skills />
      </div>
      <div data-aos='fade-up' data-aos-duration='800' data-aol-delay='400'>
        <Experience />
      </div>
      {/* <div data-aos='fade-up' data-aos-duration='800' data-aol-delay='400'>
        <Resume />
      </div> */}
      {/* <GetInTouch /> */}
      <Footer />
      
    </div>
    
  )
}

