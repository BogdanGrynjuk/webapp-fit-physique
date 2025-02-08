'use client';

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { FaAngleDown } from 'react-icons/fa6';

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) => {
  const [isActiveAccordion, setIsActiveAccordion] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isActiveAccordion) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setMaxHeight('0px');
      }
    }
  }, [isActiveAccordion]);

  return (
    <div className="p-4 flex flex-col bg-gray-200 border-accent">
      <button
        className="group flex justify-between gap-4 items-center"
        type="button"
        onClick={() => setIsActiveAccordion(!isActiveAccordion)}
      >
        <p
          className={clsx(
            'font-oswald font-medium text-left text-lg md:text-xl xl:text-2xl group-hover:text-accent transition-all duration-300',
            isActiveAccordion && 'text-accent',
          )}
        >
          {question}
        </p>
        <span
          className={clsx(
            'p-2 text-lg rounded-full  bg-gray-100 transition-all duration-300 group-hover:text-accent',
            isActiveAccordion && 'rotate-180 text-accent',
          )}
        >
          <FaAngleDown />
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={clsx(
          'overflow-hidden transition-all duration-300',
          isActiveAccordion ? 'mt-2 opacity-100' : 'mt-0 opacity-0',
        )}
      >
        <div>{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
