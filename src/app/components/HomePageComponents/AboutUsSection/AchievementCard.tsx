'use client';

import React, { ReactNode, useRef } from 'react';
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';

const AchievementCard = ({
  icon,
  title,
  value,
  animationDelay,
}: {
  icon: ReactNode;
  title: string;
  value: number;
  animationDelay: number;
}) => {
  const refCounter = useRef(null);
  const isInView = useInView(refCounter);

  return (
    <div className="flex flex-col gap-4 items-center justify-start">
      <div
        ref={refCounter}
        className="w-32 h-32 xl:w-36 xl:h-36 border border-accent rounded-full p-2"
      >
        <div className="w-full h-full border border-accent/30 rounded-full flex flex-col items-center justify-center text-4xl xl:text-5xl">
          {isInView ? (
            <CountUp
              start={0}
              end={value}
              duration={3}
              delay={animationDelay}
            />
          ) : (
            0
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-3xl">{icon}</div>
        <h4 className="h4 text-center">{title}</h4>
      </div>
    </div>
  );
};

export default AchievementCard;
