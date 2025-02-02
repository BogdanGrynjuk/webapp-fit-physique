'use client';

import React from 'react';
import { FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';

import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/variants';

import TrainerCard from './TrainerCard';
import CustomButton from '../UI/CustomButton';

const trainers = [
  {
    photo: '/assets/img/trainers/david.jpg',
    fullName: 'David Williams',
    role: 'Body Builder Coach',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolore?',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    photo: '/assets/img/trainers/rosy.jpg',
    fullName: 'Rosy Rivera',
    role: 'Cardio Coach',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolore?',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    photo: '/assets/img/trainers/matt.jpg',
    fullName: 'Matt Stonie',
    role: 'Crossfit Coach',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolore?',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    photo: '/assets/img/trainers/sofia.jpg',
    fullName: 'Sofia Lauren',
    role: 'fitness Coach',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolore?',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
];

const Team = () => {
  return (
    <section
      className="pt-8 pb-8 lg:pt-14 lg:pb-14 min-h-[calc(100vh-100px)]"
      id="team"
    >
      <div className="container mx-auto flex flex-col gap-10 items-center justify-between min-h-[calc(100vh-100px-(2*56px))]">
        <motion.h2
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center"
        >
          Our Trainers
        </motion.h2>
        <motion.ul
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {trainers.map((trainer, index) => (
            <li key={index}>
              <TrainerCard
                photo={trainer.photo}
                fullName={trainer.fullName}
                role={trainer.role}
                description={trainer.description}
                onlineProfile={trainer.onlineProfile}
              />
            </li>
          ))}
        </motion.ul>
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="w-[200px] h-[40px] md:w-[220px] md:h-[56px]"
            text={'View All Trainers'}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
