import React, { Component } from 'react';
import './App.css';
import Header from '../header';
import About from '../about';

export default class App extends Component {
  render() {
    return (
      <main className="portfolio">
				<Header />
				<section className="wrapper">
					<About />
				</section>
			</main>
    );
					// <Content />
					// <Contact />
					// <Footer />				
  }
}
