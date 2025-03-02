import { Trainer } from '@/app/data/trainers';
import React from 'react';

type TrainerInfoProps = Pick<Trainer, 'role' | 'description'>;
const TrainerInfo = ({ role, description }: TrainerInfoProps) => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-[24px] mobile:text-[32px] font-semibold text-primary-100/50 tracking-[2px] uppercase leading-none">
        {role} coach
      </h2>
      <p className="text-sm mobile:text-base">{description}</p>
    </section>
  );
};

export default TrainerInfo;
