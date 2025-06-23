import React, { useState } from 'react'
import SermonSection from '../Components/SermonSection'
import BlogSection from '../Components/BlogSection'

const Sermons = () => {
  const [activeTab, setActiveTab] = useState('sermons')

  return (
    <div className=" bg-[#FAF2E8] min-h-screen px-6 py-16  pt-25">
      <h1 className="text-4xl font-extrabold text-center text-[#334238] mb-8">Grow in the Word</h1>
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => setActiveTab('sermons')}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            activeTab === 'sermons' ? 'bg-[#334238] text-white' : 'bg-gray-200 text-[#334238]'
          }`}
        >
          Sermons
        </button>
        <button
          onClick={() => setActiveTab('blogs')}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            activeTab === 'blogs' ? 'bg-[#334238] text-white' : 'bg-gray-200 text-[#334238]'
          }`}
        >
          Blogs & Books
        </button>
      </div>

      {activeTab === 'sermons' ? <SermonSection /> : <BlogSection />}
    </div>
  )
}

export default Sermons