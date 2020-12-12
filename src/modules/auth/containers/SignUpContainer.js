import React,{useEffect} from 'react'

import { connect } from 'react-redux';
import {getGroupListAction, signUpEnrolleeAction} from '../redux/actions'
import SignUp from '../components/SignUp';
import { getGroupList } from '../redux';

function SignUpContainer({signUpEnrollee, getGroups, groups} ) { 
    useEffect(()=>{
      getGroups();
    },[])
    const groupsOptions = groups.map(({group_name,id})=>{
      return {
        value: id, 
        label: group_name
      }
    })
    return (
        
        <SignUp onSubmit={signUpEnrollee} groupsOptions={groupsOptions} />

    )
    
}
// часть редакт передаем в комп
const mapStateToProps = (state) => {
    return {
      groups:getGroupList(state)
    }
  }
  //в объекте вот этот сейнап создаем ключ, и значение и тыры пыры
const mapDispatchToProps = {signUpEnrollee: signUpEnrolleeAction, getGroups: getGroupListAction}



export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUpContainer)