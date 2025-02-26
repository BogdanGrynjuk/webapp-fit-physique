'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import MembershipSlider from './MembershipSlider';

const Membership = () => {
  return (
    <section
      className="relative z-0 pt-8 pb-8 lg:pt-14 lg:pb-14 text-white bg-membership bg-cover bg-no-repeat bg-center flex flex-col"
      id="membership"
    >
      <div className="absolute inset-0 bg-black/20 -z-10" />
      <div className="container mx-auto flex flex-col gap-5">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center"
        >
          Membership
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <MembershipSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Membership;
