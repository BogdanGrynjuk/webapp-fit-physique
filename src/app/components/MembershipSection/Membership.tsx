import React from 'react';
import MembershipSlider from './MembershipSlider';

const Membership = () => {
  return (
    <section
      className="relative z-0 pt-8 pb-8 lg:pt-14 lg:pb-14 text-white xl:min-h-[calc(100vh-100px)] bg-membership bg-cover bg-no-repeat bg-center flex flex-col"
      id="membership"
    >
      <div className="absolute inset-0 bg-black/20 -z-10" />
      <div className="container mx-auto flex flex-col gap-5">
        <h2 className="h2 text-center">Membership</h2>
        <div>
          <MembershipSlider />
        </div>
      </div>
    </section>
  );
};

export default Membership;
