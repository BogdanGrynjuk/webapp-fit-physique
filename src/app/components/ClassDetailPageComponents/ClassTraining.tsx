import React from 'react';
import { ClassDetails } from '@/app/data/classes';
import Image from 'next/image';

type ClassTrainingProps = {
  trainingFormats: ClassDetails;
};
const ClassTraining = ({ trainingFormats }: ClassTrainingProps) => {
  const { title, text, formats, img } = trainingFormats;
  return (
    <section className="w-full">
      <div className="container mx-auto grid gap-4 xl:gap-8 sm:grid-cols-2">
        <h2 className="h2 text-center sm:col-span-2 xl:col-start-1 xl:row-start-1 xl:col-span-1">
          {title}
        </h2>

        <p className="text-sm mobile:text-base lg:col-start-1 lg:col-span-2 xl:col-start-1 xl:row-start-2 xl:col-span-1 self-center xl:self-start">
          {text}
        </p>

        <div className="w-full bg-accent aspect-[1280/850] lg:col-start-2 lg:row-start-3 xl:col-start-2 xl:row-span-3 self-center">
          <Image
            src={img}
            alt={title}
            width={1280}
            height={850}
            className="object-cover"
          />
        </div>

        {formats && (
          <div className="flex flex-col gap-2 sm:col-span-2 lg:col-start-1 lg:col-span-1 xl:col-start-1 xl:row-start-3 self-center xl:self-start">
            <ul className="flex flex-col gap-4 ">
              {formats.map((item, index) => (
                <li key={index}>
                  <div className="text-sm mobile:text-base flex flex-col gap-2 ">
                    <h5 className="ml-2 relative z-0 h5 before:w-4 before:h-4 before:bg-accent before:absolute before:-z-10 before:-top-[4px] before:-left-[6px]">
                      {item.type}
                    </h5>

                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClassTraining;
