'use client';

import Image from 'next/image';
import React from 'react';

import SocialLink from '../../UI/SocialLink';
import { Trainer } from '@/app/data/trainers';
import Link from 'next/link';

type TrainerCardProps = Pick<
  Trainer,
  'photo' | 'fullName' | 'role' | 'description' | 'onlineProfile'
> & {
  href?: string;
};

const TrainerCard = ({
  photo,
  fullName,
  role,
  description,
  onlineProfile,
  href = `/trainers/${fullName}`,
}: TrainerCardProps) => {
  return (
    <div className="text-center">
      <Link href={href} className=" group">
        <div className="relative before:w-5 before:h-5 before:bg-accent before:absolute before:z-10 before:top-0 before:left-0 after:w-5 after:h-5 after:bg-accent after:absolute after:z-10 after:bottom-0 after:right-0 group-hover:after:-bottom-[5px] group-hover:after:-right-[5px] group-hover:before:-top-[5px] group-hover:before:-left-[5px] after:transition-all after:duration-300 before:transition-all before:duration-300">
          <div className="relative w-full aspect-[280/314] mx-auto mb-4 overflow-hidden z-20">
            <Image
              src={photo}
              alt={`trainer ${fullName}`}
              width={280}
              height={314}
              priority
              className="w-full aspect-[280/314] group-hover:scale-105 transition-all duration-300 object-cover"
            />
          </div>
        </div>
        <h4 className="h4 text-primary-300 mb-2 group-hover:text-accent transition-all duration-300">
          {fullName}
        </h4>
        <p className="font-roboto font-semibold text-primary-100/50 tracking-[2px] uppercase max-w-[300px] mx-auto mb-2">
          {role} coach
        </p>
        <p className="font-roboto text-sm mobile:text-base lg:text-sm xl:text-base max-w-[300px] mx-auto mb-4">
          {description}
        </p>
      </Link>
      <ul className="flex items-center justify-center gap-5">
        {onlineProfile.map((profile, index) => (
          <li key={index}>
            <SocialLink
              href={profile.href}
              Icon={profile.icon}
              containerStyles="w-[44px] h-[44px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainerCard;
