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
