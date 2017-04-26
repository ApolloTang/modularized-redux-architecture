import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import FontTest from 'modules/font-test';
import LazyLoad from 'modules/lazy-load';
import Todos from 'modules/todos';
import Rest from 'modules/rest-testing';
import Users from 'modules/users';


const navigationDirective = [
    {to:'/', displayText:'Home'},
    {to:'/users', displayText:'Users'},
    {to:'/font-test', displayText:'Font test'},
    {to:'/lazy-load', displayText:'Lazy load'},
    {to:'/todos/all', displayText:'Todo'},
    {to:'/rest', displayText:'Rest'}
];


const routes = (
  <Switch>
    {/* <Route exact path="/" component={()=>(<div>home</div>)} /> */}
    {/* <Route exact path="/" render={()=>( <Redirect to="/todos/all"/>)} /> */}
    <Route exact path="/" render={()=>( <Redirect to="/users/"/>)} />
    <Route path="/font-test" component={FontTest} />
    <Route path="/lazy-load" component={LazyLoad} />
    <Route path="/todos/:filterType" component={Todos} />
    <Route path="/rest" component={Rest} />
    <Route path="/users" component={Users} />
  </Switch>
);

export {routes, navigationDirective};
