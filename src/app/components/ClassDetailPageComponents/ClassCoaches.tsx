import React from 'react';
import TrainerCard from '../HomePageComponents/TeamSection/TrainerCard';

import { trainers } from '@/app/data/trainers';

type ClassCoachesProps = {
  classTitle: string;
};
const ClassCoaches = ({ classTitle }: ClassCoachesProps) => {
  const filteredTrainers = trainers.filter(
    (trainer) => trainer.role.toLocaleLowerCase() === classTitle.toLowerCase(),
  );

  return (
    <section>
      <h2>Trainers</h2>
      <ul>
        {filteredTrainers.map((trainer) => (
          <li key={trainer.id}>
            <TrainerCard
              id={trainer.id}
              role={trainer.role}
              fullName={trainer.fullName}
              photo={trainer.photo}
              description={trainer.description}
              onlineProfile={trainer.onlineProfile}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ClassCoaches;
