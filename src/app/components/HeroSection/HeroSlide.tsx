'use client';

import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import CustomButton from '../UI/CustomButton';

import { fadeIn } from '../../lib/variants';

const HeroSlide = ({
  title,
  subtitle,
  description,
  buttonText,
}: {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}) => {
  return (
    <div
      className={clsx(
        'h-full flex pt-[calc(100vh/5)] mobile:pt-0 md:items-center justify-center lg:justify-end',
      )}
    >
      <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
        <h1 className="h2 md:h1 flex flex-col gap-0 md:gap-2 lg:gap-4 text-center lg:text-left mb-2">
          <strong className="text-accent tracking-tighter">{title}</strong>
          <motion.span
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className=" text-white tracking-normal text-2xl md:text-4xl lg:text-7xl font-light "
          >
            {subtitle}
          </motion.span>
        </h1>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="font-roboto text-sm mobile:text-base tracking-wide text-white text-center lg:text-left mb-4"
        >
          {description}
        </motion.p>
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            text={buttonText}
            containerStyles={'w-[146px] h-[40px] md:w-[162px] md:h-[56px]'}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSlide;
