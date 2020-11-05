import React from 'react';
import PropTypes from 'prop-types';
import { Warning } from '@material-ui/icons';
import {useStyles} from './styles';
 
function FormError({ error }) {
    const classes = useStyles();
    if (!error) {
        return null;
    }
    
    return (
        <span className={classes.errorMessage}>
            <Warning className={classes.errorIcon} />
            {error}
        </span>
    );
}
 
FormError.propTypes = {
    error: PropTypes.string,
};
 
export default FormError;