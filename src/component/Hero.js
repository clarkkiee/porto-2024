import React, { useEffect } from 'react'
import profile from '../assets/editedv2.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

function Hero() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='w-full h-[100vh] bg-primary-dark'>
        <div className='flex flex-col h-full justify-center items-center'>
            <div data-aos="fade-down" data-aos-duration="800" className='flex w-72 h-fit mx-auto '>
                <img src={profile} alt='hero'/>
            </div>
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-semibold text-cream'>I'm Aloysius</h1>
                <h1 className='text-6xl font-extrabold px-4 py-2 rounded- text-sand m-2 bg-orange'>JUAN</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero