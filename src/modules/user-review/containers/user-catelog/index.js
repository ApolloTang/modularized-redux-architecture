import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';


import {mapStoreToProps, mapDispatchToProps} from './selector';


const UserList = ()=>(
    <div>
      <NavLink to={'/users/1'} activeClassName="is-active">user 1</NavLink>
      <NavLink to={'/users/2'} activeClassName="is-active">user 2</NavLink>
      <NavLink to={'/users/3'} activeClassName="is-active">user 3</NavLink>
    </div>
);

class UserCatalog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch_init();
  }
  render() {
    console.log('container: user-catlog:', this.props)
    return (this.props.isLoading) ? (
      <div>
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      </div>
    ):(
      <div>
        <UserList />
      </div>
    )
  }

};

export default connect(mapStoreToProps, mapDispatchToProps)(UserCatalog);

