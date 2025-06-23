// import React from 'react'

// const Team = () => {
//   return (
//     <div className='min-h-screen bg-cyan-400 flex justify-around items-center'>
//         <div className="relative w-72 h-96 overflow-hidden rounded-xl group">
//   <img
//     src="/images/leader.jpg"
//     alt="Leader"
//     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//   />
  
//   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
//     <h3 className="text-xl font-semibold">Justin Hayashi</h3>
//     <p className="text-sm">Founder & CEO</p>
//   </div>
// </div>



//     </div>
//   )
// }

// export default Team

import React from 'react';

const teamMembers = [
  {
    name: 'Peace Akinola',
    role: ' Project Director ',
    image: '/images/founder1.png',
  },
  {
    name: 'Emem Udom ',
    role: 'Head of Content Division',
    image: '/images/founder3.png',
  },
  {
    name: 'Charles Olatuyi ',
    role: 'Head of Design Division ',
    image: '/images/founder2.png',
  },
  {
    name: 'Peace Olaitan',
    role: 'Operations Manager ',
    image: '/images/founder4.png',
  },
  {
    name: 'Samuel Bakare',
    role: 'Head of Project Development',
    image: '/images/founder5.png',
  }
];

const Team = () => {
  return (
    <section className="px-4 py-12 pt-16 pb-16 bg-[#334238]">
      <h2 className="text-3xl font-bold text-center mb-10">
        Meet the Leadership
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-full h-96 overflow-hidden rounded-xl group"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
