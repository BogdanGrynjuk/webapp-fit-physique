'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import TestimonialsSlider from './TestimonialsSlider';

const Community = () => {
  return (
    <section id="community">
      <h2 className="visually-hidden">Community</h2>
      <section className="pt-8 pb-8 lg:pt-14 lg:pb-14">
        <div className="container mx-auto">
          <motion.h3
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center mb-5"
          >
            Our Testimonials
          </motion.h3>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
          >
            <TestimonialsSlider />
          </motion.div>
        </div>
      </section>
      <section className="pt-8 pb-8 lg:pt-14 lg:pb-14 bg-gray-200">
        <div className="container mx-auto">
          <h3 className="h2 text-center">Our Partners</h3>
        </div>
      </section>
    </section>
  );
};

export default Community;
