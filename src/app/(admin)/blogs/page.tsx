'use client';

import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import { blogsList } from '@/app/data/blogs';

import CustomButton from '@/app/components/UI/CustomButton';
import Header from '@/app/components/BlogsPageComponents/Header';
import Image from 'next/image';
import SearchInput from '@/app/components/UI/SearchInput';
import DropdownSelect from '@/app/components/UI/DropdownSelect';

import { FaSort } from 'react-icons/fa6';

const navLinks = [
  { name: 'home', href: '/#blogs' },
  { name: 'Blogs', href: '/blogs' },
];

const sortTitleOptions = ['Alphabetical (A-Z)', 'Alphabetical (Z-A)'];
const sortDateOptions = ['Newest First', 'Oldest First'];
const Page = () => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogsList);

  const [query, setQuery] = useState('');
  const [selectedTitleSort, setSelectedTitleSort] = useState('');
  const [selectedDateSort, setSelectedDateSort] = useState('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setFilteredBlogs(
      blogsList.filter(({ title }) =>
        title.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  const handleSortTitleChange = (option: string) => {
    setQuery('');
    setSelectedDateSort('');
    setSelectedTitleSort(option);
    setFilteredBlogs((prevBlogs) =>
      [...prevBlogs].sort((a, b) =>
        option === 'Alphabetical (A-Z)'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title),
      ),
    );
  };

  const handleSortDateChange = (option: string) => {
    setQuery('');
    setSelectedTitleSort('');
    setSelectedDateSort(option);
    setFilteredBlogs((prevBlogs) =>
      [...prevBlogs].sort((a, b) =>
        option === 'Newest First'
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : new Date(a.date).getTime() - new Date(b.date).getTime(),
      ),
    );
  };

  const handleFilterClear = () => {
    setFilteredBlogs(blogsList);
  };
  return (
    <>
      <Header navLinks={navLinks} />
      <main>
        <section className="mt-[100px] pt-8 pb-8 lg:pt-14 lg:pb-14">
          <div className="container mx-auto flex flex-col gap-10 items-center">
            <h1 className="h2 text-center">Blogs</h1>

            <div className="flex flex-col md:flex-row gap-4">
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

            {filteredBlogs.length > 0 ? (
              <motion.ul
                variants={fadeIn('up', 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.01 }}
                className="grid grid-cols-1  gap-5"
              >
                {filteredBlogs.map((blog) => {
                  return (
                    <li key={blog.id}>
                      <p>
                        <span>{blog.id}</span>
                        <span>{' - '}</span>
                        <span>{blog.title}</span>
                      </p>
                    </li>
                  );
                })}
              </motion.ul>
            ) : (
              <div className="flex flex-col justify-center items-center gap-4">
                <motion.div
                  variants={fadeIn('up', 0.2)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ amount: 0.05 }}
                >
                  <Image
                    src={'/assets/img/tired_athlete.png'}
                    alt="tired_athlete"
                    width={280}
                    height={280}
                  />
                </motion.div>

                <motion.p
                  variants={fadeIn('up', 0.4)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ amount: 0.05 }}
                  className="text-accent text-xl font-semibold"
                >
                  No blogs were found for your query.
                </motion.p>
                <motion.div
                  variants={fadeIn('up', 0.6)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ amount: 0.05 }}
                >
                  <CustomButton
                    text={'reset'}
                    containerStyles={
                      'w-[146px] h-[40px] md:w-[162px] md:h-[56px]'
                    }
                    onClick={handleFilterClear}
                  />
                </motion.div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
