import React from 'react';

import { FaBriefcase, FaClock, FaTrophy } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';

const statistic = [
  { title: 'Training Courses', value: 19, icon: <FaBriefcase /> },
  { title: 'Working Hours', value: 879, icon: <FaClock /> },
  { title: 'Happy Customer', value: 150, icon: <ImUsers /> },
  { title: 'International Awards', value: 7, icon: <FaTrophy /> },
];

const AboutAchievements = () => {
  return (
    <section>
      <h3 className="visually-hidden">Our achievements</h3>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 xl:gap-16">
        {statistic.map((item, index) => (
          <li
            key={index}
            className="flex flex-col gap-4 items-center justify-start"
          >
            <div className="w-32 h-32 xl:w-36 xl:h-36 border border-accent rounded-full p-2">
              <div className="w-full h-full border border-accent/30 rounded-full flex flex-col items-center justify-center text-4xl xl:text-5xl">
                {item.value}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <div className="text-3xl">{item.icon}</div>
              <h4 className="h4 text-center">{item.title}</h4>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutAchievements;
