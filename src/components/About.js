import React from 'react';
import aboutImg from '../images/about.jpeg';
import Title from './Title';
const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subtitle='us' />
      <div className='section-center about-center'>
        <article className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </article>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Responsible travel has always been at the core of what we do.
            Travelling with us means not just better trips for you, it's better
            for local communities, better for wildlife and better for the
            planet.
          </p>
          <p>
            International tour packages from Backrouds give you the freedom to
            fall in love with the world. Explore our trips and live the good
            life with Backrouds travel!
          </p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
