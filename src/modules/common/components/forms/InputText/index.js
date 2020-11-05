 
import React from 'react';
import PropTypes from 'prop-types';
import { TextField} from '@material-ui/core';
import {useStyles} from './styles';
import FormError from '../FormError';


 export default function InputText({
    label,
    info,
    error,
    type = 'text',
    autoHeight,
    InputProps = {},
    InputLabelProps = {},
    onChange,
    ...rest
 }) {
    const classes = useStyles();
    const handleChange = ({ target: { value } }) => {
        onChange(value);
    };
    return (
        <TextField
            type={type}
            variant="outlined"
            error={!!error}
            helperText={<FormError error={error} />}
            {...rest}
            onChange={handleChange}
        />
    );
 } 
 
InputText.propTypes={
    label: PropTypes.string,
    type: PropTypes.string,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    autoHeight: PropTypes.bool,
}
 
 