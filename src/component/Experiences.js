import React, { useEffect } from 'react'
import sch from '../assets/sch.png'
import kmk from '../assets/3c.png'
import usf from '../assets/usf.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Experiences() {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className='flex flex-col mx-[7%] pb-12'>
        <div className='flex flex-col w-full justify-center items-center mt-12'>
                <h1 className='text-primary-dark text-4xl font-bold border-b-4 border-orange p-2'>PROJECTS</h1>
                <p className='py-4 text-center'>Here are some of my experiences in technical fields, especially Web Development and in other fields.</p>
        </div>

        {/* card */}
        <div className='flex flex-col gap-8'>

            <div data-aos="fade-left" data-aos-duration="600" className='border-2 border-primary-dark shadow-2xl'>
                <a href='/'>
                    <img src={sch} alt='img-exp'/>
                </a>
                <div className='flex flex-col gap-2 bg-primary-dark p-4 pb-6'>
                    <h1 className='font-semibold text-orange text-lg'>Clone UI Schematics Landing Page</h1>
                    <p className='text-white text-sm'>Here are some of my experiences in technical fields, especially Web Development and in other fields.</p>
                    <div className='flex gap-2 mt-4 '>
                        <a href='https://github.com/juanfarrel/clone-web-schematics'>
                            <div className='p-2 px-3 border-2 gap-2 border-cream rounded-full w-max flex items-center justify-center  hover:bg-black hover:bg-opacity-40 ease-in-out'>
                                <svg className='w-4' role="img" fill="#dccaa8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                <p className='text-xs text-cream'>Github Repository</p>
                            </div>
                        </a>
                        <a href='https://clone-ui-web-schematics.vercel.app/'>
                            <div className='p-2 px-3 border-2 gap-2 border-cream rounded-full w-max flex items-center justify-center hover:bg-black hover:bg-opacity-40 ease-in-out'>
                                <svg className='w-4' role="img" fill="#dccaa8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vercel</title><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>
                                <p className='text-xs text-cream'>Deployment</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* -------------------------- */}

            <div data-aos="fade-right" data-aos-duration="600" id="kmk" className='border-2 border-primary-dark shadow-2xl'>
                <a href='/'>
                    <img src={kmk} alt='img-exp'/>
                </a>
                <div className='flex flex-col gap-2 bg-primary-dark p-4 pb-6'>
                    <h1 className='font-semibold text-orange text-lg'>Landing Page 3C KMK ITS 2023</h1>
                    <p className='text-white text-sm'>Here are some of my experiences in technical fields, especially Web Development and in other fields.</p>
                    <div className='flex gap-2 mt-4 '>
                        <a href='https://arek.its.ac.id/kmk/home3c/'>
                            <div className='p-2 px-3 border-2 gap-2 border-cream rounded-full w-max flex items-center justify-center hover:bg-black hover:bg-opacity-40 ease-in-out'>
                                <svg className='w-4' role="img" fill="#dccaa8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vercel</title><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>
                                <p className='text-xs text-cream'>Deployment</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* -------------------------- */}

            <div data-aos="fade-left" data-aos-duration="600" className='border-2 border-primary-dark shadow-2xl'>
                <a href='/'>
                    <img src={usf} alt='img-exp'/>
                </a>
                <div className='flex flex-col gap-2 bg-primary-dark p-4 pb-6'>
                    <h1 className='font-semibold text-orange text-lg'>Ur Safety Fence</h1>
                    <p className='text-white text-sm'>Here are some of my projects and experiences in technical fields, especially Web Development and in other fields.</p>
                    <div className='flex gap-2 mt-4 '>
                        <a href='https://github.com/juanfarrel/ur-safety-fence'>
                            <div className='p-2 px-3 border-2 gap-2 border-cream rounded-full w-max flex items-center justify-center  hover:bg-black hover:bg-opacity-40 ease-in-out'>
                                <svg className='w-4' role="img" fill="#dccaa8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                <p className='text-xs text-cream'>Github Repository</p>
                            </div>
                        </a>
                       
                    </div>
                </div>
            </div>

        </div>

        <div className='flex flex-col w-full justify-center items-center mt-12'>
                <h1 className='text-primary-dark text-4xl font-bold border-b-4 border-orange p-2'>EXPERIENCES</h1>
                <p className='py-4 text-center'>Here are some of my experiences in technical fields, especially Web Development and in other fields.</p>
        </div>
        
        <VerticalTimeline lineColor='#f45325' layout='2-columns'>
            <VerticalTimelineElement
                position='left'
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#161415', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #f45325' }}
                date="2011 - present"
                iconStyle={{ background: '#f45325', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-lg text-cream">Staff of Schematics National Programming Contest 2023</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                position='right'
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#161415', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #f45325' }}
                date="2011 - present"
                iconStyle={{ background: '#f45325', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-lg text-cream">Website Division at 3C KMK ITS 2023</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                <a href='#kmk'><p className='text-orange'>See our work →</p></a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                position='left'
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#161415', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #f45325' }}
                date="2011 - present"
                iconStyle={{ background: '#f45325', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-lg text-cream">Expert Staff of Fundraising at ILITS! x FORMITS 2024</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                position='right'
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#161415', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #f45325' }}
                date="2011 - present"
                iconStyle={{ background: '#f45325', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-lg text-cream">Coordinator of Accomodation and Transportation at ITS Student Choir Goes To 6th KICC 2023</h3>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            
        </VerticalTimeline>
        <div className='p-2'>
            <p><a href='https://www.linkedin.com/in/aloysiusjuanfarrellumentut/'>See more on my <span className='text-orange underline font-semibold'>Linkedin</span></a></p>
        </div>

    </div>
  )
}

export default Experiences