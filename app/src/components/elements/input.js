import React, { Component } from 'react';

export default class Input extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      data: props
    }
  }

  tagBuilder( data, baseClass ) {
    const {
      tag, type, placeholder, name, required
    } = this.state.data;

    return tag === 'input' ?
    <input
          className={ baseClass + "-input" }
          id={name}
          name={name}
          required={required}
          type={type}
 placeholder={placeholder} /> : 

    <textarea
          className={ baseClass + "-input" }
          id={name}
          name={name}
          required={required}
          type={type}
          placeholder={placeholder} ></textarea>

  }

  render() {
    const baseClass = 'portfolio__contact--form';
    const {
      label, name, required
    } = this.state.data;
    const asterisk = required ? <b className={ baseClass + "-mark"}>*</b> : null;
    return(
      <label className={ baseClass + "-label" } htmlFor={name}>
				<span className={ baseClass + "-span"}> {label} { asterisk }</span>
				{ this.tagBuilder( this.state.data, `${baseClass}` ) }
			</label>
    );
  }
}
