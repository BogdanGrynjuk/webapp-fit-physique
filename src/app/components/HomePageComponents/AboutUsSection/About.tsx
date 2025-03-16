'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '@/app/lib/variants';

import Features from './Features';
import Achievements from './Achievements';

const About = () => {
  return (
    <section
      className="pt-8 pb-8 lg:pt-14 lg:pb-14 flex flex-col items-center justify-start scroll-mt-[100px]"
      id="about"
    >
      <div className="container mx-auto flex-1 flex flex-col items-center justify-between gap-8">
        <div className="flex flex-col gap-2 items-center text-center">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className="h2"
          >
            About us
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className="text-sm mobile:text-base max-w-[600px] mx-auto"
          >
            Discover a fitness club where passion meets professionalism. We are
            dedicated to helping you achieve your goals with modern facilities
            and expert guidance.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Features />
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
