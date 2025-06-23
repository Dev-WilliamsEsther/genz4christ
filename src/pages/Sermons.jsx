// Sermons.jsx
import React from 'react';

const sermons = [
  {
    title: "Walking in Purpose",
    speaker: "Pst. Daniel",
    date: "June 16, 2025",
    videoId: "abc123xyz",
  },
  {
    title: "The Fire Within",
    speaker: "Min. Praise",
    date: "June 9, 2025",
    videoId: "xyz987def",
  },
  {
    title: "Faith That Moves",
    speaker: "Evangelist Joy",
    date: "June 2, 2025",
    videoId: "lmn456hij",
  }
];

const Sermons = () => {
  return (
    <div className='min-h-screen bg-[#334238] text-[#FAF2E8] px-6 pt-17 py-12'>
      <h1 className='text-4xl md:text-6xl font-bold mb-10 text-center'>Sermons</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {sermons.map((sermon, index) => (
          <div key={index} className='bg-[#FAF2E8] text-[#334238] rounded-lg overflow-hidden shadow-lg'>
            <img
              src={`https://img.youtube.com/vi/${sermon.videoId}/hqdefault.jpg`}
              alt={sermon.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h2 className='text-xl font-semibold'>{sermon.title}</h2>
              <p className='text-sm mb-3'>{sermon.speaker} • {sermon.date}</p>
              <a
                href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className='inline-block mt-2 px-4 py-2 bg-[#334238] text-[#FAF2E8] rounded hover:bg-[#45584b]'
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sermons;
