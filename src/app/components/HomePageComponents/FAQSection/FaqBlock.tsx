'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import Accordion from './Accordion';
import { FAQList } from '@/app/data/FAQList';

const FaqBlock = () => {
  return (
    <section className="flex flex-col gap-8">
      <motion.h3
        variants={fadeIn('up', 0.2)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className="h2 text-center"
      >
        Frequently asked questions
      </motion.h3>
      <motion.p
        variants={fadeIn('up', 0.3)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className="text-sm mobile:text-base"
      >
        Discover answers to your most common fitness questions. From workout
        routines and nutrition tips to membership details, our FAQs provide
        expert guidance to support your fitness journey.
      </motion.p>
      <motion.ul
        variants={fadeIn('up', 0.4)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.05 }}
        className="flex flex-col gap-4"
      >
        {FAQList.map((item, index) => (
          <li key={index}>
            <Accordion question={item.question} answer={item.answer} />
          </li>
        ))}
      </motion.ul>
    </section>
  );
};

export default FaqBlock;
