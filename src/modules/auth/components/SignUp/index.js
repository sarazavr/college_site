import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Field, withFormik} from 'formik';
import { FormikInput, FormikMaskedInput, FormikSelect, FormikSwitch } from '../../../common/components/forms/formikFields';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 function SignUp( {
  handleSubmit,
  groupsOptions,
  values,
  ...rest
  
 }) {
  const classes = useStyles();


  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Реєстрація
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          
        
        <Field
            component = {FormikSwitch}   
            variant="outlined"
            required
            onLabel="Студент"
            offLabel="Абітурієнт"
            name='isStudent'
          />
        
        
        <Field
            component = {FormikInput}   
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="first_name"
            placeholder= "Ім'я"
            autoFocus
          />

        <Field
            component = {FormikInput}   
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="last_name"
            placeholder= "Прізвище"
            autoFocus
          />

        <Field
            component = {FormikInput}   
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="father_name"
            placeholder= "По-батькові"
            autoFocus
          />



          <Field
            component = {FormikInput}   
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            placeholder='Введіть пошту'
            autoFocus
          />

        {/* <Field
            component = {FormikInput}   
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            placeholder='Введіть номер'
            autoFocus
        >
            <InputMask mask="(+38) 999 999 99 99" maskChar=" " />
        </Field> */}


          <Field
            component = {FormikInput}   
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            placeholder='Ваш номер телефону'
            autoFocus
            mask="(+38) 999 999 99 9" 
          />

          <Field
           component = {FormikInput}

           variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            autoComplete="password"
            placeholder='введіть пароль'
          />

        <Field
           component = {FormikInput}

           variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            type="password"
            autoComplete="password"
            placeholder='підтвердіть пароль'
          />

          { values.isStudent && <Field 
           component = {FormikSelect}
            label="Група"
            options= {groupsOptions}
            required
            name="group_id"
          />}


          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Вхід
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Вже є аккаунт"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
 export default withFormik ({
  mapPropsToValues: () => ({ phone:'', group_id:'', confirmPassword: '', first_name:'', last_name:'', father_name:'',  email: '', password:'', isStudent: false }),
  handleSubmit: (values,{props}) => {
   props.onSubmit (values); 
  
  },
 }) (SignUp)