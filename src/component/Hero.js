import React, { useEffect } from 'react'
import profile from '../assets/editedv2.png'
import AOS from 'aos';
import 'aos/dist/aos.css'


function Hero() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='w-full h-[100vh] bg-primary-dark '>
        <div className='flex flex-col h-full justify-center items-center lg:flex-row lg:gap-4'>
            <div data-aos="fade-down" data-aos-duration="800" className='flex w-64 h-fit mx-auto lg:mx-0 lg:w-96'>
                <img src={profile} alt='hero'/>
            </div>
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-semibold text-cream lg:text-6xl'>I'm Aloysius</h1>
                <h1 className='text-6xl font-extrabold px-4 py-2 text-sand m-2 bg-orange lg:text-8xl'>JUAN</h1>
                <div className='mt-2 flex flex-col justify-center text-center w-64 lg:w-80 gap-2 lg:mt-4'>
                  <p className='px-2 text-sm text-white lg:text-base'>Do not go gentle into that good night. Old age should burn and rave at close of day. Rage, rage against the dying of the light.</p>
                  <p className='italic text-cream lg:text-base'>- Interstellar</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero