if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: modules/root/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';

// React router version v4
import {
  Link
} from 'react-router-dom';

import { Route, Switch } from 'react-router'


import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store from './store';

import App from 'modules/app';
import Todos from 'modules/todos';
import FontTest from 'modules/font-test';
import LazyLoad from 'modules/lazy-load';
import config from './config';

import { saveState as saveStateToLocalStorage } from './local-storage';

import style from './style';

const navigations = [
    {to:'/todos', displayText:'todo'},
    {to:'/font-test', displayText:'font test'},
    {to:'/lazy-load', displayText:'lazy load'},
];

window.addEventListener("beforeunload", function (e) {
    if (config.shouldPersistStoreState) {
        // saveStateToLocalStorage( store.getState() );
        return null;
    }

    (e || window.event).returnValue = null;
    return null;
    // http://stackoverflow.com/questions/7255649/window-onbeforeunload-not-working
});





// store.subscribe(()=>{console.log('change')})
// class Root extends React.Component {
//     constructor(props) { super(props); }
//     render() {
//         return(
//             <div className={`root ${style['module-style']}`}>
//                 <Provider store={store}>
//                     <ConnectedRouter history={history}>
//                         <div> { /* your usual react-router v4 routing */ }
//                             <Switch>
//                                 <Route exact path="/" render={() => (<div>Match</div>)} />
//                                 <Route render={() => (<div>Miss</div>)} />
//                             </Switch>
//                         </div>
//                     </ConnectedRouter>
//                 </Provider>
//             </div>
//         );
//     }
// }

// import  AppLayout  from 'modules/App2';
// class Root extends React.Component {
//     constructor(props) { super(props); }
//     render() {
//         return(
//             <div className={`root ${style['module-style']}`}>
//                 <Provider store={store}>
//                     <Router history={syncHistoryWithStore(browserHistory, store)}>
//                         <AppLayout
//                             Navigation = {<SimpleNavigation />}
//                             AppRoute = {<AppRoute />}
//                         />
//                     </Router>
//                 </Provider>
//             </div>
//         );
//     }
// }

const Module = ()=>(<div>module</div>);
const Home = ()=>(<div>home</div>);

const Nav = () => {
    return (
        <div>
            <div><Link to="/">home</Link></div>
            <div><Link to="/module">module</Link></div>
            <div><Link to="/todos">todos</Link></div>
        </div>
    )
};

const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/module" component={Module} />
        <Route path="/todos/:filterType" component={Todos} />
    </Switch>
);

const AppEntry = ({history}) =>(
    <ConnectedRouter history={history}>
        <div>
            <Nav />
            {routes}
        </div>
    </ConnectedRouter>
);

store.subscribe(()=>{console.log('change: ', store.getState())})
class Root extends React.Component {
    constructor(props) { super(props); }
    render() {
        console.log('todos: ', Todos)
        return(
            <div className={`root ${style['module-style']}`}>
                <Provider store={store}>
                    <AppEntry history={history} />
                </Provider>
            </div>
        );
    }
}



// class Root extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return(
//             <div className={`root ${style['module-style']}`}>
//                 <Provider store={store}>
//                     <Router history={syncHistoryWithStore(browserHistory, store)}>
//                         <Route path="/" component={App} >
//                             <IndexRoute component={()=>(<div className="home">Home</div>)} />
//                             {/*
//                                 <Route path="/todos(/:filterType)" component={Todos} />
//
//                                 The above works, however <Link> will not show active if navigate to
//                                 its decendent (:filterType). The solution is at following as
//                                 mentioned in:
//                                     https://github.com/ReactTraining/react-router/issues/1684
//                             */}
//                             <Route path="/todos" component={Todos} >
//                                 <Route path=":filterType" component={Todos} />
//                             </Route>
//                             <Route path="/font-test" component={FontTest} />
//                             <Route path="/lazy-load" component={LazyLoad} />
//                         </Route>
//                     </Router>
//                 </Provider>
//             </div>
//         )
//     }
// }

export default Root;
export {navigations};

