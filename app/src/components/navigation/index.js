import React, { Component } from 'react';
import { navLinkBuilder } from '../builders';

export default class Nav extends Component {
  render() {
    return(
      <nav>
        <ul>
          { navLinkBuilder }
        </ul>
      </nav>
    );
  }
}
