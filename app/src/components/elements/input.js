import React, { Component } from 'react';

export default class Input extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      data: props.data
    }
  }

  render() {
    const {
      label, type, placeholder, name
    } = this.state.data;
    return(
      <label for={name}>
				<span> {label} </span>
				<input id={name} type={type} placeholder={placeholder} />
			</label>
    );
  }
}
