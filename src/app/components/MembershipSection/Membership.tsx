import React from 'react';
import MembershipSlider from './MembershipSlider';

const Membership = () => {
  return (
    <section
      className="text-white min-h-[calc(100vh-100px)] bg-membership bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center"
      id="membership"
    >
      <div className="container mx-auto">
        <h2 className="h2">Membership</h2>
        <div>
          <MembershipSlider />
        </div>
      </div>
    </section>
  );
};

export default Membership;
