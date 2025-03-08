import React from 'react';
import TrainerCard from '../HomePageComponents/TeamSection/TrainerCard';

import { motion } from 'framer-motion';
import { fadeIn, scale, staggerFadeIn } from '@/app/lib/variants';

import { trainers } from '@/app/data/trainers';

type ClassCoachesProps = {
  classTitle: string;
  slug: string;
};
const ClassCoaches = ({ classTitle, slug }: ClassCoachesProps) => {
  const filteredTrainers = trainers.filter(
    (trainer) => trainer.role.toLocaleLowerCase() === classTitle.toLowerCase(),
  );

  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col gap-4 xl:gap-8">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="h2 text-center"
        >
          Trainers
        </motion.h2>
        <motion.ul
          variants={staggerFadeIn(0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto"
        >
          {filteredTrainers.map((trainer, index) => {
            const animationDelay = (index + 1) * 0.4;
            return (
              <motion.li variants={scale(animationDelay)} key={trainer.id}>
                <TrainerCard
                  role={trainer.role}
                  fullName={trainer.fullName}
                  photo={trainer.photo}
                  description={trainer.description}
                  onlineProfile={trainer.onlineProfile}
                  href={`/${slug}/${trainer.fullName}`}
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default ClassCoaches;
