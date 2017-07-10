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

const techTilesBuilder = ( techData ) => {
  const bgColors = [
    'rgb(254,106,8)',
    'rgb(255,189,46)',
    'rgb(253,96,87)',
    'rgb(7,173,239)',
    'rgb(41,207,66)'
  ];
  const random = Math.floor( Math.random() * bgColors.length );

  return techData.map(( item, index ) => {
    return (
      <span
        key={ index }
        className="tech"
        style={{color: bgColors[ random ]}}>
        { item }  
      </span>
    );
  });
}

export {
  navLinkBuilder,
  techTilesBuilder
}
