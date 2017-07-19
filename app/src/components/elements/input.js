import React, { Component } from 'react';

export default class Input extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      data: props.data
    }
  }

  render() {
    const baseClass = 'portfolio__contact--form';
    const {
      label, type, placeholder, name, required
    } = this.state.data;
    const asterisk = required ? <b className={ baseClass + "-mark"}>*</b> : null;
    return(
      <label className={ baseClass + "-label" } htmlFor={name}>
				<span className={ baseClass + "-span"}> {label} { asterisk }</span>
				<input className={ baseClass + "-input" } id={name} required={required} type={type} placeholder={placeholder} />
			</label>
    );
  }
}
