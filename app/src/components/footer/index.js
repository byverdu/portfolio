import React from 'react';
import { socialBuilder } from '../../builders';
import './Footer.css';

const Footer = () => (
  <footer id="social" className="portfolio__footer">
    <nav className="portfolio__footer--social">
      { socialBuilder }
    </nav>
    <p className="portfolio__footer--copy">Made with <span>&lt;3</span> by Byverdu, <b>{new Date().getFullYear()}</b></p>
  </footer>
);

export default Footer;
