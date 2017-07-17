import React, { Component } from 'react';

export default class Icon extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      data: props.data
    }
  }

  render() {
    const {
      id, viewBox, path
    } = this.state.data;
    return (
      <svg
      className="portfolio__footer--icon"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        id={ id }
        viewBox={ viewBox }>
        <path d={ path } />
      </svg>
    )
  }
}