import React, { Component } from 'react';
import { formBuilder } from '../../builders';
import './Contact.css';
export default class Contact extends Component {
  deletePrevErrors( className ) {
    const prevErrors = document.querySelectorAll( `.${className}` );

    if ( prevErrors.length > 0 ) {
      [].forEach.call( prevErrors, item => item.remove());
    }
  }

  handleClick( event ) {
    event.preventDefault();
    const errors = this.refs.form.querySelectorAll( 'input:invalid' );
    const className = 'portfolio__contact--form-error';

    this.deletePrevErrors( className );

    [].forEach.call( errors, item => {
      const error = document.createElement( 'span' );
      error.textContent = item.validationMessage;
      error.classList.add( className )
      item.parentElement.insertAdjacentElement( 'afterend', error );
    });

    setTimeout(() => {
      this.deletePrevErrors( className );
    }, 5000 );
  }

  render() {
    const baseClass = 'portfolio__contact'
    return(
      <section id="contact" className={ baseClass }>
				<form
          method="post"
          ref="form"
          className={ baseClass + "--form"}
        >
          <h2 className={ baseClass + "--title"} >Say hello to Albert!</h2>
          { formBuilder }
          <button
              className="portfolio__contact--form-btn"
              type="submit"
              onClick={this.handleClick.bind( this )}
            >
              Submit
            </button>
				</form>
        <div className="portfolio__contact--image"></div>
      </section>
    );
  }
}