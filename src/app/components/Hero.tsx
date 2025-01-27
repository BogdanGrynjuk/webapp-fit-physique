import React from 'react';
import HeroSlider from './HeroSlider';
const Hero = () => {
  return (
    <section
      className="h-[calc(100vh-100px)] bg-hero bg-cover bg-no-repeat bg-center mt-[100px]"
      id="hero"
    >
      <div className="container mx-auto h-full">
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
