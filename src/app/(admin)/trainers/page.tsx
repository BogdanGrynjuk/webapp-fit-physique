'use client';

import React, { useState } from 'react';

import TrainerCard from '@/app/components/TeamSection/TrainerCard';

import { trainers } from '@/app/data/trainers';
import SearchInput from '@/app/components/SearchInput/SearchInput';

const TrainersPage = () => {
  const [filteredTrainers, setFilteredTrainers] = useState(trainers);

  const handleSearch = (query: string) => {
    setFilteredTrainers(
      trainers.filter(({ fullName }) => fullName.toLowerCase().includes(query)),
    );
  };

  return (
    <section className="pt-8 pb-8 lg:pt-14 lg:pb-14">
      <div className="container mx-auto flex flex-col gap-10 items-center">
        <h1 className="h2 text-center">Our Trainers</h1>
        <p className="text-center text-sm mobile:text-base max-w-[700px] mx-auto">
          Our team of trainers consists of professionals who will help you
          achieve your fitness goals. We believe that everyone deserves a
          personalized approach, which is why our trainers not only create
          effective workout programs but also support you at every stage of your
          journey to a healthy lifestyle. Regardless of your fitness level, we
          will find the perfect solution for you!
        </p>

        <SearchInput
          label={'trainer name '}
          placeholder="find trainer by name"
          onSearch={handleSearch}
          name={'trainer-name'}
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTrainers.map((trainer) => {
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
      </div>
    </section>
  );
};

export default TrainersPage;
