import React from 'react';
import InputMask from 'react-input-mask';
import InputText from '../InputText';

export default function MaskedInput({mask, onChange, value, onBlur, ...rest}) {
    return (
        <InputMask
    mask= {mask}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  >
    {() => (
      <InputText
      {...rest}
      />
    )}
 </InputMask> 
    )
}