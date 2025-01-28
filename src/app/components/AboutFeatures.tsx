import React from 'react';

import { FaUsers } from 'react-icons/fa';
import { IoMdPricetags } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa6';

const features = [
  {
    icon: <FaUsers />,
    title: 'Winner coaches',
    description:
      'Train with award-winning coaches who inspire, motivate, and challenge you to reach your full potential every step of the way.',
  },
  {
    icon: <IoMdPricetags />,
    title: 'Affordable price',
    description:
      'Enjoy premium fitness services at prices that fit your budget, making health and wellness accessible to everyone.',
  },
  {
    icon: <FaDumbbell />,
    title: 'Modern equipments',
    description:
      'Experience state-of-the-art fitness equipment designed to make your workouts effective, efficient, and enjoyable. ',
  },
];

const AboutFeatures = () => {
  return (
    <section>
      <h3 className="visually-hidden">Features</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`p-10 flex flex-col flex-1 items-center justify-center gap-4 border border-gray-300 rounded-lg bg-white ${
              index === 2
                ? 'md:col-span-2 md:justify-self-center md:w-[calc(50%-2rem)] xl:col-span-1 xl:justify-self-auto xl:w-auto'
                : ''
            }`}
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl text-white bg-primary-300 ">
              {feature.icon}
            </div>
            <div className="flex flex-col gap-2 items-center justify-center text-center">
              <h4 className="h4 text-accent">{feature.title}</h4>
              <p className="text-sm mobile:text-base">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutFeatures;
