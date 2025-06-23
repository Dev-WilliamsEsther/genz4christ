import React from 'react'
import Benefits from './Benefits'
import Faqs from './Faqs'
import { useNavigate } from 'react-router'

const LandingPage = () => {
  const nav = useNavigate()
  return (
    <>
      <div className='w-full h-screen bg-[url("/images/genzhome1.jpg")] bg-cover bg-center pt-20 px-4 md:px-16'>
        <div className='w-full md:w-[50%] mt-[40%] md:mt-[24%] space-y-4'>
          <h2 className='font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#FAF2E8]'>
            Discover your purpose in Christ.
          </h2>
          <p className='text-[#FAF2E8] text-base sm:text-lg md:text-[20px]'>
            Faith isn’t just personal — it’s powerful. <br />
            Step into a vibrant community of believers who are passionate about Jesus, purpose, and influencing their generation for the Kingdom.
          </p>
          <button 
          onClick={()=> nav("/getinvolved")} 
          className="bg-[#334238] text-[#FAF2E8] px-4 py-2 mt-2 sm:mt-4 rounded-full">
            Get Involved
          </button>
        </div>
      </div>
      <Benefits />
      <Faqs/>
    </>
  )
}

export default LandingPage
