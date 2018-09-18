import React from 'react';
import Icon from './icon';

const FooterItem = ({ href, id, viewBox, path }) => (
  <a className="portfolio__footer--link" href={ href }>
    <Icon data={{id, viewBox, path}} />
  </a>
);

export default FooterItem;
