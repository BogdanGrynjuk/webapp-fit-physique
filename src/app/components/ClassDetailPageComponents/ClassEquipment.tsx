import React from 'react';
import { ClassDetails } from '@/app/data/classes';

type ClassEquipmentProps = {
  equipment: Omit<ClassDetails, 'img'>;
};
const ClassEquipment = ({ equipment }: ClassEquipmentProps) => {
  const { title, text } = equipment;
  return (
    <section className="w-full">
      <div className="container mx-auto grid gap-4 xl:gap-8">
        <h2 className="h2 text-center">{title}</h2>
        <p className="text-sm mobile:text-base">{text}</p>
      </div>
    </section>
  );
};

export default ClassEquipment;
