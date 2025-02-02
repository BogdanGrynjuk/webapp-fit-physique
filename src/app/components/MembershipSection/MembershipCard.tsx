import React from 'react';
import { IconType } from 'react-icons';

import CustomButton from '../UI/CustomButton';

type Benefit = {
  Icon: IconType;
  text: string;
};

type MembershipCardProps = {
  title: string;
  price: number;
  benefits: Benefit[];
};

const MembershipCard = ({ title, price, benefits }: MembershipCardProps) => {
  return (
    <div className="px-4 py-7">
      <div className="border border-accent bg-primary-300/60 hover:bg-primary-300/90 hover:scale-105 transition-all duration-300 mx-auto max-w-[288px] md:max-w-sm xl:max-w-none">
        <h4 className="h4 px-6 py-4 lg:px-4 xl:px-14 xl:py-5 border-b border-accent">
          {title}
        </h4>
        <div className="flex flex-col items-center gap-8 px-6 py-4 lg:px-4 xl:px-14 xl:py-5">
          <ul className="flex flex-col gap-3 self-start">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-sm mobile:text-base md:text-lg capitalize"
              >
                <span className="text-accent text-xl">
                  <benefit.Icon />
                </span>
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>
          <p className="flex items-center text-accent">
            <sup className="text-4xl">&#36;</sup>
            <strong className="text-6xl">{price}</strong>
            <em className="self-end text-2xl">/month</em>
          </p>
          <div>
            <CustomButton
              text="buy now"
              containerStyles="w-[146px] h-[40px] md:w-[162px] md:h-[56px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
