import { Trainer } from '@/app/data/trainers';
import React from 'react';

import { PiCertificate } from 'react-icons/pi';

type TrainerCertificatesProps = Pick<Trainer, 'certificates'>;
const TrainerCertificates = ({ certificates }: TrainerCertificatesProps) => {
  return (
    <section className="h-full min-h-[186px] p-5 flex flex-col gap-5 items-center border border-gray-300 rounded-lg bg-white">
      <h3 className="text-[20px] mobile:text-[24px] font-oswald font-semibold tracking-[2px] uppercase flex items-center gap-1">
        <PiCertificate className="text-4xl" />
        Certificates
      </h3>
      <ul className="flex flex-col self-start gap-2">
        {certificates.map((certificate, index) => (
          <li key={index}>
            <p className="text-sm ml-6 mobile:text-base flex items-center gap-2">
              <span className="w-2 h-2 bg-accent flex-shrink-0"></span>
              {certificate}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrainerCertificates;
