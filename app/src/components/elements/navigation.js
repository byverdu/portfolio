import React, { Component } from 'react';
import { navLinkBuilder } from '../../builders';

export default class Nav extends Component {
  constructor( props ) {
    super( props );

    this.handleClickMenu = this.handleClickMenu.bind( this );
    this.button = null;
  }
  handleClickMenu() {
    this.button.classList.toggle( 'button-active' );

    Array.from( document.querySelectorAll( '.js-nav-item' ))
      .forEach( elem => {
        elem.classList.toggle( 'menu-hidden' );
      });
  }
  render() {
    const baseClass = 'portfolio__header';
    return(
      <nav>
        <ul className={ baseClass + '--nav'}>
          <li className={ baseClass + '--nav-item menu'}>
            <button
              className="button"
              onClick={ this.handleClickMenu }
              ref={elem => this.button = elem}>|||</button>
          </li>
          { navLinkBuilder }
        </ul>
      </nav>
    );
  }
}
