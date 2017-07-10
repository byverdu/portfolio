import React from 'react';
import Tile from '../components/tile';
import { shallow, mount } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';

const expect = chai.expect;
const data = {
		title: 'Twitter Clone',
		img: 'http://chitter-byver.herokuapp.com/images/chitter.gif',
		text: 'The name says everything',
		href: 'http://twitter.byverdu.es/',
		name: 'twitter',
    techs: [
      'Sass', 'React', 'MEAN', 'Node'
    ]
	};
let wrapper;
let mounted;


beforeEach(() => {
    wrapper = shallow( <Tile data={ data } /> );
    mounted = mount( <Tile data={ data } /> );
});


xdescribe( 'Tile lifecycle', () => {
  it( 'calls componentDidMount', () => {
    sinon.spy( Tile.prototype, 'componentDidMount' );    
    mount( <Tile /> );
    expect( Tile.prototype.componentDidMount.calledOnce )
      .to.equal( true );
  });
})

describe( 'Tile content', () => {
  it( 'contains a <div> element', () => {
    expect( wrapper.html()).to.contain( '</div>' );
    expect( wrapper.hasClass( 'portfolio__content--tile' )).to.eql( true );
  });

  it( '<Tile /> has title, img, text, href, name, techs props', () => {
    const state = wrapper.state().data;
    const keys = Object.keys( state );
    expect( state ).not.equal( undefined );
    expect( keys ).to.be.eql([ 'title', 'img', 'text', 'href', 'name', 'techs' ])
  });

  it( '<Tile /> has a link element', () => {
    const link = wrapper.find( 'a' );
    expect( link ).to.have.length( 1 );
    expect( link.node.props.href ).to.eql( data.href );
  });

  it( '<Tile /> techs props displays in different colors', () => {
    expect( wrapper.find( '.portfolio__content--tile-techs' )).to.have.length( 1 );
    expect( wrapper.find( '.portfolio__content--tile-techs .tech' )).to.have.length( 4 );
  });
})
