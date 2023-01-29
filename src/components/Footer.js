import React from 'react';

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        <li>
          <a href='#home' className='footer-link scroll-link'>
            home
          </a>
        </li>
        <li>
          <a href='#about' className='footer-link scroll-link'>
            about
          </a>
        </li>
        <li>
          <a href='#services' className='footer-link scroll-link'>
            services
          </a>
        </li>
        <li>
          <a href='#featured' className='footer-link scroll-link'>
            featured
          </a>
        </li>
        <li>
          <a href='#gallery' className='footer-link scroll-link'>
            gallery
          </a>
        </li>
      </ul>
      <ul className='footer-icons'>
        <li>
          <a
            href='https://facebook.com/'
            target='_blank'
            className='footer-icon'
          >
            <i className='fab fa-facebook'></i>
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/'
            target='_blank'
            className='footer-icon'
          >
            <i className='fab fa-twitter'></i>
          </a>
        </li>
        <li>
          <a
            href='https://squarespace.com/'
            target='_blank'
            className='footer-icon'
          >
            <i className='fab fa-squarespace'></i>
          </a>
        </li>
      </ul>
      <p className='copyright'>
        copyright &copy; backrouds travel tour company <span id='date'></span>.
        all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
