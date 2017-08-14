import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import NotFound from 'components/not-found';

import FontTest from 'modules/font-test';
import LazyLoad from 'modules/lazy-load';
import Todos from 'modules/todos';
import Todos2 from 'modules/todos2';
import Playground from 'modules/playground';


const navigationDirective = [
    {to:'/', displayText:'Home'},
    {to:'/todos/all', displayText:'Todo'},
    {to:'/todos2/all', displayText:'Todo2'},
    {to:'/font-test', displayText:'Font test'},
    {to:'/lazy-load', displayText:'Lazy load'},
    {to:'/playground', displayText:'playground'}
];



const routes = (
  <Switch>
    <Route exact path="/" component={()=>(<div>home</div>)} />
    <Route path="/font-test" component={FontTest} />
    <Route path="/lazy-load" component={LazyLoad} />
    <Route path="/todos/:filterType" component={Todos} />
    <Route path="/todos2/:filterType" component={Todos2} />
    <Route path="/playground" component={Playground} />
    <Route component={NotFound}/>
  </Switch>
);

export {routes, navigationDirective};
