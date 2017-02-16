import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import FontTest from 'modules/font-test';
import LazyLoad from 'modules/lazy-load';
import Todos from 'modules/todos';

const Module = ()=>(<div>module</div>);
const Home = ()=>(<div>home</div>);

const navigationDirective = [
    {to:'/todos/all', displayText:'Todo'},
    {to:'/font-test', displayText:'Font test'},
    {to:'/lazy-load', displayText:'Lazy load'},
];

const routes = (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/font-test" component={FontTest} />
        <Route path="/lazy-load" component={LazyLoad} />
        <Route path="/todos/:filterType" component={Todos} />
    </Switch>
);

export {routes, navigationDirective};
