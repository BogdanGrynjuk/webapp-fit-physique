'use client';

import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchInputProps {
  label: string;
  onSearch: (query: string) => void;
  name?: string;
  placeholder?: string;
  searchQuery: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  label,
  placeholder = 'Search...',
  onSearch,
  name,
  searchQuery,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputId = `search-input-${name}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value.toLowerCase());
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="group w-[280px]">
      <label
        className="uppercase text-[12px] text-primary-100/50 tracking-[1px] font-semibold group-hover:text-accent group-focus-within:text-accent"
        htmlFor={inputId}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          id={inputId}
          name={name}
          ref={inputRef}
          value={searchQuery}
          placeholder={placeholder}
          onChange={handleChange}
          className="p-3 pl-[52px] md:pl-[68px] w-full h-[40px] md:h-[56px] border border-primary-100/50 text-sm mobile:text-base placeholder:text-sm mobile:placeholder:text-base placeholder:text-primary-100/50 placeholder:font-medium placeholder:capitalize outline-none"
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className="text-white absolute top-[1px] left-[1px] w-[38px] md:w-[54px] h-[38px] md:h-[54px] bg-accent flex items-center justify-center"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
