const PROD = (process && process.env && process.env.PROD === true);

import {history} from 'root/createHistory';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';

const middleware = [
    thunk,
    routerMiddleware(history), // for dispatching history actions
];

// if (PROD) {
//     middleware.push(
//         createLogger()
//     );
// }

if (!PROD) {
    middleware.push(
        createLogger()
    );
}

export default middleware;

