'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import TrainerCard from '@/app/components/TeamSection/TrainerCard';

import { trainers } from '@/app/data/trainers';
import SearchInput from '@/app/components/UI/SearchInput';
import DropdownSelect from '@/app/components/UI/DropdownSelect';
import CustomButton from '@/app/components/UI/CustomButton';
import { fadeIn } from '@/app/lib/variants';
import Image from 'next/image';

const roleOptions = [
  'All Trainers',
  'Body Builder Coaches',
  'Cardio Coaches',
  'CrossFit Coaches',
  'Fitness Coaches',
  'Boxing Coaches',
  'Yoga Coaches',
];

const roleMapping: Record<string, string> = {
  'Body Builder Coaches': 'Body Builder Coach',
  'Cardio Coaches': 'Cardio Coach',
  'CrossFit Coaches': 'CrossFit Coach',
  'Fitness Coaches': 'Fitness Coach',
  'Boxing Coaches': 'Boxing Coach',
  'Yoga Coaches': 'Yoga Coach',
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
    <section className="pt-8 pb-8 lg:pt-14 lg:pb-14">
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
          effective workout programs but also support you at every stage of your
          journey to a healthy lifestyle. Regardless of your fitness level, we
          will find the perfect solution for you!
        </motion.p>

        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.05 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <SearchInput
            label={'trainer name '}
            placeholder="find trainer by name"
            onSearch={handleSearch}
            name={'trainer-name'}
            searchQuery={query}
          />

          <DropdownSelect
            label={'specialization'}
            placeholder="filter trainers"
            selectedOption={selectedRole}
            options={roleOptions}
            onSelect={handleRoleChange}
          />
        </motion.div>

        {filteredTrainers.length > 0 ? (
          <motion.ul
            variants={fadeIn('up', 0.8)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.01 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {filteredTrainers.map((trainer) => {
              return (
                <li key={trainer.id}>
                  <TrainerCard
                    id={trainer.id}
                    photo={trainer.photo}
                    fullName={trainer.fullName}
                    role={trainer.role}
                    description={trainer.description}
                    onlineProfile={trainer.onlineProfile}
                  />
                </li>
              );
            })}
          </motion.ul>
        ) : (
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.05 }}
            className="flex flex-col justify-center items-center gap-4"
          >
            <Image
              src={'/assets/img/not_found.webp'}
              alt="not-found"
              width={280}
              height={280}
            />
            <p className="text-accent text-xl font-semibold">
              No trainers were found for your query.
            </p>
            <CustomButton
              text={'reset'}
              containerStyles={'w-[146px] h-[40px] md:w-[162px] md:h-[56px]'}
              onClick={handleFilterClear}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TrainersPage;
