import { lettering } from '../utils';
import chai from 'chai';

const expect = chai.expect;

const splitText = ( sentence ) => {
  return sentence.split( ' ' )
    .map( item => item.split( '' ));
};

const createElements = ( letters ) => {
		let count = 0;
		const result = [];
		while ( count < letters.length ) {
			const span = document.createElement( 'span' );
			span.classList.add( `group-${count}` );
			const temp = letters[ count ].map(( item, index ) => {
				const bTag = document.createElement( 'b' );
				bTag.textContent = item;
				bTag.classList.add( `char-${index}` );
				return bTag;
			});
			temp.forEach( elem => span.appendChild( elem ))
			result.push( span );
			count ++;
		}
		return result;
	}

describe( 'lettering', () => {
  let sentence;
  let letters;
  let spanTags;
  beforeEach(() => {
    sentence = 'react rocks';
  });

  it( 'is defined', () => {
    expect( lettering ).not.eq( undefined );
    expect( lettering ).to.be.a( 'Function' );
  });

  it( 'should split text', () => {
    letters = splitText( sentence );
    expect( splitText ).to.be.a( 'Function' );
    expect( splitText( sentence ))
      .to.eql([ [ "r","e","a","c","t" ],[ "r","o","c","k","s" ] ]);
  });

  it( 'is creates as much elements as words in sentence', () => {
    spanTags = createElements( letters );
    expect( createElements ).to.be.a( 'Function' );
    expect( spanTags ).to.have.length( 2 );  
    expect( spanTags[ 0 ]).to.be.instanceof( HTMLSpanElement );  
    expect( spanTags[ 0 ].firstElementChild ).to.be.instanceof( HTMLElement );
  });
});