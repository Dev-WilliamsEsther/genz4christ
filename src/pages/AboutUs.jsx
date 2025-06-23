import React from 'react'
import Team from './Team'

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#334238] flex flex-col pt-16 px-4 md:px-10 py-10">
      <h2 className="font-extrabold text-4xl md:text-9xl text-[#FAF2E8] mb-10">
        ABOUT US
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
        <div className="w-full md:w-[500px]">
          <h2 className="font-light text-[#FAF2E8] text-base md:text-lg leading-relaxed">
            GenZ for Christ is a vibrant faith-based community of young
            believers passionate about living for Jesus in today’s world. We
            exist to ignite the fire of God in the hearts of Gen Z, equipping
            them to grow spiritually, walk in purpose, and boldly represent
            Christ in every sphere of life.
            <br />
            <br />
            Through fellowship, worship, teachings, and outreach, we’re building
            a generation that is unapologetically sold out to God—empowered by
            the Holy Spirit, rooted in the Word, and driven by love.
            <br />
            <br />
            No matter where you are on your journey, you are welcome here. Join
            us as we seek God together and shine His light in our generation!
          </h2>
        </div>

        <div
          className="w-full md:w-[530px] h-72 md:h-80 rounded-md overflow-hidden shadow-purple-300"
          style={{
            boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
          }}
        >
          <img
            src="/images/genzabout.jpeg"
            alt="GenZ About"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h2 className="font-extrabold text-3xl md:text-6xl text-[#FAF2E8] mb-8 text-center">
        Our people drive kingdom impact every day.
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 mb-16">
        <div className="w-full md:w-[500px] font-bold text-lg md:text-[22px] text-[#FAF2E8]">
          Develop spiritual depth and a Christ-centered mindset in a community
          driven by faith, purpose, and love.
        </div>

        <div className="w-full max-w-xl p-4 md:p-6 bg-white/5 rounded-lg shadow-md">
          <p className="text-base md:text-lg font-medium mb-4 text-[#FAF2E8]">
            At <span className="font-bold">GENZ FOR CHRIST</span>, we believe
            that meaningful impact starts with a solid spiritual foundation—one
            that strengthens our identity in Christ and equips us to influence
            our generation. That’s why we nurture a faith-filled environment
            designed to help you grow both spiritually and personally.
          </p>

          <h3 className="text-lg md:text-xl font-semibold mb-3 mt-6 text-[#FAF2E8]">
            What we’re about:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[#FAF2E8] text-sm md:text-base">
            <li>Spirit-led leadership and mentorship</li>
            <li>Opportunities for service and evangelism</li>
            <li>Prayer and fellowship groups</li>
            <li>Bible study and discipleship</li>
            <li>Personal growth and life skills</li>
            <li>Faith-based events and conferences</li>
            <li>Mental wellness and Godly counsel</li>
          </ul>
        </div>
      </div>

      <Team />
    </div>
  );
}

export default AboutUs
