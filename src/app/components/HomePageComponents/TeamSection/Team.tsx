'use client';

import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';

import TrainerCard from './TrainerCard';
import CustomButton from '../../UI/CustomButton';
import { Trainer, trainers } from '@/app/data/trainers';
import { useRouter } from 'next/navigation';

const getUniqueRandomTrainers = (
  trainers: Trainer[],
  count: number = 4,
): Trainer[] => {
  const uniqueRoles: { [key: string]: Trainer } = {};

  const shuffled = [...trainers].sort(() => Math.random() - 0.5);

  for (const trainer of shuffled) {
    if (!uniqueRoles[trainer.role]) {
      uniqueRoles[trainer.role] = trainer;
    }
    if (Object.keys(uniqueRoles).length === count) break;
  }

  return Object.values(uniqueRoles);
};
const Team = () => {
  const router = useRouter();

  const [randomTrainers, setRandomTrainers] = useState<typeof trainers>([]);

  useEffect(() => {
    setRandomTrainers(getUniqueRandomTrainers(trainers, 4));
  }, []);

  return (
    <section className="pt-8 pb-8 lg:pt-14 lg:pb-14" id="team">
      <div className="container mx-auto flex flex-col gap-10 items-center">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center"
        >
          Our Trainers
        </motion.h2>
        <motion.ul
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.01 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {randomTrainers.map((trainer, index) => (
            <li key={index}>
              <TrainerCard
                id={trainer.id}
                photo={trainer.photo}
                fullName={trainer.fullName}
                role={trainer.role}
                description={trainer.description}
                onlineProfile={trainer.onlineProfile}
              />
            </li>
          ))}
        </motion.ul>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
        >
          <CustomButton
            containerStyles="w-[200px] h-[40px] md:w-[220px] md:h-[56px]"
            text={'View All Trainers'}
            onClick={() => router.push('/trainers')}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
