import React from 'react';
import Nav from '../components/navigation';
import { shallow } from 'enzyme';
import chai from 'chai';

const expect = chai.expect;
let nav;

beforeEach(() => {
  nav = shallow( <Nav /> );
}); 

it( 'contains a <nav> element', () => {
  expect( nav.html()).to.contain( '<nav>' );
});

it( '<nav> element has 4 children', () => {
  expect( nav.find( 'li' )).to.have.length( 4 );
  expect( nav.find( 'li' ).at( 0 ).text().trim()).to.be.eq( 'about' );
});