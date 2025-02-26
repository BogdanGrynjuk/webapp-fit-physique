import { Trainer } from '@/app/data/trainers';
import React from 'react';

import { PiCertificate } from 'react-icons/pi';

type TrainerCertificatesProps = Pick<Trainer, 'certificates'>;
const TrainerCertificates = ({ certificates }: TrainerCertificatesProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[20px] mobile:text-[24px] font-oswald font-semibold tracking-[2px] uppercase flex items-center gap-1">
        <PiCertificate className="text-4xl" />
        Certificates
      </h3>
      <ul className="flex flex-col gap-2">
        {certificates.map((certificate, index) => (
          <li key={index}>
            <span>{certificate}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainerCertificates;
