import React from 'react'
import { BiArrowBack, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import arrowicon from '../../assets/arrow_icon.svg'
import mailicon from '../../assets/mail_icon.svg'
import { Link } from 'react-scroll'
import profile from '../../assets/profileImage2.png'

function Hero() {
  return (
    <div id='home' className='flex flex-col-reverse lg:flex-row justify-around items-center pt-0 sm:pt-10 lg:py-36' >
      {/* Left side */}
      <div className='w-full lg:w-1/2 xl:w-2/5 text-center lg:text-start' >
        <h1 className='w-[95%] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ' >I'm<span className='textcolor' > Adil Nawaz,</span> <br /> Full Stack Developer based in Lucknow.</h1>
        <p className='text-sm md:w-10/12 m-auto lg:w-auto text-gray-400'>Seeking opportunities to grow and contribute to organizational success. Experienced in web development with React.js,Next.js , React Query , Redux , AWS , Docker , JavaScript, CSS, Tailwind CSS, Bootstrap,Material UI, HTML5 ,Express.js , MongoDB , MySQL. </p>

        {/* LinkedIn & Github logo */}
        <div className='w-full flex justify-center lg:justify-start items-center mt-4' >
          <a target='_blank' href="https://www.linkedin.com/in/adil-nawaz-803158218/">
            <BiLogoLinkedin className='text-2xl' />
          </a>
          <a target='_blank' href="https://github.com/aawaz1">
            <BiLogoGithub className='text-2xl mx-2' />
          </a>
        </div>

        {/* Contact me button */}
        <div className='w-full' >
          <Link to='contact' smooth={true} offset={-80} duration={500} className='btn h-10 w-36 mt-5 m-auto lg:ml-0 rounded-md flex justify-center items-center text-base font-semibold bg-purple-700 text-white cursor-pointer' >Contact Me <BiArrowBack className='text-xl font-bold ml-2' /> </Link>
        </div>

      </div>

      {/* Right Side */}
      <div className='h-full w-full sm:w-2/3 lg:w-1/2 flex justify-between sm:mb-4 lg:mb-0' >
        <div className='h-0 w-0 sm:h-72 sm:w-20 lg:h-96 relative' >
          <img className='h-0 w-0 sm:h-10 sm:w-20 absolute top-0 ' src={arrowicon} alt="" />
          <img className='h-0 w-0 sm:h-10 sm:w-20 absolute bottom-20 ' src={mailicon} alt="" />
        </div>
        <div className='h-72 lg:h-96 w-[77%] relative flex justify-center items-center' >
          <img className='h-64 w-64 sm:h-72 lg:h-80 sm:w-72 lg:w-80 absolute lg:bottom-16 rounded-full  bg-gray-400 border-none outline-none' src='' alt="" />
        </div>
        <div className='h-0 w-0 sm:h-72 sm:w-20 lg:h-96 relative' >
          <img className='h-0 w-0 sm:h-10 sm:w-20 absolute top-4 right-10 ' src={mailicon} alt="" />
          <img className='h-0 w-0 sm:h-10 sm:w-20 absolute -bottom-4 right-20 ' src={arrowicon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero