'use client';

import React from 'react';

import TrainerCard from '@/app/components/TeamSection/TrainerCard';

import { trainers } from '@/app/data/trainers';

const Page = () => {
  return (
    <main>
      <div className="container mx-auto">
        <section>
          <h1>our trainers</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {trainers.map((trainer) => {
              return (
                <li key={trainer.id}>
                  <TrainerCard
                    id={trainer.id}
                    photo={trainer.photo}
                    fullName={trainer.fullName}
                    role={trainer.role}
                    description={trainer.description}
                    onlineProfile={trainer.onlineProfile}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Page;
