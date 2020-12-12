import { axiosInstance } from "../../configs";
import { failAction, startAction, successAction } from "../actions";

// оно передает экшен на бэк
const ERROR_DURING_API_CALL_MSG = 'Error happened during API call.';
const UNAUTHORIZED_CODE = 401;


const apiMiddleware = (store) => (next) => async (action) => {
    const { endpoint, type, method, data:params } = action;

    if (!endpoint) {
        return next(action);
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }

    const actionWith = (data) => ({ ...action, ...data, endpoint: undefined });

    store.dispatch(actionWith({ type: startAction(type) }));

    // const params = type === 'get' ? params : null;


     try {
      const {data, status, ...rest } = await axiosInstance.request({
            method,
            data:params ,
            url: endpoint  
        });
        
//если 200 то все работает и вот получаешь свои рреспонсы 
      if (status >= 200 && status < 300) {
        store.dispatch(
            actionWith({
                response: data,
                type: successAction(type),
            }),
        );
      } else {
          const error = new Error();
          error.status = status;
          error.response = data;
      
          throw error;
        } 
     } catch (error) {
    console.error (error)
            const redirectToLogin = error.status === UNAUTHORIZED_CODE && window.location.hostname !== 'localhost';
    
            if (redirectToLogin) {
                window.location.href =  '/sign-in';
            }
    
            store.dispatch(
                actionWith({
                    error: error || ERROR_DURING_API_CALL_MSG,
                    type: failAction(type),
                }),
            );
    
            return { error };
     }  
};

export default apiMiddleware;