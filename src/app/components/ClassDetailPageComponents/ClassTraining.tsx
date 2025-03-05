import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { fadeIn, scale, staggerFadeIn } from '@/app/lib/variants';

import { ClassDetails } from '@/app/data/classes';

type ClassTrainingProps = {
  trainingFormats: ClassDetails;
};
const ClassTraining = ({ trainingFormats }: ClassTrainingProps) => {
  const { title, text, formats, img } = trainingFormats;
  return (
    <section className="w-full">
      <div className="container mx-auto grid gap-4 xl:gap-8 md:grid-cols-2">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="h2 text-center md:col-span-2 xl:col-start-1 xl:row-start-1 xl:col-span-1"
        >
          {title}
        </motion.h2>

        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="text-sm mobile:text-base lg:col-start-1 lg:col-span-2 xl:col-start-1 xl:row-start-2 xl:col-span-1 self-center xl:self-start"
        >
          {text}
        </motion.p>

        <motion.div
          variants={scale(0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="w-full bg-accent aspect-[1280/850] lg:col-start-2 lg:row-start-3 xl:col-start-2 xl:row-span-3 self-center"
        >
          <Image
            src={img}
            alt={title}
            width={1280}
            height={850}
            className="object-cover"
          />
        </motion.div>

        {formats && (
          <div className="flex flex-col gap-2 md:col-span-2 lg:col-start-1 lg:col-span-1 xl:col-start-1 xl:row-start-3 self-center xl:self-start">
            <motion.ul
              variants={staggerFadeIn(0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col gap-4 "
            >
              {formats.map((item, index) => {
                const animationDelay = (index + 1) * 0.4;
                return (
                  <motion.li
                    variants={fadeIn('left', animationDelay)}
                    key={index}
                  >
                    <div className="text-sm mobile:text-base flex flex-col gap-2 ">
                      <h5 className="ml-2 relative z-0 h5 before:w-4 before:h-4 before:bg-accent before:absolute before:-z-10 before:-top-[4px] before:-left-[6px]">
                        {item.type}
                      </h5>

                      <p>{item.description}</p>
                    </div>
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

export default ClassTraining;
