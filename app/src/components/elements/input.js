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
      label, type, placeholder, name, required
    } = this.state.data;
    return(
      <label className="portfolio__contact--form-label" htmlFor={name}>
				<span className="portfolio__contact--form-span"> {label} </span>
				<input className="portfolio__contact--form-input" id={name} required={required} type={type} placeholder={placeholder} />
			</label>
    );
  }
}
