import React from 'react';

import { FaBriefcase, FaClock, FaTrophy } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';

import AchievementCard from './AchievementCard';

const statistic = [
  { title: 'Training Courses', value: 19, icon: <FaBriefcase /> },
  { title: 'Working Hours', value: 879, icon: <FaClock /> },
  { title: 'Happy Customer', value: 150, icon: <ImUsers /> },
  { title: 'International Awards', value: 7, icon: <FaTrophy /> },
];

const Achievements = () => {
  return (
    <section>
      <h3 className="visually-hidden">Our achievements</h3>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 xl:gap-16">
        {statistic.map((item, index) => (
          <li key={index}>
            <AchievementCard
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
