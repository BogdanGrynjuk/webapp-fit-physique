import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { fadeIn, scale, staggerFadeIn } from '@/app/lib/variants';

import { ClassDetails } from '@/app/data/classes';

type ClassBenefitsProps = {
  benefits: ClassDetails;
};

const ClassBenefits = ({ benefits }: ClassBenefitsProps) => {
  const { title, text, points, img } = benefits;

  return (
    <section className="w-full">
      <div className="container mx-auto grid gap-4 xl:gap-8 md:grid-cols-2">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="h2 text-center md:col-span-2 xl:col-start-2 xl:row-start-1"
        >
          {title}
        </motion.h2>

        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="text-sm mobile:text-base md:col-start-2 md:row-start-2 lg:col-start-1 lg:col-span-2 xl:col-start-2 xl:row-start-2 self-center xl:self-start"
        >
          {text}
        </motion.p>

        <motion.div
          variants={scale(0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="w-full aspect-[1280/850] md:col-start-1 md:row-start-2 lg:col-start-1 lg:row-start-3 xl:col-start-1 xl:row-span-3 self-center "
        >
          <Image
            src={img}
            alt={title}
            width={1280}
            height={850}
            className="object-cover"
          />
        </motion.div>

        {points && (
          <div className="flex flex-col gap-2 md:col-span-2 lg:col-start-2 lg:col-span-1 xl:col-start-2 xl:row-start-3 self-center xl:self-start">
            <motion.h5
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className="h5"
            >
              What will you get from the classes?
            </motion.h5>
            <motion.ul
              variants={staggerFadeIn(0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col gap-2 "
            >
              {points.map((point, index) => {
                const animationDelay = (index + 1) * 0.4;
                return (
                  <motion.li
                    variants={fadeIn('left', animationDelay)}
                    key={index}
                  >
                    <p className="text-sm mobile:text-base flex items-center gap-2 ">
                      <span className="w-2 h-2 bg-accent flex-shrink-0"></span>
                      {point}
                    </p>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClassBenefits;
