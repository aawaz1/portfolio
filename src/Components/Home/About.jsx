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


      {/* Work Experience */}
        {/* <div className='h-96 w-96 sm:w-[48%] border border-white lg:h-64 m-auto rounded-lg flex flex-col justify-center items-center lg:flex-row  mb-16 sm:mb-4 ' >
                 
                <div className='h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2' >
                  <h1 className='text-base font-semibold pb-1' >Social Media App</h1>
                  <p>This project is a Social Media Website built using Next.js, Tailwind CSS, and Neon for database. It features a sleek, user-friendly, and fully responsive design.</p>
                 
                </div>
              </div> */}
      
    </div>
  )
}

export default About