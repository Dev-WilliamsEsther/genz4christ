import React, { useState } from 'react';
import { FiMinus } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';

const faqs = [
  {
    id: 1,
    question: "What is Gen-Z For Christ?",
    answer: "Gen-Z For Christ is a global movement focused on transforming the lives of teenagers and  youths by empowering them to embrace Christianity as a lifestyle, not just a religion. We reach  out to young people through school outreaches, resources, and tools to help them live a life  anchored in Christ."
  },
  {
    id: 2,
    question: "How do I get involved?",
    answer: "You can get involved by joining our community, sponsoring our outreach programs, or sharing  your Gen-Z story to inspire others. Check out our 'Get Involved' section for more details on  how you can be a part of this movement. "
  },
  {
    id: 3,
    question: "What kind of outreach does Gen-Z 4 Christ do?",
    answer: "We conduct school outreaches across different regions, sharing the Gospel, distributing faith based books, and providing students with resources and branded merchandise to help them live  boldly for Christ."
  },
  {
    id: 4,
    question: "How can I sponsor Gen-Z 4 Christ?",
    answer: "Sponsorship is a key part of our outreach success. By sponsoring us, you help provide resources,  gifts, and materials to students, and in return, your brand gains exposure through our website,  social media, and at our events. Visit our 'Become a Sponsor' page for more details."
  },
  {
    id: 5,
    question: "Who can join Gen-Z 4 Christ?",
    answer: "Any young person passionate about living for Christ and making a difference in their world is  welcome to join our movement. We encourage youths and teenagers from all walks of life to get  involved."
  },
  {
    id: 6,
    question: "What does Gen-Z 4 Christ believe in?",
    answer: "We believe in equipping young people with the gospel and resources needed to stand firm in  their faith, live purposefully, and share the Gospel through their careers, in their communities,  and nations. Our mission is to raise young ambassadors for Christ who will not conform to  societal norms but instead live boldly for God."
  },
  {
    id: 7,
    question: "How do I share my story?",
    answer: "We love hearing how Christ has impacted your life. You can share your story by visiting our 'Share Your Gen-Z' Story section and joining our community of young people living out their  faith and inspiring others with their testimonies."
  },
  {
    id: 8,
    question: "What resources does Gen-Z 4 Christ provide?",
    answer: "We provide faith-based books, study materials, and branded merchandise to students during  our school outreaches. These tools help young people deepen their relationship with Christ and  encourage them to live out their faith daily."
  },
  {
    id: 9,
    question: "How can I contact the Gen-Z 4 Christ team?",
    answer: "For general and sponsorship inquiries, you can reach out to us through our contact page. "
  },
  {
    id: 10,
    question: "How often do school outreaches occur?",
    answer: "We aim to reach 100+ schools yearly, with each outreach event focused on sharing the Gospel  and providing resources that help students embrace a Christ-centered life."
  }
];

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleClick = (id) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-[#334238] mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-lg shadow-sm p-4 transition-all duration-300 bg-white"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleClick(faq.id)}
            >
              <h3 className="text-lg font-semibold text-[#334238]">{faq.question}</h3>
              {openFaq === faq.id ? <FiMinus className="text-[#334238]" size={20} /> : <GoPlus className="text-[#334238]" size={20} />}
            </div>
            {openFaq === faq.id && (
              <p className="mt-4 text-gray-700 whitespace-pre-line">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
