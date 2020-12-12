import { successAction } from "../../../../core/redux/actions";
import { GET_GROUP_LIST, TOGGLE_IS_LOGIN_ACTIVE } from "../actions";

const getInitialState = () => ({
groups: [],
isLoginFormActive: true
})

export function authReducer(state = getInitialState(), action) {
    switch (action.type) {
       case(successAction (GET_GROUP_LIST)):{
           return {...state, groups: action.response }
       }
       case(TOGGLE_IS_LOGIN_ACTIVE) : {
            return {...state, isLoginFormActive: !state.isLoginFormActive }
       }
        default: {
            return state;
        }
    }
} 