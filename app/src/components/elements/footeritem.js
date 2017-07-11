import React, { Component } from 'react';

export default class FooterItem extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      data: this.props.data
    };
  }

  markup( image ) {
    return {
      __html: image
    }
  }

  render() {
    const {
      href, image
    } = this.state.data;
    return(
      <a href={ href }>
        <div dangerouslySetInnerHTML={ this.markup( image ) }></div>
      </a>
    );
  }
}