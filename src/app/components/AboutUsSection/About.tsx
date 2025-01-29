'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../../lib/variants';

import Features from './Features';
import Achievements from './Achievements';

const About = () => {
  return (
    <section
      className="min-h-[calc(100vh-100px)] pt-8 pb-8 lg:pt-14 lg:pb-14 flex flex-col items-center justify-start"
      id="about"
    >
      <div className="container mx-auto flex-1 flex flex-col items-center justify-between gap-8">
        <div className="flex flex-col gap-2 items-center text-center">
          <motion.h2
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="h2"
          >
            About us
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="text-sm mobile:text-base max-w-[600px] mx-auto"
          >
            Discover a fitness club where passion meets professionalism. We are
            dedicated to helping you achieve your goals with modern facilities
            and expert guidance.
          </motion.p>
        </div>
        <Features />
        <Achievements />
      </div>
    </section>
  );
};

export default About;
