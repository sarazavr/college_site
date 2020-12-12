import { callApi } from "../../../../core/redux/actions";

export const SIGN_UP = callApi('SIGN_UP');

export const signUpEnrolleeAction = (data) => ({
    type: SIGN_UP,
    endpoint: 'enrollees',
    data,
    method: 'POST',
})

export const GET_GROUP_LIST = callApi('GET_GROUP_LIST');

export const getGroupListAction = (data) => ({
    type: GET_GROUP_LIST,
    endpoint: 'groups',
    data,
    method: 'GET',
})

export const SIGN_IN = callApi ('SIGN_IN');

export const signInAction = (data) => ({
    type: SIGN_IN,
    endpoint: 'users/auth',
    data,
    method: 'POST',
})

export const TOGGLE_IS_LOGIN_ACTIVE = 'TOGGLE_IS_LOGIN_ACTIVE';

export const toggleIsLoginActiveAction = () => ({
    type: TOGGLE_IS_LOGIN_ACTIVE,
})


