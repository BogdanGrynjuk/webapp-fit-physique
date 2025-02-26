'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import Accordion from './Accordion';
import CalculatorBMI from './CalculatorBMI';

const questionsList = [
  {
    question: 'How can I calculate my Body Mass Index (BMI)?',
    answer: <CalculatorBMI />,
  },
  {
    question: 'What diet is important during and after workout?',
    answer:
      'A balanced diet rich in protein and complex carbohydrates is crucial for optimal performance. Staying hydrated and timing your meals properly can boost recovery.',
  },
  {
    question: 'Should we need to do workout if our muscles is feeling sore?',
    answer:
      'It’s important to listen to your body. If your muscles are sore, consider opting for a lighter workout or taking a rest day to recover.',
  },

  {
    question: 'How does proper rest impact my workout results?',
    answer:
      'Proper rest is essential for muscle recovery and growth. Adequate sleep and rest days help prevent injuries and improve overall performance.',
  },
  {
    question: 'How many days in a week should I need to workout?',
    answer:
      'Most experts recommend working out 3 to 5 days a week, which provides a good balance between exercise and recovery.',
  },
  {
    question: 'Where can i get the membership?',
    answer:
      'You can sign up for a membership on our website or visit our club in person. Our friendly staff is ready to assist you with registration.',
  },
  {
    question: 'Can i get a personal trainer?',
    answer:
      'Yes, personal training services are available. Our certified trainers can design a personalized workout plan to help you achieve your goals.',
  },
];

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
        {questionsList.map((item, index) => (
          <li key={index}>
            <Accordion question={item.question} answer={item.answer} />
          </li>
        ))}
      </motion.ul>
    </section>
  );
};

export default FaqBlock;
