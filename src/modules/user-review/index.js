import React, {Component} from 'react';
import Layout from './components/layout/';
import UserCatelog from './containers/user-catelog/';

import routes from './routes';

import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';

import  FunctionNavigation from './containers/function-navigation';

import style from './style';
class ModuleRoot extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    // console.log('user-review props: ', this.props)
    // console.log('user-review FunctionNavigation: ', FunctionNavigation)
    return (
      <Layout
        className={`user-review ${style['module-style']}`}
        UserCatelog={<UserCatelog/>}
        FunctionNavigation={<FunctionNavigation userId={this.props.match.params.userId}/>}
        routes={routes}
        />
    );
  }
}

export default ModuleRoot;


