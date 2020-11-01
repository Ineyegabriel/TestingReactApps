import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/';
import thunk from 'redux-thunk';

export const middlewares = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(rootReducer);