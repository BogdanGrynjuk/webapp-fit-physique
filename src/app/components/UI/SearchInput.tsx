'use client';

import React, { useRef } from 'react';

interface SearchInputProps {
  label: string;
  placeholder?: string;
  onSearch: (query: string) => void;
  name?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  label,
  placeholder = 'Search...',
  onSearch,
  name,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputId = `search-input-${name}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value.toLowerCase());
    }
  };

  return (
    <div className="group">
      <label
        className="uppercase text-[12px] text-primary-100/50 tracking-[1px] font-semibold group-hover:text-accent group-focus-within:text-accent"
        htmlFor={inputId}
      >
        {label}
      </label>
      <input
        type="text"
        id={inputId}
        name={name}
        ref={inputRef}
        defaultValue=""
        placeholder={placeholder}
        onChange={handleChange}
        className="p-3 w-full h-[40px] md:h-[56px] border border-primary-100/50"
      />
    </div>
  );
};

export default SearchInput;
