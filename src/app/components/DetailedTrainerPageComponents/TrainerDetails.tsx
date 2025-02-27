import React from 'react';

import SocialLink from '@/app/components/UI/SocialLink';
import { Trainer } from '@/app/data/trainers';

import { MdInfoOutline } from 'react-icons/md';

type TrainerDetailsProps = Pick<
  Trainer,
  'age' | 'experience' | 'specialty' | 'onlineProfile'
>;
const TrainerDetails = ({
  age,
  experience,
  specialty,
  onlineProfile,
}: TrainerDetailsProps) => {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-[20px] mobile:text-[24px] font-oswald font-semibold tracking-[2px] uppercase flex items-center gap-1">
        <MdInfoOutline className="text-4xl" />
        Profile
      </h3>
      <table className="w-full text-sm mobile:text-base">
        <tbody>
          <tr className="grid grid-cols-2 h-[64px]">
            <th className="p-3 flex items-center">Age</th>
            <td className="p-3 flex items-center">{age}</td>
          </tr>
          <tr className="grid grid-cols-2 border-t border-primary-100/50 h-[64px]">
            <th className="p-3 flex items-center">Experience</th>
            <td className="p-3 flex items-center">{experience}</td>
          </tr>
          <tr className="grid grid-cols-2 border-t border-primary-100/50 h-[64px]">
            <th className="p-3 flex items-center">Specialty</th>
            <td className="p-3 flex items-center">{specialty}</td>
          </tr>
          <tr className="grid grid-cols-2 border-t border-primary-100/50 h-[64px]">
            <th className="p-3 flex items-center">Socials</th>
            <td className="p-3 pl-0 flex items-center">
              <ul className="flex items-center justify-center gap-4">
                {onlineProfile.map((profile, index) => (
                  <li key={index}>
                    <SocialLink
                      href={profile.href}
                      Icon={profile.icon}
                      containerStyles="w-[40px] h-[40px]"
                    />
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TrainerDetails;
