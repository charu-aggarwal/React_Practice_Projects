import {createStore ,applyMiddleware, combineReducers } from 'redux';
import {CounterReducer} from './Reducer/counterReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//redux dev tool
import {composeWithDevTools} from 'redux-devtools-extension';


const rootReducer = combineReducers({
 counter:CounterReducer,
});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));

export default store;