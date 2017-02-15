import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const PROD = (process && process.env && process.env.PROD) ? true : false;

const middleware = [ thunk ];

if (PROD) {
} else {
    middleware.push(
        routerMiddleware(history), // for dispatching history actions
        createLogger()
    )
}

export default middleware;

