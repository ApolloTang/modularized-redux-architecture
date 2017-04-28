import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';


import {mapStoreToProps, mapDispatchToProps} from './selector';


import SimpleNavigation from 'widgets/simple-navigation';

const FunctionNavigation = (props)=>{
  const selectedUserId = props.selectedUserId ; // this will be read from session

  const navigationDirective = [
    {to:'/users/new', displayText:'Add User'},
    {to:`/users/${selectedUserId}/edit`, displayText:'Edit User'},
    {to:`/users/${selectedUserId}/assign`, displayText:'Assign Review'},
    {to:`/users/${selectedUserId}/give-review`, displayText:'Give Review'},
    {to:`/users/${selectedUserId}/view-review`, displayText:'View Review'},
  ];

  return(
    <div>
      <SimpleNavigation navigations={navigationDirective}/>
    </div>
  )
}

export default connect(mapStoreToProps, mapDispatchToProps)(FunctionNavigation);
