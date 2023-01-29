import React from 'react';
import Title from './Title';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subtitle='services' />
      <div className='section-center services-center'>
        <article className='service'>
          <span className='service-icon'>
            <i className='fas fa-wallet fa-fw'></i>
          </span>
          <div className='service-info'>
            <h4 className='service-title'>saving money</h4>
            <p className='service-text'>
              Looking for budget-friendly trips? Get inspired by our selection
              of the best budget tours that will take you to exciting
              destinations!
            </p>
          </div>
        </article>
        <article className='service'>
          <span className='service-icon'>
            <i className='fas fa-tree fa-fw'></i>
          </span>
          <div className='service-info'>
            <h4 className='service-title'>endless hiking</h4>
            <p className='service-text'>
              Charge the batteries! Pick one of the tours we created based on
              the general interests of our customers, or create your own trip!
            </p>
          </div>
        </article>
        <article className='service'>
          <span className='service-icon'>
            <i className='fas fa-socks fa-fw'></i>
          </span>
          <div className='service-info'>
            <h4 className='service-title'>amazing comfort</h4>
            <p className='service-text'>
              Let's start planning your next vacation! Committed to providing
              the best value with exceptional service. Travel with comfort!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
