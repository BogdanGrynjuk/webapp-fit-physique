import React from 'react';
import { ClassDetails } from '@/app/data/classes';

type ClassInfoProps = {
  about: ClassDetails;
};
const ClassInfo = ({ about }: ClassInfoProps) => {
  const { title, text } = about;
  return (
    <section>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
};

export default ClassInfo;
