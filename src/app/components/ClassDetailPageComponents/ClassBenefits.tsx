import React from 'react';
import { ClassDetails } from '@/app/data/classes';
import Image from 'next/image';

type ClassBenefitsProps = {
  benefits: ClassDetails;
};

const ClassBenefits = ({ benefits }: ClassBenefitsProps) => {
  const { title, text, points, img } = benefits;

  return (
    <section className="w-full">
      <div className="container mx-auto grid gap-4 xl:gap-8 sm:grid-cols-2">
        <h2 className="h2 text-center sm:col-span-2 xl:col-start-2 xl:row-start-1">
          {title}
        </h2>

        <p className="text-sm mobile:text-base sm:col-start-2 sm:row-start-2 lg:col-start-1 lg:col-span-2 xl:col-start-2 xl:row-start-2 self-center xl:self-start">
          {text}
        </p>

        <div className="w-full aspect-[1280/850] sm:col-start-1 sm:row-start-2 lg:col-start-1 lg:row-start-3 xl:col-start-1 xl:row-span-3 self-center ">
          <Image
            src={img}
            alt={title}
            width={1280}
            height={850}
            className="object-cover"
          />
        </div>

        {points && (
          <div className="flex flex-col gap-2 sm:col-span-2 lg:col-start-2 lg:col-span-1 xl:col-start-2 xl:row-start-3 self-center xl:self-start">
            <h5 className="h5">What will you get from the classes?</h5>
            <ul className="flex flex-col gap-2 ">
              {points.map((point, index) => (
                <li key={index}>
                  <p className="text-sm mobile:text-base flex items-center gap-2 ">
                    <span className="w-2 h-2 bg-accent flex-shrink-0"></span>
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClassBenefits;
