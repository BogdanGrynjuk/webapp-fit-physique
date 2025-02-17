'use client';

import { trainers } from '@/app/data/trainers';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const TrainerPage = () => {
  const params = useParams();

  if (!params.id) {
    return <h1>Invalid trainer ID</h1>;
  }

  const trainer = trainers.find((trainer) => trainer.id === params.id);

  if (!trainer) {
    return <h1>This trainer is unavailable.</h1>;
  }

  return (
    <main>
      <h1>{trainer.fullName}</h1>
      <Image
        src={trainer.photo}
        alt={trainer.fullName}
        width={628}
        height={560}
      />
      <p>{trainer.description}</p>
    </main>
  );
};

export default TrainerPage;
