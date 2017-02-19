
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

import { ConnectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import App from 'modules/app';
import {routes, navigationDirective} from './routes';
import SimpleNavigation from 'widgets/simple-navigation';

import style from './style';

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

