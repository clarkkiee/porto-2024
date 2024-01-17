import React, { useEffect } from 'react'
import about from '../assets/about.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'

function About() {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className='flex flex-col mb-12'>
        <div className='flex flex-col mx-[7%]'>
            <div data-aos="fade-down" data-aos-duration="300" className='flex w-full justify-center items-center mt-12'>
                <h1 className='text-primary-dark text-4xl font-bold border-b-4 border-orange p-2'>ABOUT</h1>
            </div>
            <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="200" className='mx-auto mt-4 w-[80%] '>
                <img src={about} alt='about'/>
            </div>
            <div className='flex flex-col my-4 text-primary-dark text-justify gap-4 p-2'>
                <p data-aos="fade-right" data-aos-duration="400" data-aos-delay="200">
                    Hola, I am Aloysius Juan Farrel Lumentut, a second year Informatics Engineering student at Institut Teknologi Sepuluh Nopember. Interested in Web Development and Machine Learning. Also interested in soft skills development and teamwork.
                </p>
                <p data-aos="fade-left" data-aos-duration="400" data-aos-delay="200">
                    In web development, I have some experience especially in using Javascript technology stacks, such as React, ExpressJs, and currently exploring NextJs. For me, becoming a Fullstack Developer is a very long journey, I will continue to develop my skills through various opportunities.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About