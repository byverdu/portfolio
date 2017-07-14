import React, { Component } from 'react';
import { navLinkBuilder } from '../../builders';

export default class Nav extends Component {
  constructor( props ) {
    super( props );

    this.handleClickMenu = this.handleClickMenu.bind( this );
  }
  handleClickMenu() {
    this.refs.btnMenu.classList.toggle( 'menu-clicked' );
    
    const listItems = document.querySelectorAll( '.menu-hidden' );

    for ( let i = 0; i < listItems.length;i++ ) {
      listItems[ i ].classList.toggle( 'menu-block' );
    }
  }
  render() {
    const baseClass = 'portfolio__header';
    return(
      <nav>
        <ul className={ baseClass + '--nav'}>
          <li className={ baseClass + '--nav-item menu'}>
            <button
              className="button menu-idle"
              onClick={ this.handleClickMenu }
              ref="btnMenu">|||</button>
          </li>
          { navLinkBuilder }
        </ul>
      </nav>
    );
  }
}
