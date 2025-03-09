'use client';

import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import CustomButton from './CustomButton';

type ContentUnavailableProps = {
  message: string;
  onClick: () => void;
};

const ContentUnavailable = ({ message, onClick }: ContentUnavailableProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ amount: 0.05 }}
      >
        <Image
          src={'/assets/img/tired_athlete.png'}
          alt="tired_athlete"
          width={280}
          height={280}
        />
      </motion.div>

      <motion.p
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ amount: 0.05 }}
        className="text-accent text-xl font-semibold"
      >
        {message}
      </motion.p>
      <motion.div
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ amount: 0.05 }}
      >
        <CustomButton
          text={'reset'}
          containerStyles={'w-[146px] h-[40px] md:w-[162px] md:h-[56px]'}
          onClick={onClick}
        />
      </motion.div>
    </div>
  );
};

export default ContentUnavailable;
