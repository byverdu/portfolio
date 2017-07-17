import React, { Component } from 'react';
import Icon from './icon';
export default class FooterItem extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      data: this.props.data
    };
  }

  render() {
    const {
      href, id, viewBox, path
    } = this.state.data;
    return(
      <a href={ href }>
        <Icon data={{id, viewBox, path}} />
      </a>
    );
  }
}