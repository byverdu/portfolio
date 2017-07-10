import React from 'react';
import * as data from '../data';
import Tile from '../../src/components/elements/tile';

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
  return techData.map(( item, index ) => {
    const bgColors = [
    'rgb(254,106,8)',
    'rgb(255,189,46)',
    'rgb(253,96,87)',
    'rgb(7,173,239)',
    'rgb(41,207,66)'
  ];
  const random = Math.floor( Math.random() * bgColors.length );
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

const tileBuilder = data.projectsData.map(( item, index ) => {
  const data = {
    title: item.title,
    img: item.img,
    text: item.text,
    href: item.href,
    name: item.name,
    techs: item.techs
  }
  return(
    <Tile key={ index }	data={data} />
  );
});

export {
  navLinkBuilder,
  techTilesBuilder,
  tileBuilder
}
