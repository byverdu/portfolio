import { aboutData } from '../data';

export function lettering( htmlElement ) {
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

  const text = splitText( htmlElement.textContent );
	const tempSpans = createElements( text );
	
	htmlElement.innerHTML = '';
	tempSpans.forEach( item => htmlElement.appendChild( item ));
}

export function printContent( elemToAppend, timers ) {
  // split every letter into sentence
  const splitSentences = ( sentences ) => {
    return sentences.map( item => {
      return item.split( '' );
    });
  };

  const createElement = ( className ) => {
    const elem = document.createElement( 'div' );
      elem.classList.add(
        'portfolio__window--content-item',
        `portfolio__window--content-${className}`
      );
      elemToAppend.appendChild( elem );
    return elem;
  };

  function delay( timer ) {
    return new Promise(( resolve ) => { 
        setTimeout( resolve, timer );
    });
  }
  
  // adding 
  const runInterval = ( element, collection ) => {
    let counter = 0;
    const length = collection.length;
    const timer = setInterval( function() {
      element.textContent = element.textContent.concat( collection[ counter ]);
      counter++;
      if ( counter >= length ) {
        clearInterval( timer );
      }
    }, 100 );
  }

  //
  const convertedData = splitSentences( aboutData );
  for ( let counter = 0; counter < convertedData.length; counter++ ) {
    delay( timers[ counter ])
      .then(() => {
        const placeholder = document.querySelector( `.portfolio__window--content-${counter}` );
        const tempElem = createElement( counter );
        if ( placeholder ) {
          placeholder.remove();
        }
        runInterval( tempElem, convertedData[ counter ]);
      });
  }
}
