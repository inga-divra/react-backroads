import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src='./images/logo.svg' alt='logo' className='nav-logo' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <ul className='nav-links' id='nav-links'>
          <li>
            <a href='#home' className='nav-link scroll-link'>
              home
            </a>
          </li>

          <li>
            <a href='#about' className='nav-link scroll-link'>
              about
            </a>
          </li>

          <li>
            <a href='#services' className='nav-link scroll-link'>
              services
            </a>
          </li>

          <li>
            <a href='#featured' className='nav-link scroll-link'>
              featured
            </a>
          </li>

          <li>
            <a href='#gallery' className='nav-link scroll-link'>
              gallery
            </a>
          </li>
        </ul>

        <ul className='nav-icons'>
          <li>
            <a
              href='https://facebook.com/'
              target='_blank'
              className='nav-icon'
            >
              <i className='fab fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/' target='_blank' className='nav-icon'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a
              href='https://squarespace.com/'
              target='_blank'
              className='nav-icon'
            >
              <i className='fab fa-squarespace'></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
