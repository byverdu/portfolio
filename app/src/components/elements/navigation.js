import React from 'react';
import { navLinkBuilder } from '../../builders';

const Nav = () => {
  const baseClass = 'portfolio__header';
  const button = React.createRef();
  const handleClickMenu = () => {
    button.current.classList.toggle( 'button-active' );

    Array.from( document.querySelectorAll( '.js-nav-item' ))
      .forEach( elem => {
        elem.classList.toggle( 'menu-hidden' );
      });
  }
  return (
    <nav>
      <ul className={ baseClass + '--nav'}>
        <li className={ baseClass + '--nav-item menu'}>
          <button
            className="button"
            onClick={ handleClickMenu }
            ref={button}
          >
            |||
          </button>
        </li>
        { navLinkBuilder }
      </ul>
    </nav>
  );
}

export default Nav;
