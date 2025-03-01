import React from 'react';
import { ClassDetails } from '@/app/data/classes';

type ClassTrainingProps = {
  trainingFormats: ClassDetails;
};
const ClassTraining = ({ trainingFormats }: ClassTrainingProps) => {
  const { title, text, formats } = trainingFormats;
  return (
    <section className="w-full">
      <h2>{title}</h2>
      <p>{text}</p>

      {formats?.map((format, index) => (
        <div key={index}>
          <h4>{format.type}</h4>
          <p>{format.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ClassTraining;
