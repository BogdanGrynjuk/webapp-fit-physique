'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import TestimonialsSlider from './TestimonialsSlider';
import TestimonialForm from './TestimonialForm';

const Testimonials = () => {
  return (
    <section id="testimonials" className="scroll-mt-[100px]">
      <div className="pt-8 pb-8 lg:pt-14 lg:pb-14">
        <div className="container mx-auto">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center mb-5"
          >
            Our Testimonials
          </motion.h2>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
          >
            <TestimonialsSlider />
          </motion.div>
        </div>
      </div>
      <TestimonialForm />
    </section>
  );
};

export default Testimonials;
