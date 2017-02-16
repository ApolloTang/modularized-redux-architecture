if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: modules/root/index.js'); // eslint-disable-line no-console
}

import React from 'react';
import config from './config';
import { saveState as saveStateToLocalStorage } from './local-storage';

window.addEventListener("beforeunload", function (e) {
    if (config.shouldPersistStoreState) {
        saveStateToLocalStorage( store.getState() );
        return null;
    }

    (e || window.event).returnValue = null;
    return null;
    // http://stackoverflow.com/questions/7255649/window-onbeforeunload-not-working
});


import style from './style';
import { Provider } from 'react-redux';
import store from './store';
import { ConnectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import App from 'modules/app';
import {routes, navigationDirective} from './routes';
import SimpleNavigation from 'widgets/simple-navigation';

const Root = ()=>(
    <div className={`root ${style['module-style']}`}>
        <Provider store={store}>
            <ConnectedRouter history={createBrowserHistory()}>
                <App
                    Navigation={ <SimpleNavigation navigations={navigationDirective}/> }
                    routes={routes}
                />
            </ConnectedRouter>
        </Provider>
    </div>
 );

export default Root;
export {navigations};

