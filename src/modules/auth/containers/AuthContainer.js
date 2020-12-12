import { Button, Container } from '@material-ui/core';
import React from 'react'
import SignInContainer from "./SignInContainer"
import SignUpContainer from "./SignUpContainer"
import { connect } from 'react-redux';
import { getIsLoginFormActive, toggleIsLoginActiveAction } from '../redux';

function AuthContainer( {toggleIsLoginActive, isLoginFormActive} ) { 
    const buttonText = isLoginFormActive ? "Зареєструватися": "Вхід";
    return ( 
        <Container> 
            <Button onClick= {toggleIsLoginActive} >
            {buttonText}
            </Button>
            {isLoginFormActive && <SignInContainer/> }  
            {!isLoginFormActive && <SignUpContainer/>}          
        </Container>
     )
    
}

const mapStateToProps = (state) => {
    return {
        isLoginFormActive: getIsLoginFormActive(state)
    }
  }


const mapDispatchToProps = {toggleIsLoginActive:toggleIsLoginActiveAction}



export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthContainer)