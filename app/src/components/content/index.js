import React from 'react';
import { tileBuilder } from '../../builders';
import './Content.css'

const Content = () => (
  <section
    id="content"
    className="portfolio__content">
    {tileBuilder}
  </section>
);

export default Content;
