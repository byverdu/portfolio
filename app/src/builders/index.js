import React from 'react';
import * as data from '../data';

const navLinkBuilder = data.navLinksData.map(( item, index ) => {
  const baseClass = 'portfolio__header--nav-';
  return(
    <li
      className={baseClass + 'item'}
      key={index}>
      <a
        className={baseClass + 'link'}
        href={item.href}>
          {item.text}
      </a>
    </li>
  );
});

export {
  navLinkBuilder
}
