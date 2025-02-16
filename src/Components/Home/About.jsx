import React from 'react'
import { BiCodeBlock, BiCoinStack, BiCross, BiSolidBookContent } from 'react-icons/bi'

function About() {
  return (
    <div id='aboutus' className='h-full w-full mt-20 md:mt-6 lg:mt-2 text-white ' >
      <div className='relative ' >
        <h1 className='text-4xl md:text-6xl text-center font-bold ' >About Us</h1>
        <BiCross className='animate-spin text-5xl absolute -bottom-10 right-10 ' />
        <BiCross className='animate-bounce text-3xl absolute -bottom-96 ' />
      </div>

      <h1 className='w-full md:w-4/5 lg:w-3/5 xl:w-1/2 my-10 m-auto text-base text-center'>
  I’m a passionate full-stack developer with expertise in both front-end and back-end technologies. My skills include React.js, JavaScript, CSS, Tailwind CSS, Bootstrap, and HTML5 on the front end, combined with Node.js, Express.js, MongoDB, MySQL, and GraphQL on the back end. I have practical experience managing state with tools like React Query and Redux Toolkit, and navigation using React Router DOM.<br /> 
  <br />
  Additionally, I’m proficient with development tools such as NPM, Yarn, Git, and GitHub, and I have experience deploying applications on platforms like Netlify, Vercel, and Heroku.<br /> 
  <br />
  I specialize in building responsive, user-friendly, and efficient web applications with seamless API integration and database management. With a strong focus on delivering high-quality solutions, I thrive in collaborative environments and am always eager to learn, adapt, and tackle new challenges in full-stack development.
</h1>


      {/* Services */}
      
    </div>
  )
}

export default About