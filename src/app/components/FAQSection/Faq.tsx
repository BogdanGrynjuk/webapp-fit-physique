'use client';

import React from 'react';
import FaqAccordion from './FaqAccordion';

const questionsList = [
  {
    question: 'How can I calculate my Body Mass Index (BMI)?',
    answer:
      'You can calculate your BMI by dividing your weight in kilograms by the square of your height in meters. A BMI between 18.5 and 24.9 is generally considered healthy.',
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

const Faq = () => {
  return (
    <section className="xl:min-h-[calc(100vh-100px)]" id="faq">
      <div className="container mx-auto pt-8 pb-8 lg:pt-14 lg:pb-14">
        <h2 className="h2">Frequently asked questions</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          tempora et sint culpa eveniet non?
        </p>
        <ul className="flex flex-col gap-4">
          {questionsList.map((item, index) => (
            <li key={index}>
              <FaqAccordion question={item.question} answer={item.answer} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
