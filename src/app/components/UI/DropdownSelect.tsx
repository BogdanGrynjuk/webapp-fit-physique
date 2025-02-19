'use client';

import clsx from 'clsx';
import React, { useState, useRef, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

interface DropdownSelectProps {
  options: string[];
  placeholder?: string;
  label?: string;
  onSelect: (selected: string) => void;
}

const DropdownSelect = ({
  options,
  placeholder,
  label = 'Select an option',
  onSelect,
}: DropdownSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative min-w-[300px] group">
      {label && (
        <span className="uppercase text-[12px] text-primary-100/50 tracking-[1px] font-semibold group-hover:text-accent group-focus-within:text-accent">
          {label}
        </span>
      )}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative flex w-full p-3 h-[40px] md:h-[56px] border border-primary-100/50 items-center justify-between"
      >
        {selected ? <span>{selected}</span> : <span>{placeholder}</span>}
        <FaAngleDown
          className={clsx(
            'transition-all duration-300',
            isOpen ? 'rotate-180' : '',
          )}
        />
      </button>

      <ul className="absolute w-full mt-2 z-50">
        {options.map((option, index, array) => (
          <li
            key={index}
            style={{
              transition: `transform 0.5s ease-in-out ${(array.length - index) * 0.1}s, margin-bottom 0.2s ease-in-out ${(array.length - index) * 0.1}s, opacity 1s ease-in-out ${(array.length - index) * 0.1}s `,
            }}
            className={clsx(
              'p-3 h-[40px] md:h-[56px] bg-white border-r border-l border-primary-100/50 hover:bg-red-100 cursor-pointer ',
              isOpen
                ? 'translate-y-[0] mb-[0] opacity-100 scale-100'
                : 'origin-bottom translate-y-[-48px] md:translate-y-[-64px] mb-[-40px] md:mb-[-56px] scale-0 opacity-0',
              index === 0 && 'border-t',
              index === array.length - 1 && 'border-b',
            )}
            onClick={() => handleSelect(option)}
          >
            <span>{option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownSelect;
