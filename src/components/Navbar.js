import React from 'react';
import logo from '../images/logo.svg';
import { pageLinks } from '../data';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='nav-logo' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className='nav-link scroll-link'>
                  {link.text}
                </a>
              </li>
            );
          })}
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
