import React, { Component } from 'react';
import { techTilesBuilder } from '../../builders';

export default class Tile extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      data: props.data
    }

    this.handleMouseEnter = this.handleMouseEnter.bind( this );
    this.handleMouseLeave = this.handleMouseLeave.bind( this );
    this.getWidthElement = this.getWidthElement.bind( this );
  }
  componentDidMount() {
    this.getWidthElement();
    window.addEventListener( 'resize', this.getWidthElement );
  }

  componentWillUnmount() {
      window.removeEventListener( 'resize', this.getWidthElement );
  }

  getWidthElement() {
    this.refs.wrapper.style.width = `${this.refs.tile.getBoundingClientRect().width}px`;
  }

  handleMouseEnter() {
		this.refs.text.classList.toggle( 'block' );
		this.refs.image.classList.toggle( 'block' );
		this.refs.techs.classList.toggle( 'block' );
		this.refs.title.classList.toggle( 'hide' );
		this.refs.curtain.classList.remove( 'curtainOut' );
		this.refs.curtain.classList.add( 'curtainIn' );
	}

  handleMouseLeave() {
		this.refs.text.classList.toggle( 'block' );
		this.refs.image.classList.toggle( 'block' );
		this.refs.techs.classList.toggle( 'block' );
		this.refs.title.classList.toggle( 'hide' );
		this.refs.curtain.classList.add( 'curtainOut' );
		this.refs.curtain.classList.remove( 'curtainIn' );
	}

  render() {
    const baseClass = 'portfolio__content';
    const {
      title, img, text, href, name, techs
    } = this.state.data;
    
    return(
      <div ref="tile" className={ baseClass + '--tile' }>
        <a href={ href }>
          <div
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            ref="wrapper"
            className={ baseClass + '--tile-wrapper' }
          >
            <h4
              ref="title"
              className={ baseClass + '--tile-title' }>
              { title }
            </h4>
            <p
              ref="text"
              className={ baseClass + '--tile-text' }>
              { text }
            </p>
            <img
              alt={ title + 'project image' }
              ref="image"
              className={ baseClass + '--tile-image' }
              src={ img } 
            />
            <div
              ref="techs"
              className={ baseClass + '--tile-techs' }>
              { techTilesBuilder( techs ) }
            </div>
          </div>
          <div
            ref="curtain"
            className={ baseClass + "--tile-bg tile-" + name}></div>
        </a>
      </div>
    );
  }
}
