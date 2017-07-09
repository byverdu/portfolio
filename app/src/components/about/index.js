import React, { Component } from 'react';
import { printContent } from '../../utils';

export default class About extends Component {
  componentDidMount() {
    const timers = [ 2000, 15000, 28000, 35000 ];
    printContent( this.refs.content, timers );
  }
  render() {
    const baseClass = 'portfolio__window';
    return (
      <section
        id="section"
        className={ baseClass }>
        <div className={ baseClass + '--controls'}>
					<div className="control-red"></div>
					<div className="control-orange"></div>
					<div className="control-green"></div>
				</div>
				<div
          ref="content"
          className={ baseClass + '--content'}>
            <div className={ baseClass + '--content-item ' + baseClass + '--content-0'}>albert</div>
        </div>
      </section>
    )
  }
}