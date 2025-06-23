import React, { useState } from 'react'

const sermonData = {
  'Knowing the Holy Spirit': [
    {
      title: 'Who is the Holy Spirit?',
      speaker: 'Pastor Ayo',
      description: 'Understanding the person and work of the Holy Spirit.',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
    },
    {
      title: 'Walking with the Spirit',
      speaker: 'Minister Bisi',
      description: 'How to be led daily by the Spirit of God.',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
    }
  ],
  Marriage: [
    {
      title: 'God’s Blueprint for Marriage',
      speaker: 'Pastor Chika',
      description: 'Learn how to honor God in your relationship.',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
    }
  ]
}

const SermonSection = () => {
  const topics = Object.keys(sermonData)
  const [selectedTopic, setSelectedTopic] = useState(topics[0])

  return (
    <div>
      <select
        className="mb-6 px-4 py-2 border border-gray-300 rounded-md"
        onChange={(e) => setSelectedTopic(e.target.value)}
        value={selectedTopic}
      >
        {topics.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>

      <div className="grid md:grid-cols-2 gap-8">
        {sermonData[selectedTopic].map((sermon, index) => (
          <div key={index} className="bg-[#334238] p-4 shadow rounded-lg">
            <iframe
              src={sermon.videoUrl}
              className="w-full h-52 md:h-64 mb-4 rounded-md"
              frameBorder="0"
              allowFullScreen
              title={sermon.title}
            ></iframe>
              <h3 className="text-xl font-bold text-[#FAF2E8]">{sermon.title}</h3>
            <p className="text-sm text-[#FAF2E8] italic">Speaker: {sermon.speaker}</p>
            <p className="text-[#FAF2E8] mt-1">{sermon.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SermonSection