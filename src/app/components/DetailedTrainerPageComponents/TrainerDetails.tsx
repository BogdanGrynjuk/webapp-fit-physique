import React from 'react';

import SocialLink from '@/app/components/UI/SocialLink';
import { FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Trainer } from '@/app/data/trainers';

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
    <table className="w-full max-w-[500px] text-sm mobile:text-base">
      <tbody>
        <tr className="grid grid-cols-2 border-t border-primary-100/50 h-[64px]">
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
        <tr className="grid grid-cols-2 border-t border-b border-primary-100/50 h-[64px]">
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
  );
};

export default TrainerDetails;
