'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';

import Header from '../components/Header';

import { trainers } from '@/app/data/trainers';
const TrainerPage = () => {
  const params = useParams();
  const trainer = trainers.find((trainer) => trainer.id === params.id);

  useEffect(() => {
    if (!params.id || !trainer) {
      notFound();
    }
  }, [params.id, trainer]);

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
      <main className="mt-[100px] pt-8 pb-8 lg:pt-14 lg:pb-14">
        <div className="container mx-auto">
          {trainer && (
            <>
              <h1 className="h1 text-center">{trainer.fullName}</h1>
              <Image
                src={trainer.photo}
                alt={trainer.fullName}
                width={628}
                height={560}
              />
              <p>description: {trainer.description}</p>
              <p>role: {trainer.role}</p>
              <p>experience: {trainer.experience}</p>
              <p>certificates: {trainer.certificates?.join(', ')}</p>
              <p>achievements: {trainer.achievements?.join(', ')}</p>
              <p>rating: {trainer.rating}</p>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default TrainerPage;
