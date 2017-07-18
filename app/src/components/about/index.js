import React, { Component } from 'react';
import { printContent } from '../../utils';
import './About.css';
export default class About extends Component {
  componentDidMount() {
    const timers = [ 1000, 17000, 32100, 40000 ];
    printContent( this.refs.content, timers );
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
          ref="content"
          className={ baseClass + '--content'}>
            <div className={ baseClass + '--content-item ' + baseClass + '--content-0'}></div>
        </div>
      </section>
    )
  }
}
