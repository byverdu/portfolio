import React, { Component } from 'react';
import { formBuilder } from '../../builders';
import './Contact.css';
export default class Contact extends Component {
  handleClick( event ) {
    event.preventDefault();
    window.alert( 'Bazingaaa !!!' );
  }

  render() {
    const baseClass = 'portfolio__contact'
    return(
      <section id="contact" className={ baseClass }>
				<form className={ baseClass + "--form"}>
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