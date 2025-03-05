'use client';

import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import { ClassDetails } from '@/app/data/classes';

type ClassInfoProps = {
  about: ClassDetails;
};
const ClassInfo = ({ about }: ClassInfoProps) => {
  const { title, text, img } = about;
  return (
    <section className="w-full">
      <div className="w-full aspect-[1920/480] relative flex flex-col items-center justify-center">
        <Image
          src={img}
          alt={title}
          width={1920}
          height={480}
          className="absolute top-0 left-0 w-full aspect-[1920/480]"
        />
        <div className="relative container mx-auto">
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className="text-[32px] mobile:text-[36px] md:text-[48px] lg:text-[68px] xl:text-[96px] text-white"
          >
            <span className="hidden sm:inline">What is a </span>
            <span className=" text-accent">{title}</span>
            <span className="hidden sm:inline">?</span>
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="text-sm mobile:text-base text-center max-w-[850px] mx-auto"
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
};

export default ClassInfo;
