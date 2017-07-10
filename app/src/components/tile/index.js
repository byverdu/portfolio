import React, { Component } from 'react';
import { techTilesBuilder } from '../../builders';
import { projectsData } from '../../data';

export default class Tile extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      data: props.data
    }
  }
  componentDidMount() {

  }

  render() {
    const baseClass = 'portfolio__content';
    const {
      title, img, text, href, name, techs
    } = this.state.data;
    
    return(
      <div className={ baseClass + '--tile' }>
        <a href={ href }>

          <div
            ref="techs"
            className={ baseClass + '--tile-techs' }>
            { techTilesBuilder( techs ) }
          </div>
        </a>
      </div>
    );
  }
}