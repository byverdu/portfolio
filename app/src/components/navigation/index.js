import React, { Component } from 'react';
import { navLinksData } from '../data';

export default class Nav extends Component {
  render() {
    const baseClass = 'portfolio__header--nav-';
    const linkBuilder = navLinksData.map(( item, index ) => {
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
    return(
      <nav>
        <ul>
          {linkBuilder}
        </ul>
      </nav>
    );
  }
}
