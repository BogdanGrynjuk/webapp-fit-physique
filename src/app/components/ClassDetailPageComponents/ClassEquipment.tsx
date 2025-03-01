import React from 'react';
import { ClassDetails } from '@/app/data/classes';

type ClassEquipmentProps = {
  equipment: ClassDetails;
};
const ClassEquipment = ({ equipment }: ClassEquipmentProps) => {
  const { title, text } = equipment;
  return (
    <section>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
};

export default ClassEquipment;
