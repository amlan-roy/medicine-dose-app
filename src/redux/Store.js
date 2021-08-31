import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './reducers/appReducers';

const rootReducers = combineReducers({ appReducer });
const Store = createStore(rootReducers, applyMiddleware(thunk));

export default Store;
