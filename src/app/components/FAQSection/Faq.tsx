import React from 'react';

import FaqBlock from './FagBlock';
import InquiryBlock from './InquiryBlock';

const Faq = () => {
  return (
    <section id="faq">
      <div className="container mx-auto pt-8 pb-8 lg:pt-14 lg:pb-14">
        <h2 className="visually-hidden">FAQs section</h2>
        <div className="grid gap-4 lg:gap-12 grid-cols-1 lg:[grid-template-columns:3fr_2fr]">
          <FaqBlock />
          <InquiryBlock />
        </div>
      </div>
    </section>
  );
};

export default Faq;
