import config from './config';
const PROD = (process && process.env && process.env.PROD === true);

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import middleware from  './middleware';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

import { connectRouter } from 'connected-react-router';

import { saveState, loadState as loadPersistedState } from './local-storage';
const preloadedState = loadPersistedState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


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


window.addEventListener('beforeunload', cb_saveStateToLocalStorage);

export default store;



function cb_saveStateToLocalStorage(e) {
    if (config.shouldPersistStoreState) {
        saveState( store.getState() );
        return null;
    }

    (e || window.event).returnValue = null;
    return null;
    // http://stackoverflow.com/questions/7255649/window-onbeforeunload-not-working
};

