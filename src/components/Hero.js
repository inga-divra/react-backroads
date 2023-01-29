import React from 'react';

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <h1>continue exploring</h1>
        <p>
          The world is a book and those who do not travel read only one page.
        </p>
        <a href='#featured' className='btn hero-btn scroll-link'>
          explore tours
        </a>
      </div>
    </section>
  );
};

export default Hero;
