'use client';

import React from 'react';
import SearchInput from '../UI/SearchInput';
import DropdownSelect from '../UI/DropdownSelect';

import { motion } from 'framer-motion';
import { scale, fadeIn } from '@/app/lib/variants';

import { FaSort } from 'react-icons/fa6';

const sortTitleOptions = ['Alphabetical (A-Z)', 'Alphabetical (Z-A)'];
const sortDateOptions = ['Newest First', 'Oldest First'];

type ToolbarProps = {
  query: string;
  selectedTitleSort: string;
  selectedDateSort: string;
  handleSearch: (searchQuery: string) => void;
  handleSortTitleChange: (option: string) => void;
  handleSortDateChange: (option: string) => void;
};
const BlogToolbar = ({
  query,
  selectedTitleSort,
  selectedDateSort,
  handleSearch,
  handleSortTitleChange,
  handleSortDateChange,
}: ToolbarProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <motion.div
        variants={fadeIn('right', 0.6)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.01 }}
      >
        <SearchInput
          label={'post title'}
          placeholder="find post by title"
          onSearch={handleSearch}
          name={'post-title'}
          searchQuery={query}
        />
      </motion.div>

      <motion.div
        variants={scale(0.6)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.01 }}
      >
        <DropdownSelect
          label={'sort by title'}
          placeholder="sort posts by title"
          selectedOption={selectedTitleSort}
          options={sortTitleOptions}
          onSelect={handleSortTitleChange}
          icon={<FaSort />}
        />
      </motion.div>

      <motion.div
        variants={fadeIn('left', 0.6)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.01 }}
      >
        <DropdownSelect
          label={'sort by date'}
          placeholder="sort posts by date"
          selectedOption={selectedDateSort}
          options={sortDateOptions}
          onSelect={handleSortDateChange}
          icon={<FaSort />}
        />
      </motion.div>
    </div>
  );
};

export default BlogToolbar;
