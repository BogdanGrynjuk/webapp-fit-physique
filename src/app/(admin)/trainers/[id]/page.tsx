'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';

import Header from '../components/Header';

import { trainers } from '@/app/data/trainers';
import { expandWidth, fadeIn, rotateY } from '@/app/lib/variants';

import SocialLink from '@/app/components/UI/SocialLink';
import { FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { PiCertificate } from 'react-icons/pi';
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div className="ml-auto relative overflow-hidden max-w-[628px] aspect-[560/628] p-1 sm:p-2 md:col-start-2 md:row-start-1">
                  <motion.div
                    variants={expandWidth}
                    initial={'hidden'}
                    animate={'show'}
                    className="absolute aspect-square bg-accent top-0 left-0"
                  />

                  <motion.div
                    variants={expandWidth}
                    initial={'hidden'}
                    animate={'show'}
                    className="absolute aspect-square bg-accent bottom-0 right-0"
                  />

                  <motion.div
                    variants={rotateY}
                    initial={'hidden'}
                    animate={'show'}
                    className="relative z-20"
                  >
                    <Image
                      src={trainer.photo}
                      alt={trainer.fullName}
                      width={628}
                      height={560}
                    />
                    <p className="absolute z-10 top-2 right-2 px-2 flex flex-col items-center justify-center border border-accent text-white font-oswald font-medium bg-primary-300/50">
                      <span className="text-base">Rating:</span>
                      <span className="text-2xl">{trainer.rating}</span>
                    </p>
                  </motion.div>
                </motion.div>

                <div className="md:col-start-1 md:row-start-1 flex flex-col gap-4">
                  <h2 className="text-[24px] mobile:text-[32px] font-semibold text-primary-100/50 tracking-[2px] uppercase leading-none">
                    {trainer.role}
                  </h2>
                  <p className="text-sm mobile:text-base">
                    {trainer.description}
                  </p>
                  <table className="w-full max-w-[500px] text-sm mobile:text-base">
                    <tbody>
                      <tr className="grid grid-cols-2 border-t border-primary-100/50 h-[64px]">
                        <th className="p-3 flex items-center">Age</th>
                        <td className="p-3 flex items-center">{trainer.age}</td>
                      </tr>
                      <tr className="grid grid-cols-2 border-t border-primary-100/50 h-[64px]">
                        <th className="p-3 flex items-center">Experience</th>
                        <td className="p-3 flex items-center">
                          {trainer.experience}
                        </td>
                      </tr>
                      <tr className="grid grid-cols-2 border-t border-primary-100/50 h-[64px]">
                        <th className="p-3 flex items-center">Specialty</th>
                        <td className="p-3 flex items-center">
                          {trainer.specialty}
                        </td>
                      </tr>
                      <tr className="grid grid-cols-2 border-t border-b border-primary-100/50 h-[64px]">
                        <th className="p-3 flex items-center">Socials</th>
                        <td className="p-3 pl-0 flex items-center">
                          <ul className="flex items-center justify-center gap-4">
                            <li>
                              <SocialLink
                                href={'http://facebook.com'}
                                Icon={FaFacebookF}
                                containerStyles="w-[40px] h-[40px]"
                              />
                            </li>
                            <li>
                              <SocialLink
                                href={'http://twitter.com'}
                                Icon={FaXTwitter}
                                containerStyles="w-[40px] h-[40px]"
                              />
                            </li>
                            <li>
                              <SocialLink
                                href={'http://youtube.com'}
                                Icon={FaYoutube}
                                containerStyles="w-[40px] h-[40px]"
                              />
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="flex flex-col gap-4">
                    <h2 className="text-[20px] mobile:text-[24px] font-oswald font-semibold tracking-[2px] uppercase flex items-center gap-1">
                      <PiCertificate className="text-4xl" />
                      Certificates:
                    </h2>
                    <ul className="flex flex-col gap-2">
                      {trainer.certificates?.map((certificate, index) => (
                        <li key={index}>
                          <span>{certificate}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="flex items-center text-accent">
                    <sup className="text-4xl">&#36;</sup>
                    <strong className="text-6xl">
                      {trainer.pricePerSession}
                    </strong>
                    <em className="self-end text-2xl">/session</em>
                  </p>
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
