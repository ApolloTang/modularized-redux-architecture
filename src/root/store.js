import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux';
import rootReducer from './reducers';
import middleware from  './middleware';

import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

import config from './config';
import { loadState as loadPersistedState } from './local-storage';

const PROD = (process && process.env && process.env.PROD) ? true : false;
const preloadedState = loadPersistedState();



import { routerMiddleware } from 'connected-react-router';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   connectRouter(history)(rootReducer), // new root reducer with router state
//   // preloadedState,
//   composeEnhancers(
//     applyMiddleware(...middleware)
//   ),
// );


let store;
if (PROD) {
    if (config.shouldPersistStoreState && preloadedState) {
        store = createStore(
            connectRouter(history)(rootReducer),
            preloadedState,
            applyMiddleware(...middleware)
        );
    } else {
        store = createStore(
            connectRouter(history)(rootReducer),
            applyMiddleware(...middleware)
        );
    }
} else {
    if (config.shouldPersistStoreState && preloadedState) {
        store = createStore(
            connectRouter(history)(rootReducer),
            preloadedState,
            composeEnhancers(
                applyMiddleware(...middleware)
            )
        );
    } else {
        store = createStore(
            connectRouter(history)(rootReducer),
            composeEnhancers(
                applyMiddleware(...middleware)
            )
        );
    }
}


export default store;

