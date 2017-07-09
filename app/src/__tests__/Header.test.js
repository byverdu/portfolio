import React from 'react';
import Header from '../components/header';
import Nav from '../components/navigation';
import { shallow, mount } from 'enzyme';
import { lettering } from '../utils';
import chai from 'chai';
import sinon from 'sinon';

const expect = chai.expect;
let wrapper;
let mounted;

beforeEach(() => {
    wrapper = shallow( <Header /> );
    mounted = mount( <Header /> );
});


describe( 'Header content', () => {
  it( 'calls componentDidMount', () => {
    sinon.spy( Header.prototype, 'componentDidMount' );    
    mount( <Header /> );
    expect( Header.prototype.componentDidMount.calledOnce )
      .to.equal( true );
  });
  it( 'componentDidMount modifies title', () => {
    mount( <Header /> );
    expect( mounted.html())
      .to.contain( '<b class="char-0">A</b>' );
    expect( mounted.html())
      .to.contain( '<b class="char-0">{</b>' );
  });
})

describe( 'Header content', () => {
  it( 'contains a <header> element', () => {
    expect( wrapper.html()).to.contain( '</header>' );
    expect( wrapper.hasClass( 'portfolio__header' )).to.eql( true );
  });

  it( '<header> element has <Nav> child', () => {
    expect( wrapper.childAt( 0 ).type()).to.eq( Nav );
  });

  it( '<header> element has heading 1 with title', () => {
    const heading = wrapper.find( 'h1' );
    expect( heading.text()).to.contain( 'Albert Vallverdu' );
    expect( mounted.ref( 'name' ).text()).to.eq( 'AlbertVallverdu' );
    expect(
      heading.hasClass( 'portfolio__header--title-name' )
      ).to.eql( true );
  });
  it( '<header> element has heading 6 with title', () => {
    const heading = wrapper.find( 'h6' );
    expect( heading.text()).to.contain( 'Web Developer {Javascript} Enthusiast' );
    expect( mounted.ref( 'spec' ).text()).to.eq( 'WebDeveloper{Javascript}Enthusiast' );
    expect(
      heading.hasClass( 'portfolio__header--title-spec' )
      ).to.eql( true );
  });
})
