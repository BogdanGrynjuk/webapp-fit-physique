'use client';

import Image from 'next/image';
import React from 'react';

import SocialLink from '../UI/SocialLink';
import { Trainer } from '@/app/data/trainers';
import Link from 'next/link';

const TrainerCard = ({
  id,
  photo,
  fullName,
  role,
  description,
  onlineProfile,
}: Trainer) => {
  return (
    <div className="text-center">
      <Link href={`/trainers/${id}`}>
        <div className="relative max-w-[280px] aspect-[280/314] mx-auto mb-4">
          <Image
            src={photo}
            alt={`trainer ${fullName}`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <h4 className="h4 text-accent mb-2">{fullName}</h4>
        <p className="font-roboto font-semibold text-primary-100/50 tracking-[2px] uppercase max-w-[300px] mx-auto mb-2">
          {role}
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
