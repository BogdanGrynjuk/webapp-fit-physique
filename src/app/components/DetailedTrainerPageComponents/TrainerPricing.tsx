import React from 'react';

import { Trainer } from '@/app/data/trainers';

import { IoMdPricetags } from 'react-icons/io';

type TrainerPricingProps = Pick<Trainer, 'pricePerSession'>;
const TrainerPricing = ({ pricePerSession }: TrainerPricingProps) => {
  return (
    <section className="h-full min-h-[186px] flex flex-col items-center gap-5 p-5 border border-gray-300 rounded-lg bg-white">
      <h3 className="text-[20px] mobile:text-[24px] font-oswald font-semibold tracking-[2px] uppercase flex items-center gap-1">
        <IoMdPricetags className="text-4xl" />
        Price
      </h3>
      <div className="flex-grow flex flex-col items-center justify-center">
        <p className="flex items-center text-accent">
          <sup className="text-4xl">&#36;</sup>
          <strong className="text-6xl">{pricePerSession}</strong>
          <em className="self-end text-2xl">/session</em>
        </p>
      </div>
    </section>
  );
};

export default TrainerPricing;
