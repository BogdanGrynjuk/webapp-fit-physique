import React from 'react';
import TrainerCard from '../HomePageComponents/TeamSection/TrainerCard';

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
        <h2 className="h2 text-center">Trainers</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
          {filteredTrainers.map((trainer) => (
            <li key={trainer.id}>
              <TrainerCard
                role={trainer.role}
                fullName={trainer.fullName}
                photo={trainer.photo}
                description={trainer.description}
                onlineProfile={trainer.onlineProfile}
                href={`/${slug}/${trainer.fullName}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClassCoaches;
