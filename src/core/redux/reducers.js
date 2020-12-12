import { combineReducers } from 'redux';
import { authReducer } from '../../modules/auth/redux/reducers';

export default combineReducers({
    auth: authReducer
});


