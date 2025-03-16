'use client';

import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import { trainers } from '@/app/data/trainers';

import Header from '@/app/components/Layout/Header';
import ContentUnavailable from '@/app/components/UI/ContentUnavailable';
import TrainersToolbar from '@/app/components/TrainersPageComponents/TrainersToolbar';
import TrainersGrid from '@/app/components/TrainersPageComponents/TrainersGrid';

const navLinks = [
  { name: 'home', href: '/#team' },
  { name: 'trainers', href: '/trainers' },
];

const roleMapping: Record<string, string> = {
  'Bodybuilding Coaches': 'Bodybuilding',
  'Cardio Coaches': 'Cardio',
  'CrossFit Coaches': 'CrossFit',
  'Fitness Coaches': 'Fitness',
  'Boxing Coaches': 'Boxing',
  'Yoga Coaches': 'Yoga',
};

const TrainersPage = () => {
  const [filteredTrainers, setFilteredTrainers] = useState(trainers);
  const [selectedRole, setSelectedRole] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setFilteredTrainers(
      trainers.filter(
        ({ fullName, role }) =>
          fullName.toLowerCase().includes(query.toLowerCase()) &&
          (selectedRole === 'All Trainers' || role.includes(selectedRole)),
      ),
    );
  };

  const handleRoleChange = (role: string) => {
    const mappedRole = roleMapping[role] || role;
    setQuery('');
    setSelectedRole(role);
    setFilteredTrainers(
      trainers.filter(
        ({ fullName, role: trainerRole }) =>
          (role === 'All Trainers' || trainerRole.includes(mappedRole)) &&
          fullName.toLowerCase().includes(fullName.toLowerCase()),
      ),
    );
  };

  const handleFilterClear = () => {
    setQuery('');
    setSelectedRole('');
    setFilteredTrainers(trainers);
  };

  return (
    <>
      <Header links={navLinks} />
      <main>
        <section className="mt-[100px] pt-8 pb-8 lg:pt-14 lg:pb-14">
          <div className="container mx-auto flex flex-col gap-10 items-center">
            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.05 }}
              className="h2 text-center"
            >
              Our Trainers
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.05 }}
              className="text-center text-sm mobile:text-base max-w-[700px] mx-auto"
            >
              Our team of trainers consists of professionals who will help you
              achieve your fitness goals. We believe that everyone deserves a
              personalized approach, which is why our trainers not only create
              effective workout programs but also support you at every stage of
              your journey to a healthy lifestyle. Regardless of your fitness
              level, we will find the perfect solution for you!
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.05 }}
            >
              <TrainersToolbar
                query={query}
                handleSearch={handleSearch}
                selectedRole={selectedRole}
                handleRoleChange={handleRoleChange}
              />
            </motion.div>

            {filteredTrainers.length > 0 ? (
              <motion.div
                variants={fadeIn('up', 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.01 }}
              >
                <TrainersGrid trainers={filteredTrainers} />
              </motion.div>
            ) : (
              <ContentUnavailable
                message="No trainers were found for your query"
                onClick={handleFilterClear}
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default TrainersPage;
