import React from 'react';

const Icon = ({ id, viewBox, path }) => (
  <svg
    className="portfolio__footer--icon"
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    id={ id }
    viewBox={ viewBox }>
    <path d={ path } />
  </svg>
);

export default Icon;
