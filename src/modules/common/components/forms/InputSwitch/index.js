import React from 'react'
import  {Grid, Typography, Switch} from '@material-ui/core'
import PropTypes from 'prop-types'

export default function InputSwitch({
    onLabel,
    offLabel,
    onChange,
    name,
    
    value  
 }) {
    // const classes = useStyles();
    const handleChange = ({ target }) => {
        onChange(target.checked);
    }; 
    return (
        <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
        { offLabel && <Grid item>{offLabel}</Grid>} 
          <Grid item>
            <Switch checked={value} onChange={handleChange} name={name} />
          </Grid>
        { onLabel && <Grid item>{onLabel}</Grid>}
        </Grid>
      </Typography>
    );
 } 
 
InputSwitch.propTypes={
    
    error: PropTypes.string,
    onChange: PropTypes.func,
    onLabel: PropTypes.node,
    offLabel: PropTypes.node,
    value:PropTypes.bool,
}




