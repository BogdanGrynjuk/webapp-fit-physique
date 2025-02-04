'use client';

import React, { useState } from 'react';
import CustomButton from '../UI/CustomButton';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

const TestimonialForm = () => {
  const [isUserActive, setIsUserActive] = useState(false);
  return (
    <div className="relative w-full min-h-[200px] aspect-[1920/480] bg-testimonial bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 w-full h-full z-10 bg-black/40">
        <div className="container mx-auto h-full flex flex-col items-center justify-center gap-5">
          <motion.p
            variants={fadeIn('up', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="font-roboto text-center text-sm mobile:text-base text-white md:text-xl"
          >
            Are you part of our community? Share your experience with us!
          </motion.p>
          <form className="flex z-20 ">
            <motion.input
              variants={fadeIn('right', 0.4)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              type="text"
              placeholder="Write your testimonial..."
              disabled={!isUserActive}
              className="p-3 w-[100%-100px] h-[40px] md:w-[320px] md:h-[56px] outline-none"
            />
            <motion.div
              variants={fadeIn('left', 0.4)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton
                containerStyles="w-[100px] h-[40px] md:w-[162px] md:h-[56px]"
                text={'Send'}
              />
            </motion.div>
          </form>
          {!isUserActive && (
            <motion.p
              variants={fadeIn('down', 0.2)}
              initial={'hidden'}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className="font-roboto text-center text-sm mobile:text-base text-white"
            >
              You need to be a member to leave a review.
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialForm;
