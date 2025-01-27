'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../lib/variants';
import AboutFeatures from './AboutFeatures';

const About = () => {
  return (
    <section
      className="pt-8 pb-16 lg:pt-14 lg:pb-28 flex flex-col items-center justify-center mt-[100px]"
      id="about"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-8">
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

        <AboutFeatures />
      </div>
    </section>
  );
};

export default About;
