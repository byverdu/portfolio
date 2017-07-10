import React from 'react';
import About from '../components/about';
import { shallow, mount } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';

const expect = chai.expect;
let wrapper;
let mounted;

beforeEach(() => {
    wrapper = shallow( <About /> );
    mounted = mount( <About /> );
});


describe( 'About lifecycle', () => {
  it( 'calls componentDidMount', () => {
    sinon.spy( About.prototype, 'componentDidMount' );    
    mount( <About /> );
    expect( About.prototype.componentDidMount.calledOnce )
      .to.equal( true );
  });
})

describe( 'About content', () => {
  it( 'contains a <section> element', () => {
    expect( wrapper.html()).to.contain( '</section>' );
    expect( wrapper.hasClass( 'portfolio__window' )).to.eql( true );
  });

  it( '<section> element has a div mocking window buttons', () => {
    expect( mounted.find( '.portfolio__window--controls' )).to.have.length( 1 );
  });
})
