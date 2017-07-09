import React, { Component } from 'react';
import Nav from '../navigation';
import { lettering } from '../../utils';

export default class Header extends Component {
  componentDidMount() {
    lettering( this.refs.name );
    lettering( this.refs.spec );
  }

  render() {
    const baseClass = 'portfolio__header';
    return(
      <header className={ baseClass }>
        <Nav />
        <h1
          ref="name"
          className={ baseClass + '--title-name' }>
						Albert Vallverdu
				</h1>
        <h6
          ref="spec"
          className="portfolio__header--title-spec">
            Web Developer &#123;Javascript&#125; Enthusiast
        </h6>	
      </header>
    );
  }
}
