import React, { Component } from 'react';
import './App.css';
import Header from '../header';
import About from '../about';
import Content from '../content';
import Contact from '../contact';

export default class App extends Component {
  render() {
    return (
      <main className="portfolio">
				<Header />
				<section className="wrapper">
					<About />
					<Content />
					<Contact />
				</section>
			</main>
    );
					// <Footer />				
  }
}
