import React from 'react';

import { Trainer } from '@/app/data/trainers';
import TrainerCard from '../HomePageComponents/TeamSection/TrainerCard';

type TrainersGridProps = {
  trainers: Pick<
    Trainer,
    'id' | 'photo' | 'fullName' | 'role' | 'description' | 'onlineProfile'
  >[];
};
const TrainersGrid = ({ trainers }: TrainersGridProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {trainers.map(
        ({ id, photo, fullName, role, description, onlineProfile }) => {
          return (
            <li key={id}>
              <TrainerCard
                photo={photo}
                fullName={fullName}
                role={role}
                description={description}
                onlineProfile={onlineProfile}
              />
            </li>
          );
        },
      )}
    </ul>
  );
};

export default TrainersGrid;
