import React from 'react';
import { ClassDetails } from '@/app/data/classes';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

type ClassEquipmentProps = {
  equipment: Omit<ClassDetails, 'img'>;
};
const ClassEquipment = ({ equipment }: ClassEquipmentProps) => {
  const { title, text } = equipment;
  return (
    <section className="w-full">
      <div className="container mx-auto grid gap-4 xl:gap-8">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="h2 text-center"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="text-sm mobile:text-base"
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
};

export default ClassEquipment;
