import React, { Component } from 'react';
import { formBuilder } from '../../builders';

export default class Contact extends Component {
  handleClick( event ) {
    event.preventDefault();
    window.alert( 'Bazingaaa !!!' );
  }

  render() {
    return(
      <section id="contact">
        <h2>Say hello to Albert!</h2>
				<form>
          { formBuilder }
					<button
            type="submit"
            onClick={this.handleClick.bind( this )}
          >
            Submit
          </button>
				</form>
      </section>
    );
  }
}