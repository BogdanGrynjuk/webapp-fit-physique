'use client';

import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import { posts } from '@/app/data/posts';

import Header from '@/app/components/Layout/Header';
import Toolbar from '@/app/components/BlogPageComponents/BlogToolbar';
import ContentUnavailable from '@/app/components/UI/ContentUnavailable';
import PostList from '@/app/components/BlogPageComponents/PostList';

const navLinks = [
  { name: 'home', href: '/#blog' },
  { name: 'blog', href: '/blog' },
];

const BlogPage = () => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [query, setQuery] = useState('');
  const [selectedTitleSort, setSelectedTitleSort] = useState('');
  const [selectedDateSort, setSelectedDateSort] = useState('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setFilteredPosts(
      posts.filter(({ title }) =>
        title.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  const handleSortTitleChange = (option: string) => {
    setQuery('');
    setSelectedDateSort('');
    setSelectedTitleSort(option);
    setFilteredPosts((prevPosts) =>
      [...prevPosts].sort((a, b) =>
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
    setFilteredPosts((prevPosts) =>
      [...prevPosts].sort((a, b) =>
        option === 'Newest First'
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : new Date(a.date).getTime() - new Date(b.date).getTime(),
      ),
    );
  };

  const handleFilterClear = () => {
    setFilteredPosts(posts);
    setQuery('');
    setSelectedTitleSort('');
    setSelectedDateSort('');
  };
  return (
    <>
      <Header links={navLinks} />
      <main>
        <section className="mt-[100px] pt-8 pb-8 lg:pt-14 lg:pb-14">
          <div className="container mx-auto flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-2 items-center text-center">
              <motion.h1
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                className="h2"
              >
                Blog
              </motion.h1>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                className="text-sm mobile:text-base max-w-[600px] mx-auto"
              >
                On our blog, you will find up-to-date articles on training,
                nutrition, and health to help you become the best version of
                yourself.
              </motion.p>
            </div>

            <Toolbar
              query={query}
              selectedTitleSort={selectedTitleSort}
              selectedDateSort={selectedDateSort}
              handleSearch={handleSearch}
              handleSortTitleChange={handleSortTitleChange}
              handleSortDateChange={handleSortDateChange}
            />

            {filteredPosts.length > 0 ? (
              <PostList posts={filteredPosts} />
            ) : (
              <ContentUnavailable
                message="No posts were found for your query."
                onClick={handleFilterClear}
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;
