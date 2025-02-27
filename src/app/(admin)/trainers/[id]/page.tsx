'use client';

import React, { useEffect } from 'react';

import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';

import { fadeIn } from '@/app/lib/variants';

import { trainers } from '@/app/data/trainers';

import Header from '@/app/components/TrainersPageComponents/Header';
import TrainerImg from '@/app/components/DetailedTrainerPageComponents/TrainerImg';
import TrainerInfo from '@/app/components/DetailedTrainerPageComponents/TrainerInfo';
import TrainerDetails from '@/app/components/DetailedTrainerPageComponents/TrainerDetails';
import TrainerCertificates from '@/app/components/DetailedTrainerPageComponents/TrainerCertificates';
import TrainerPricing from '@/app/components/DetailedTrainerPageComponents/TrainerPricing';
import CustomButton from '@/app/components/UI/CustomButton';

const DetailedTrainerPage = () => {
  const params = useParams();
  const trainer = trainers.find((trainer) => trainer.id === params.id);

  useEffect(() => {
    if (!params.id || !trainer) {
      notFound();
    }
  }, [params.id, trainer]);

  const navLinks = [
    { name: 'home', href: '/#team' },
    { name: 'trainers', href: '/trainers' },
  ];

  if (trainer) {
    navLinks.push({
      name: `${trainer.fullName}`,
      href: `/trainers/${trainer.id}`,
    });
  }

  return (
    <>
      <Header navLinks={navLinks} />
      <main className="mt-[100px] pt-8 pb-8 lg:pt-14 lg:pb-14">
        <div className="container mx-auto flex flex-col gap-8">
          {trainer && (
            <>
              <motion.h1
                variants={fadeIn('up', 0.2)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="h1 text-center text-accent"
              >
                {trainer.fullName}
              </motion.h1>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-y-4 gap-x-8">
                <div className="md:col-start-1 md:row-start-1 xl:col-start-1 xl:row-start-1">
                  <TrainerInfo
                    role={trainer.role}
                    description={trainer.description}
                  />
                </div>

                <div className="md:col-start-2 md:row-start-1 md:row-span-2 xl:col-start-2 xl:row-span-4">
                  <TrainerImg
                    photo={trainer.photo}
                    fullName={trainer.fullName}
                    rating={trainer.rating}
                  />
                </div>

                <div className="md:col-start-1 md:row-start-2 xl:col-start-1 xl:row-start-2">
                  <TrainerDetails
                    age={trainer.age}
                    experience={trainer.experience}
                    specialty={trainer.specialty}
                    onlineProfile={trainer.onlineProfile}
                  />
                </div>

                <div className="md:col-start-1 md:row-start-3 xl:col-start-1 xl:row-start-3">
                  <TrainerCertificates certificates={trainer.certificates} />
                </div>

                <div className="md:col-start-2 md:row-start-3 xl:col-start-1 xl:row-start-4">
                  <TrainerPricing pricePerSession={trainer.pricePerSession} />
                </div>
              </div>

              <CustomButton
                text={'Reserve a Session'}
                containerStyles="w-[200px] h-[40px] md:w-[220px] md:h-[56px]"
              />
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default DetailedTrainerPage;
