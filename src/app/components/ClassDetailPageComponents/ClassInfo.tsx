import React from 'react';
import { ClassDetails } from '@/app/data/classes';
import Image from 'next/image';

type ClassInfoProps = {
  about: ClassDetails;
};
const ClassInfo = ({ about }: ClassInfoProps) => {
  const { title, text, img } = about;
  return (
    <section className="w-full">
      <div className="w-full aspect-[1920/480] relative flex flex-col items-center justify-center">
        <Image
          src={img}
          alt={title}
          width={1920}
          height={480}
          className="absolute top-0 left-0 w-full aspect-[1920/480]"
        />
        <div className="relative container mx-auto">
          <h1 className="text-[32px] mobile:text-[36px] md:text-[48px] lg:text-[68px] xl:text-[96px] text-white">
            <span className="hidden sm:inline">What is a </span>
            <span className=" text-accent">{title}</span>
            <span className="hidden sm:inline">?</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <p className="text-sm mobile:text-base text-center max-w-[850px] mx-auto">
          {text}
        </p>
      </div>
    </section>
  );
};

export default ClassInfo;
