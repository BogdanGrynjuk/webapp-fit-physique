import React from 'react';
import { ClassDetails } from '@/app/data/classes';

type ClassBenefitsProps = {
  benefits: ClassDetails;
};

const ClassBenefits = ({ benefits }: ClassBenefitsProps) => {
  const { title, text, points } = benefits;

  return (
    <section>
      <h2>{title}</h2>
      <p>{text}</p>

      {points && (
        <ul>
          {points.map((point, index) => (
            <li key={index}>
              <p>{point}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ClassBenefits;
