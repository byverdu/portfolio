import { aboutData } from '../data';

export function lettering( htmlElement ) {

  // This refactoring it's really improving the code??? :(

  let countBtags = 0;
  const withBTags = htmlElement.textContent.split( '' )
    .map(( item ) => {
      if ( item !== ' ' ) {
        const bTag = document.createElement( 'b' );
        bTag.textContent = item;
        bTag.classList.add( `char-${countBtags}` );
        countBtags += 1;
        return bTag;
      } else {
        countBtags = 0;
      }
    });

  const obj = {};
  let iterate = true;
  let count = 0;
  const copy = [ ...withBTags ];

  while ( iterate ) {
    const undefPos = copy.indexOf( undefined );
    const splicePos = undefPos !== -1 ? ( undefPos + 1 ) : copy.length;

    obj[ count ] = copy.splice( 0, splicePos );
    count += 1;
    iterate = undefPos !== -1;
  };

  htmlElement.innerHTML = '';

  Object.keys( obj )
    .map( key => {
      let span = document.createElement( 'span' );
      span.classList.add( `group-${key}` );
      obj[ key ].forEach( it => {
        if ( it ) {
          span.appendChild( it );
        }
      });
      return span
    })
    .forEach( item => htmlElement.appendChild( item ));
}

const splitSentences = ( sentences ) => {
  return sentences.map( item => {
    return item.split( '' );
  });
};

const createElement = ( elemToAppend, className ) => {
  const baseClass = 'portfolio__window--content';
  const elem = document.createElement( 'div' );

  elem.classList.add(
    `${baseClass}-item`,
    `${baseClass}-${className}`
  );

  elemToAppend.appendChild( elem );

  return elem;
};

export function printContent( elemToAppend ) {
  let intervalCleared = false;
  const runInterval = ( element, collection ) => {
    let counter = 0;
    const timer = setInterval( function () {
      element.textContent = element.textContent.concat( collection[ counter ]);
      counter++;

      if ( counter >= collection.length ) {
        clearInterval( timer );
        intervalCleared = true;
      }
    }, 100 );
  }

  const convertedData = splitSentences( aboutData );
  const callCreateElemAndInterval = counter => {
    const tempElem = createElement( elemToAppend, counter );
    runInterval( tempElem, convertedData[ counter ]);
  }

  setTimeout(() => {
    document.querySelector( '.portfolio__window--content-0' ).remove();
    let counter = 0;

    callCreateElemAndInterval( counter );

    const secondTimer = setInterval( function () {
      if ( intervalCleared ) {
        counter++;
        
        if ( counter < convertedData.length ) {
          callCreateElemAndInterval( counter );
        } else {
          clearInterval( secondTimer );
        }
      }
      intervalCleared = false;
    }, 100 );
  }, 2000 )
}
