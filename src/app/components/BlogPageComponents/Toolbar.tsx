import React from 'react';
import SearchInput from '../UI/SearchInput';
import DropdownSelect from '../UI/DropdownSelect';

import { FaSort } from 'react-icons/fa6';

const sortTitleOptions = ['Alphabetical (A-Z)', 'Alphabetical (Z-A)'];
const sortDateOptions = ['Newest First', 'Oldest First'];

type ToolbarProps = 
  {
  query: string;
  selectedTitleSort: string;
  selectedDateSort: string;
  handleSearch: (searchQuery: string) => void;
  handleSortTitleChange: (option: string) => void;
  handleSortDateChange: (option: string) => void;
};
const Toolbar = ({
  query,
  selectedTitleSort,
  selectedDateSort,
  handleSearch,
  handleSortTitleChange,
  handleSortDateChange,
}: ToolbarProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <SearchInput
        label={'blog title'}
        placeholder="find blog by title"
        onSearch={handleSearch}
        name={'blog-title'}
        searchQuery={query}
      />

      <DropdownSelect
        label={'sort by title'}
        placeholder="sort blogs by title"
        selectedOption={selectedTitleSort}
        options={sortTitleOptions}
        onSelect={handleSortTitleChange}
        icon={<FaSort />}
      />

      <DropdownSelect
        label={'sort by date'}
        placeholder="sort blogs by date"
        selectedOption={selectedDateSort}
        options={sortDateOptions}
        onSelect={handleSortDateChange}
        icon={<FaSort />}
      />
    </div>
  );
};

export default Toolbar;
