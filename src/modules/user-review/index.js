import React, {Component} from 'react';
import Layout from './layout';
import routes from './routes';

import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';

const UserCat = ()=>{
  return(
    <div>
      <div> User Catelogue </div>
      <NavLink to={'/users/1'} activeClassName="is-active">user 1</NavLink>
      <NavLink to={'/users/2'} activeClassName="is-active">user 2</NavLink>
      <NavLink to={'/users/3'} activeClassName="is-active">user 3</NavLink>
    </div>
  )
};

import SimpleNavigation from 'widgets/simple-navigation';
const Navigation = (props)=>{
  const selectedUserId = 1; // this will be read from session
  const navigationDirective = [
    {to:'/users/new', displayText:'Add User'},
    {to:`/users/${selectedUserId}/edit`, displayText:'Edit User'},
    {to:`/users/${selectedUserId}/assign`, displayText:'Assign Review'},
    {to:`/users/${selectedUserId}/give-review`, displayText:'Give Review'},
    {to:`/users/${selectedUserId}/view-review`, displayText:'View Review'},
  ];
  console.log('Navigation: ', props)
  return(
    <div>
      <div>Navigation: {JSON.stringify(props)}</div>
      <SimpleNavigation navigations={navigationDirective}/>
  </div>
  )
}

import style from './style';
class ModuleRoot extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    console.log('user-review props: ', this.props)
    return (
      <Layout
        className={`user-review ${style['module-style']}`}
        UserCatelog={<UserCat/>}
        Navigation={<Navigation userId={this.props.match.params.userId}/>}
        routes={routes}
        />
    );
  }
}

export default ModuleRoot;


