import React, { Component } from 'react';
import { socialBuilder } from '../../builders';
import './Footer.css';
export default class Footer extends Component {
  componentDidMount() {
    this.refs.year.textContent = new Date().getFullYear();
  }
  render() {
    return(
      <footer className="portfolio__footer">
        <nav className="portfolio__footer--social">
          { socialBuilder }
        </nav>
        <p className="portfolio__footer--copy">Made with <span>&lt;3</span> by Byverdu <b ref="year"></b></p>
      </footer>
    );
  }
}