import React from 'react';
import DropdownSelect from '../UI/DropdownSelect';
import SearchInput from '../UI/SearchInput';

const roleOptions = [
  'All Trainers',
  'Bodybuilding Coaches',
  'Cardio Coaches',
  'CrossFit Coaches',
  'Fitness Coaches',
  'Boxing Coaches',
  'Yoga Coaches',
];

type TrainersToolbarProps = {
  query: string;
  handleSearch: (searchQuery: string) => void;
  selectedRole: string;
  handleRoleChange: (role: string) => void;
};
const TrainersToolbar = ({
  query,
  handleSearch,
  selectedRole,
  handleRoleChange,
}: TrainersToolbarProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
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
    </div>
  );
};

export default TrainersToolbar;
