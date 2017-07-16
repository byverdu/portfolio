import React, { Component } from 'react';
import { tileBuilder } from '../../builders';
import './Content.css'

export default class Content extends Component {
  render() {
    return (
      <section
        id="projects"
        className="portfolio__content">
				{tileBuilder}
			</section>
    );
  }
}