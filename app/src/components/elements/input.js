import React from 'react';

const baseClass = 'portfolio__contact--form';
const InputTag = props => ( <input {...props} /> );
const TextareaTag = props => ( <textarea {...props} /> );
const Asterisk = ({required}) => required && <b className={ baseClass + "-mark"}>*</b>;

const tagBuilder = ( props ) => {
  const data = {
    type: props.type,
    placeholder: props.placeholder,
    name: props.name,
    id: props.name,
    required: props.required,
    className: `${baseClass}-input`
  }

  return props.tag === 'input' ?
    <InputTag {...data} /> : 
    <TextareaTag {...data} />;
}

const Input = props => (
  <label
    className={ baseClass + "-label" }
    htmlFor={props.name}
  >
    <span
      className={ baseClass + "-span"}
    > 
      {props.label} { <Asterisk {...props} /> }
    </span>
    { tagBuilder( props ) }
  </label>
);

export default Input;
