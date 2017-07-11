import React, { Component } from 'react';
import { socialBuilder } from '../../builders';

export default class Footer extends Component {
  render() {
    return(
      <footer>
        <ul>
          { socialBuilder }
        </ul>
      </footer>
    );
  }
}