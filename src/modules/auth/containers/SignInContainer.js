import React from 'react'

import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import { signInAction } from '../redux';


function SignInContainer({signIn} ) { 
    
    return (
        
        <SignIn onSubmit={signIn} />

    )
    
}

  //в объекте вот этот сейнап создаем ключ, и значение и тыры пыры
const mapDispatchToProps = {signIn: signInAction}



export default connect(
    null,
    mapDispatchToProps
  )(SignInContainer)