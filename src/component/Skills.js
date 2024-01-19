import React, { useEffect } from 'react'
import reactlogo from '../assets/react.svg'
import mysqllogo from '../assets/mysql.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'

function Skills() {

    useEffect(() => {
        AOS.init();
      }, [])
    
  return (
    <>
        <div className='flex flex-col bg-primary-dark pb-12 lg:py-18'>
            <div data-aos="fade-down" data-aos-duration="400"  className='flex flex-col w-full justify-center items-center mt-12'>
                <h1 className='text-cream text-4xl font-bold border-b-4 border-orange p-2'>SKILLS</h1>
                <p className='p-8 text-white text-center'>Through the various learnings and experiences I have had, I have gained a lot of skills, both technical and non-technical. </p>
            </div>
            
            <div className='flex flex-col lg:mx-[12%] lg:flex-row lg:justify-center lg:gap-4'>
                <div className=' lg:w-[50vw]'>
                        <h1 className='text-sand font-semibold mx-auto text-xl text-center'>Techincal Skill</h1>
                        <div className='flex flex-col p-8 justify-center gap-4'>
                            <div data-aos="fade-left" data-aos-duration="600"  className='flex gap-4 px-6 py-4 items-center border-[1px] border-cream hover:scale-105 transition-all ease-in-out'>
                                <span>
                                    <svg role="img" fill="#f45325" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
                                </span>
                                <p className='font-semibold text-white'>HTML</p>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="600" className='flex gap-4 px-6 py-4 items-center border-[1px] border-cream hover:scale-105 transition-all ease-in-out'>
                                <span>
                                    <svg role="img" fill="#f45325" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
                                </span>
                                <p className='font-semibold text-white'>TailwindCSS</p>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="600" className='flex gap-4 px-6 py-4 items-center border-[1px] border-cream hover:scale-105 transition-all ease-in-out'>
                                <span className='w-8 text-orange' >
                                    <svg role="img" width="30" fill="#f45325" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Express</title><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>
                                </span>
                                <p className='font-semibold text-white'>ExpressJS</p>
                            </div>
                            
                            <div data-aos="fade-right" data-aos-duration="600" className='flex gap-4 px-6 py-4 items-center border-[1px] border-cream hover:scale-105 transition-all ease-in-out'>
                                <img src={reactlogo} width={30} alt='h'/>
                                <p className='font-semibold text-white'>React</p>
                            </div>

                            <div data-aos="fade-left" data-aos-duration="600" className='flex gap-4 px-6 py-4 items-center border-[1px] border-cream hover:scale-105 transition-all ease-in-out'>
                                <img src={mysqllogo} width={30} alt='h'/>
                                <p className='font-semibold text-white'>MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[50vw]'>
                        <div className='flex flex-col '>
                            <h1 className='text-sand font-semibold mx-auto text-xl'>Non Techincal Skill</h1>
                            <div className='flex flex-col p-8 justify-center gap-4'>
                                <div data-aos="fade-right" data-aos-duration="600" className='flex gap-4 px-6 py-4 items-center border-[1px] border-cream hover:scale-105 transition-all ease-in-out'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#f45325" height="30" width="30" viewBox="0 0 640 512"><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg>                        
                                    </span>
                                    <p className='font-semibold text-white'>Communication</p>
                                </div>
                                <div data-aos="fade-left" data-aos-duration="600" className='flex gap-4 px-6 py-4 items-center border-[1px] border-cream hover:scale-105 transition-all ease-in-out'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#f45325" height="28" width="28" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                                    </span>
                                    <p className='font-semibold text-white'>Project Planning</p>
                                </div>
                                <div data-aos="fade-right" data-aos-duration="600" className='flex gap-4 px-6 py-4 items-center border-[1px] border-cream hover:scale-105 transition-all ease-in-out'>
                                    <span className='w-8 text-orange' >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#f45325" height="28" width="28" viewBox="0 0 640 512"><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/></svg>
                                    </span>
                                    <p className='font-semibold text-white'>Teamwork</p>
                                </div>
                                <div data-aos="fade-left" data-aos-duration="600" className='flex gap-4 px-6 py-4 items-center border-[1px] border-cream hover:scale-105 transition-all ease-in-out'>
                                    <span className='w-8 text-orange' >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#f45325" height="28" width="28" viewBox="0 0 512 512"><path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"/></svg>                                    </span>
                                    <p className='font-semibold text-white'>Problem Solving</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            

        </div>
    </>
  )
}

export default Skills