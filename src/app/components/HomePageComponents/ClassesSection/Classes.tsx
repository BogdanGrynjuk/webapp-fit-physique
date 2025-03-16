'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import CustomButton from '@/app/components/UI/CustomButton';

import { classList } from '@/app/data/classes';

const Classes = () => {
  const router = useRouter();

  return (
    <section id="classes" className="scroll-mt-[100px]">
      <h2 className="visually-hidden">Classes</h2>
      <motion.ul
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.05 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {classList.map((item, index) => {
          return (
            <li
              key={index}
              className="relative w-full aspect-[960/485] flex flex-col items-center justify-center"
            >
              <Image
                src={item.img}
                alt={`image ${item.name}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/30 w-full h-full z-10" />
              <div className="z-20 flex flex-col items-center justify-center gap-2 mobile:gap-4 lg:gap-8">
                <motion.h3
                  variants={fadeIn('up', 0.4)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className="relative h3 text-white before:w-5 before:h-5 before:bg-accent before:absolute before:-z-10 before:top-[5px] before:-left-[7px]"
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn('up', 0.6)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className="font-roboto text-sm mobile:text-base text-center text-white max-w-[300px] mobile:max-w-[400px]"
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeIn('up', 0.8)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <CustomButton
                    text={'Read more'}
                    containerStyles={
                      'w-[146px] h-[40px] md:w-[162px] md:h-[56px]'
                    }
                    onClick={() => router.push(`/${item.slug}`)}
                  />
                </motion.div>
              </div>
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default Classes;
