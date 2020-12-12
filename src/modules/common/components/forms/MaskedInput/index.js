import React from 'react';
import InputMask from 'react-input-mask';
import InputText from '../InputText';

export default function MaskedInput({mask, onChange, value, onBlur, ...rest}) {
//   const handleChange = ({ target: { value } }) => {
//     onChange(value);
// };  
const handleChange = (value) => {
   onChange(value);
 };  
  return (
        <InputMask
    mask= {mask}
    value={value}
    onChange={handleChange}
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