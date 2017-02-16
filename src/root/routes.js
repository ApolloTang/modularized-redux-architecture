import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import FontTest from 'modules/font-test';
import LazyLoad from 'modules/lazy-load';
import Todos from 'modules/todos';


const navigationDirective = [
    {to:'/', displayText:'Home'},
    {to:'/font-test', displayText:'Font test'},
    {to:'/lazy-load', displayText:'Lazy load'},
    {to:'/todos/all', displayText:'Todo'},
];


const routes = (
    <Switch>
        <Route exact path="/" component={()=>(<div>home</div>)} />
        <Route path="/font-test" component={FontTest} />
        <Route path="/lazy-load" component={LazyLoad} />
        <Route path="/todos/:filterType" component={Todos} />
    </Switch>
);

export {routes, navigationDirective};
