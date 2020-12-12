import { applyMiddleware, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers';
// import rootSaga from './saga';   
// import { LOGOUT } from './actions/actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import apiMiddleware from './middlewares/apiMiddleware';



export default function configureStore() {
    // const sagaMiddleware = createSagaMiddleware({ onError });

     const middlewares = [apiMiddleware];

    const enhancers = [applyMiddleware(...middlewares)];


    
    const rootReducer = (state, action) => {
        // if (action.type === LOGOUT) {
        //     return appReducer(undefined, action);
        //}

        return appReducer(state, action);
    };

    const store = createStore(rootReducer, {}, composeWithDevTools(...enhancers));

    // sagaMiddleware.run(rootSaga);

    return store;
} 

export const store = configureStore(); 