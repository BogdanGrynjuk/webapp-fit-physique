'use client';

import React from 'react';
import { Trainer } from '@/app/data/trainers';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { expandWidth, rotateY } from '@/app/lib/variants';
import CountUp from 'react-countup';

type TrainerImgProps = Pick<Trainer, 'photo' | 'fullName' | 'rating'>;

const TrainerImg = ({ photo, fullName, rating }: TrainerImgProps) => {
  return (
    <motion.div className="relative overflow-hidden w-full max-w-[500px] aspect-[560/628] p-1 sm:p-2">
      <motion.div
        variants={expandWidth}
        initial={'hidden'}
        animate={'show'}
        className="absolute aspect-square bg-accent top-0 left-0"
      />

      <motion.div
        variants={expandWidth}
        initial={'hidden'}
        animate={'show'}
        className="absolute aspect-square bg-accent bottom-0 right-0"
      />

      <motion.div
        variants={rotateY}
        initial={'hidden'}
        animate={'show'}
        className="relative z-20"
      >
        <Image
          src={photo}
          alt={`Trainer ${fullName}`}
          width={628}
          height={560}
        />
        <p className="absolute z-10 top-2 right-2 px-2 flex flex-col items-center justify-center border border-accent text-white font-oswald font-medium bg-primary-300/50">
          <span className="text-base">Rating:</span>

          <span className="text-2xl">
            <CountUp
              start={0}
              end={rating}
              decimals={1}
              decimal="."
              duration={3}
            />
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TrainerImg;
