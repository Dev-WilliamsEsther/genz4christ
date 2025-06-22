import React from 'react';

const opportunities = [
  {
    title: "Join a Fellowship Group",
    description:
      "Connect with other young believers in your area. Grow spiritually in a tight-knit circle of faith, love, and purpose.",
    icon: "🤝",
  },
  {
    title: "Serve on a Team",
    description:
      "Use your gifts in worship, media, hospitality, evangelism, or prayer. We need your fire.",
    icon: "🎤",
  },
  {
    title: "Volunteer at Events",
    description:
      "Help out during conferences, revivals, outreach, and programs. Be a vessel that God can use.",
    icon: "📅",
  },
  {
    title: "Support the Mission (Give)",
    description:
      "Sow into the kingdom. Your giving fuels our outreach and growth efforts.",
    icon: "💖",
  },
  {
    title: "Become a Sponsor",
    description:
      "We are relying on your strategic sponsorship to spread the gospel through activities where we give faith-based books, resources, branded merch, and gifts to 100+ schools yearly, offering brand exposure and lead generation for our sponsors. ",
    icon: "🤝",
  },
  {
    title: "Join the Mentorship Program",
    description:
      "Be mentored or mentor someone. Walk with someone as you grow in Christ.",
    icon: "🌱",
  },
];

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-[#334238] px-6 py-16 text-[#FAF2E8]">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Be the Fire. Be the Movement.</h1>
        <p className="text-lg md:text-xl">
          There’s a place for you at GenZ for Christ. Let’s grow, serve, and lead together.
        </p>
      </div>

      {/* Opportunity Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {opportunities.map((item, index) => (
          <div
            key={index}
            className="bg-[#FAF2E8] text-[#334238] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <h3 className="text-2xl md:text-4xl font-bold mb-2">Ready to take the next step?</h3>
        <p className="mb-4 text-lg">
          Fill the interest form and we’ll connect you with the right team.
        </p>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FAF2E8] text-[#334238] px-6 py-3 rounded-md font-semibold hover:bg-[#e5d9cc] transition"
        >
          Fill the Get Involved Form
        </a>
      </div>
    </div>
  );
};

export default GetInvolved;
