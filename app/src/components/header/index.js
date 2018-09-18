import React from 'react';
import Nav from '../elements/navigation.js';
import { lettering } from '../../utils';
import './Header.css';

const Header = () => {
  const name = React.createRef();
  const spec = React.createRef();

  setTimeout(() => {
    lettering( name.current );
    lettering( spec.current );
  }, 0 );

  const baseClass = 'portfolio__header';
  return(
    <header className={ baseClass }>
      <Nav />
      <div className={ baseClass + '--title-wrapper' }>
        <div className={ baseClass + '--title' }>
          <h1
            ref={name}
            className={ baseClass + '--title-name' }>
              Albert Vallverdu
          </h1>
          <h6
            ref={spec}
            className="portfolio__header--title-spec">
              Web Developer &#123;Javascript Enthusiast&#125;
          </h6>
        </div>
      </div>
    </header>
  );
}

export default Header;
