'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import Header from '@/app/components/Layout/Header';
import CustomButton from '@/app/components/UI/CustomButton';

const NotFound = () => {
  const navLinks = [
    { name: 'home', href: '/#classes' },
    { name: 'not found', href: '/#classes' },
  ];

  const router = useRouter();
  return (
    <>
      <Header links={navLinks} />
      <main className="mt-[100px] pt-8 pb-8 lg:pt-14 lg:pb-14">
        <div className="container mx-auto flex flex-col justify-center items-center gap-4">
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
            This class is unavailable.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ amount: 0.05 }}
          >
            <CustomButton
              containerStyles={'w-[146px] h-[40px] md:w-[162px] md:h-[56px]'}
              text={'try again'}
              onClick={() => {
                router.replace('/#classes');
              }}
            />
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
