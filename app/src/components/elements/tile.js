import React, { Component } from 'react';
import { techTilesBuilder } from '../../builders';

export default class Tile extends Component {
  constructor( props ) {
    super( props );

    this.handleMouseEnter = this.handleMouseEnter.bind( this );
    this.handleMouseLeave = this.handleMouseLeave.bind( this );
    this.getWidthElement = this.getWidthElement.bind( this );
    this.isDesktop = this.isDesktop.bind( this );

  }
  tile = React.createRef();
  wrapper = React.createRef();
  title = React.createRef();
  text = React.createRef();
  image = React.createRef();
  techs = React.createRef();
  curtain = React.createRef();
  componentDidMount() {
    this.getWidthElement();
    window.addEventListener( 'resize', this.getWidthElement );
  }

  componentWillUnmount() {
      window.removeEventListener( 'resize', this.getWidthElement );
  }

  isDesktop() {
    return document.body.getBoundingClientRect().width >= 750;
  }

  getWidthElement() {
    const wrapper = this.wrapper.current
    wrapper.style.width = `${this.tile.current.getBoundingClientRect().width}px`;

    this.isDesktop() ?
      wrapper.classList.remove( 'is-mobile' ) : 
      wrapper.classList.add( 'is-mobile' )
  }

  handleMouseEnter() {
    if ( this.isDesktop()) {
      this.text.current.classList.toggle( 'block' );
      this.image.current.classList.toggle( 'block' );
      this.techs.current.classList.toggle( 'block' );
      this.title.current.classList.toggle( 'hide' );
      this.curtain.current.classList.remove( 'curtainOut' );
      this.curtain.current.classList.add( 'curtainIn' );
    }
	}

  handleMouseLeave() {
    if ( this.isDesktop()) {
      this.text.current.classList.toggle( 'block' );
      this.image.current.classList.toggle( 'block' );
      this.techs.current.classList.toggle( 'block' );
      this.title.current.classList.toggle( 'hide' );
      this.curtain.current.classList.add( 'curtainOut' );
      this.curtain.current.classList.remove( 'curtainIn' );
	  }
  }

  render() {
    const baseClass = 'portfolio__content';
    const {
      title, img, text, href, name, techs
    } = this.props;
    
    return(
      <div
        ref={this.tile}
        className={ baseClass + '--tile' }
      >
        <a href={ href }>
          <div
            ref={this.wrapper}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            className={ baseClass + '--tile-wrapper' }
          >
            <h4
              ref={this.title}
              className={ baseClass + '--tile-title' }>
              { title }
            </h4>
            <p
              ref={this.text}
              className={ baseClass + '--tile-text' }>
              { text }
            </p>
            <img
              ref={this.image}
              alt={ title + 'project image' }
              className={ baseClass + '--tile-image' }
              src={ img } 
            />
            <div
              ref={this.techs}
              className={ baseClass + '--tile-techs' }
            >
              { techTilesBuilder( techs ) }
            </div>
          </div>
          <div
            ref={this.curtain}
            className={ baseClass + "--tile-bg tile-" + name}
          />
        </a>
      </div>
    );
  }
}
