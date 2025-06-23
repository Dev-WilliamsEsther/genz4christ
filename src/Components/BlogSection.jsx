import React, { useState } from 'react'

const blogData = {
  'Spiritual Growth': [
    {
      title: 'How to Develop a Consistent Prayer Life',
      description: 'Learn simple ways to build a powerful prayer habit.',
      link: 'https://example.com/blog/prayer-life'
    },
    {
      title: 'Fasting & Spiritual Sensitivity',
      description: 'Why fasting matters and how to grow through it.',
      link: 'https://example.com/blog/fasting'
    }
  ],
  'Christian Living': [
    {
      title: 'Faith in Action',
      description: 'Living boldly as a young believer in today’s world.',
      link: 'https://example.com/blog/faith-in-action'
    },
    {
      title: '10 Books Every Christian Should Read',
      description: 'A list of books that can shape your spiritual walk.',
      link: 'https://example.com/blog/christian-books'
    }
  ]
}

const BlogSection = () => {
  const topics = Object.keys(blogData)
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
        {blogData[selectedTopic].map((blog, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-bold text-[#334238]">{blog.title}</h3>
            <p className="text-gray-700 mt-2">{blog.description}</p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#334238] underline mt-2 inline-block"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogSection
