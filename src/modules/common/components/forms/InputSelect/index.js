import React from 'react'
import  {Select, FormControl,MenuItem, InputLabel } from '@material-ui/core'
import PropTypes from 'prop-types'

export default function InputSelect({
    options=[],
    onChange,
    name,
    label,
    value  
 }) {
    // const classes = useStyles();
    const handleChange = ({ target }) => {
        onChange(target.value);
    }; 
    return (
        <FormControl variant="outlined" margin="normal" fullWidth >
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          label={label}
          name={name}
        
       > 
        {options.map(({value,label})=>(
           <MenuItem value={value} key = {value} >
               
           {label }
           </MenuItem>
        ))}
        </Select>
      </FormControl>
    );
 } 
 
InputSelect.propTypes={
    name: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.node,
    value:PropTypes.bool,
}



