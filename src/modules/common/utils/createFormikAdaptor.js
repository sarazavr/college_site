import React from 'react';
import { getIn } from 'formik';
 
export const createBaseFormAdaptor = (Component, changeValueGetter = val => val) => ({ field, meta, form, onChange, onBlur, ...rest }) => {
 
    const handleChange = (val) => {
        const actualVal = changeValueGetter(val);
 
        form.setFieldValue(field.name, actualVal);
 
        onChange && onChange(actualVal);
    }
 
    const handleBlur = e => {
        field.onBlur(e);
 
        onBlur && onBlur(e);
    }
 
    const error = getIn(form.touched, field.name)
        ? getIn(form.errors, field.name) : '';
 
    return (
        <Component
            {...rest}
            name={field.name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={field.value}
            error={error}
        />
    );
}
 