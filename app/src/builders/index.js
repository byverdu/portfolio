import React from 'react';
import classnames from 'classnames';
import * as data from '../data';
import Tile from '../../src/components/elements/tile';
import Input from '../../src/components/elements/input';
import FooterItem from '../../src/components/elements/footeritem';

const navLinkBuilder = data.navLinksData.map(( item, index ) => {
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

const techTilesBuilder = ( techData ) => {
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

const formBuilder = data.formData.map(( item, index ) => {
  const data = {
    tag: item.tag,
    label: item.label, 
    type: item.type,
    placeholder: item.placeholder,
    name: item.name,
    required: item.required
  };
  return(
    <Input key={ index } data={data} />
  )
});

const socialBuilder = data.socialIconsData.map(( item, index ) => {
  const data = {
    href: item.href,
    id: item.id,
    viewBox: item.viewBox,
    path: item.path
  }
  return(
    <FooterItem key={ index } data={ data } />
  );
});

export {
  navLinkBuilder,
  techTilesBuilder,
  tileBuilder,
  formBuilder,
  socialBuilder
}
