import React from 'react';
import classnames from 'classnames';
import * as data from '../data';
import Tile from '../../src/components/elements/tile';
import Input from '../../src/components/elements/input';
import FooterItem from '../../src/components/elements/footeritem';

export const navLinkBuilder = data.navLinksData.map(( item, index ) => {
  const liClasses = classnames( 'portfolio__header--nav-item', 'menu-hidden', 'js-nav-item' )
  return(
    <li
      className={liClasses}
      key={index}>
      <a
        className={'portfolio__header--nav-link'}
        href={item.href}>
          {item.text}
      </a>
    </li>
  );
});

export const techTilesBuilder = ( techData ) => {
  const bgColors = [
    'rgb(254,106,8)',
    'rgb(255,189,46)',
    'rgb(253,96,87)',
    'rgb(7,173,239)',
    'rgb(41,207,66)'
  ];

  return techData.map(( item, index ) => {
    const random = Math.floor( Math.random() * bgColors.length );
    const bg = {color: bgColors[ random ]}

    return (
      <span
        key={ index }
        className="tech"
        style={bg}>
        { item }  
      </span>
    );
  });
}

export const tileBuilder = data.projectsData.map( item => (
    <Tile key={ item.name } {...item} />
  )
);

export const formBuilder = data.formData.map( item => (
    <Input key={ item.name } {...item} />
  )
);

export const socialBuilder = data.socialIconsData.map( item => (
    <FooterItem key={ item.id } {...item } />
  )
);
