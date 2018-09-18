import React, { Component } from 'react';
import { printContent } from '../../utils';
import './About.css';
export default class About extends Component {
  content = undefined;

  componentDidMount() {
    printContent( this.content );
  }
  render() {
    const baseClass = 'portfolio__window';
    return (
      <section
        id="about"
        className={ baseClass }>
        <div className={ baseClass + '--controls'}>
					<div className="control-red"></div>
					<div className="control-orange"></div>
					<div className="control-green"></div>
				</div>
				<div
          ref={elem => this.content = elem}
          className={ baseClass + '--content'}>
            <div className={ baseClass + '--content-item ' + baseClass + '--content-0'}></div>
        </div>
      </section>
    )
  }
}
