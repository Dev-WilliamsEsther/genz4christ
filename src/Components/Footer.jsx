import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { ImFacebook } from 'react-icons/im'
import { GrInstagram, GrYoutube } from 'react-icons/gr'
import { SiTiktok } from 'react-icons/si'
import { HiCheckCircle } from 'react-icons/hi'

const Footer = () => {
  return (
    <div className="w-full bg-[#334238] text-black px-6 py-10 border-t-4 border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[#FAF2E8] rounded-full"></div>
            <div className="w-3 h-3 bg-[#eae4dd] rounded-full"></div>
            <div className="w-3 h-3 bg-[#c2beba] rounded-full"></div>
          </div>
          <h2 className="font-bold text-lg text-[#FAF2E8]">Gen Z for Christ</h2>
          <p>Email: <span className="text-[#FAF2E8]">hello@genz.com</span></p>
          <p>Phone Number: <span className="text-[#FAF2E8]">+1 (201) 895–3801</span></p>
        </div>

        <div className="space-y-4 text-left md:text-right w-full md:w-auto">
          <h3 className="text-lg font-semibold text-[#FAF2E8]">Get started with personal AI manager now</h3>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button className="bg-[#FAF2E8] text-[#334238] px-4 py-2 rounded-full font-semibold">Try Gen Z</button>
            <button className="border border-gray-400 text-black px-4 py-2 rounded-full font-semibold">Watch Demo</button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#FAF2E8] my-6"></div>

      <div className="flex flex-col gap-6 md:flex-row md:justify-between items-start md:items-center">
        <p className="text-sm flex items-center gap-2 text-[#FAF2E8]">
          <HiCheckCircle className="text-lg text-[#FAF2E8]" /> Available on all platforms
        </p>

        <div className="flex flex-wrap gap-3">
          <p className="flex items-center gap-2 text-sm border px-3 py-1 rounded-2xl cursor-pointer text-[#FAF2E8]"><ImFacebook />Facebook</p>
          <p className="flex items-center gap-2 text-sm border px-3 py-1 rounded-2xl cursor-pointer text-[#FAF2E8]"><GrInstagram />Instagram</p>
          <p className="flex items-center gap-2 text-sm border px-3 py-1 rounded-2xl cursor-pointer text-[#FAF2E8]"><GrYoutube />YouTube</p>
          <p className="flex items-center gap-2 text-sm border px-3 py-1 rounded-2xl cursor-pointer text-[#FAF2E8]"><BsLinkedin />LinkedIn</p>
          <p className="flex items-center gap-2 text-sm border px-3 py-1 rounded-2xl cursor-pointer text-[#FAF2E8]"><SiTiktok />TikTok</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

