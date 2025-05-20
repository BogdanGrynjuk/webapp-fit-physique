'use client';

import React, { useEffect } from 'react';

import { notFound, useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import { fadeIn } from '@/app/lib/variants';

import { trainers } from '@/app/data/trainers';

import Header from '@/app/components/Layout/Header';
import TrainerImg from '@/app/components/DetailedTrainerPageComponents/TrainerImg';
import TrainerInfo from '@/app/components/DetailedTrainerPageComponents/TrainerInfo';
import TrainerDetails from '@/app/components/DetailedTrainerPageComponents/TrainerDetails';
import TrainerCertificates from '@/app/components/DetailedTrainerPageComponents/TrainerCertificates';
import TrainerPricing from '@/app/components/DetailedTrainerPageComponents/TrainerPricing';
import CustomButton from '@/app/components/UI/CustomButton';

const DetailedTrainerPage = () => {
  const params = useParams();
  const router = useRouter();
  const trainerName = decodeURIComponent(
    Array.isArray(params['trainer-name'])
      ? params['trainer-name'][0]
      : (params['trainer-name'] ?? ''),
  );
  const trainer = trainers.find((trainer) => trainer.fullName === trainerName);

  useEffect(() => {
    if (!params['trainer-name'] || !trainer) {
      notFound();
    }
  }, [params, trainer]);

  const navLinks = [
    { name: 'home', href: '/#team' },
    { name: 'trainers', href: '/trainers' },
  ];

  if (trainer) {
    navLinks.push({
      name: `${trainer.fullName}`,
      href: `/trainers/${trainer.fullName}`,
    });
  }

  return (
    <>
      <Header links={navLinks} />
      <main className="mt-[100px] pt-8 pb-8 lg:pt-14 lg:pb-14">
        <div className="container mx-auto flex flex-col gap-8 items-center">
          {trainer && (
            <>
              <motion.h1
                variants={fadeIn('up', 0.2)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.2 }}
                className="h1 text-center text-accent"
              >
                {trainer.fullName}
              </motion.h1>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-y-4 gap-x-8">
                <motion.div
                  variants={fadeIn('right', 0.4)}
                  initial={'hidden'}
                  whileInView={'show'}
                  viewport={{ once: true, amount: 0.2 }}
                  className="md:col-start-1 md:row-start-1 xl:col-start-1 xl:row-start-1"
                >
                  <TrainerInfo
                    role={trainer.role}
                    description={trainer.description}
                  />
                </motion.div>

                <div className="md:col-start-2 md:row-start-1 md:row-span-2 mx-auto place-content-center">
                  <TrainerImg
                    photo={trainer.photo}
                    fullName={trainer.fullName}
                    rating={trainer.rating}
                  />
                </div>

                <motion.div
                  variants={fadeIn('right', 0.4)}
                  initial={'hidden'}
                  whileInView={'show'}
                  viewport={{ once: true, amount: 0.2 }}
                  className="md:col-start-1 md:row-start-2"
                >
                  <TrainerDetails
                    age={trainer.age}
                    experience={trainer.experience}
                    specialty={trainer.specialty}
                    onlineProfile={trainer.onlineProfile}
                  />
                </motion.div>

                <motion.div
                  variants={fadeIn('up', 0.2)}
                  initial={'hidden'}
                  whileInView={'show'}
                  viewport={{ once: true, amount: 0.2 }}
                  className="md:col-start-1 md:row-start-3"
                >
                  <TrainerCertificates certificates={trainer.certificates} />
                </motion.div>

                <motion.div
                  variants={fadeIn('up', 0.2)}
                  initial={'hidden'}
                  whileInView={'show'}
                  viewport={{ once: true, amount: 0.2 }}
                  className="md:col-start-2 md:row-start-3"
                >
                  <TrainerPricing pricePerSession={trainer.pricePerSession} />
                </motion.div>
              </div>

              <motion.div
                variants={fadeIn('up', 0.2)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.2 }}
                className="md:col-start-2 md:row-start-3"
              >
                <CustomButton
                  text={'Reserve a Session'}
                  containerStyles="w-[200px] h-[40px] md:w-[220px] md:h-[56px]"
                  onClick={() => router.push(`/authentication`)}
                />
              </motion.div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default DetailedTrainerPage;
