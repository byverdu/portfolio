import { lettering } from '../utils';
import chai from 'chai';

const expect = chai.expect;

const splitText = (sentence) => {
		return sentence.split(' ')
			.map(item => item.split(''));
	};

describe('lettering', () => {
  it('is defined', () => {
    expect(lettering).not.eq(undefined);
    expect(lettering).to.be.a('Function');
  });

  it('should split text', () => {
    const sentence = 'react rocks';
    expect(splitText).not.eq(undefined);
    expect(splitText).to.be.a('Function');
    expect(splitText(sentence))
      .to.eql([["r","e","a","c","t"],["r","o","c","k","s"]]);
  });
});