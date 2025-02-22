'use client';

import { trainers } from '@/app/data/trainers';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import Header from '../components/Header';

const TrainerPage = () => {
  const params = useParams();

  if (!params.id) {
    return <h1>Invalid trainer ID</h1>;
  }

  const trainer = trainers.find((trainer) => trainer.id === params.id);

  let navLinks;
  if (trainer) {
    navLinks = [
      { name: 'home', href: '/#team' },
      { name: 'trainers', href: '/trainers' },
      { name: `${trainer.fullName}`, href: `/trainers/${trainer.id}` },
    ];
  } else {
    navLinks = [
      { name: 'home', href: '/#team' },
      { name: 'trainers', href: '/trainers' },
    ];
  }

  return (
    <>
      <Header navLinks={navLinks} />
      <main>
        <section className="mt-[100px] ">
          <div className="container mx-auto pt-8 pb-8 lg:pt-14 lg:pb-14">
            {!trainer ? (
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={'/assets/img/tired_athlete.png'}
                  alt="tired_athlete"
                  width={280}
                  height={280}
                />
                <p className="text-accent text-xl font-semibold">
                  This trainer is unavailable.
                </p>
              </div>
            ) : (
              <>
                <h1>{trainer.fullName}</h1>
                <Image
                  src={trainer.photo}
                  alt={trainer.fullName}
                  width={628}
                  height={560}
                />
                <p>{trainer.description}</p>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default TrainerPage;
