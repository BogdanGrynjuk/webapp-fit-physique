import { Trainer } from '@/app/data/trainers';
import React from 'react';

type TrainerPricingProps = Pick<Trainer, 'pricePerSession'>;
const TrainerPricing = ({ pricePerSession }: TrainerPricingProps) => {
  return (
    <p className="flex items-center text-accent">
      <sup className="text-4xl">&#36;</sup>
      <strong className="text-6xl">{pricePerSession}</strong>
      <em className="self-end text-2xl">/session</em>
    </p>
  );
};

export default TrainerPricing;
