import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';


import {mapStoreToProps, mapDispatchToProps} from './selector';


class UserCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.handle_getUser = this.handle_getUser.bind(this);
    this._cache = {};
  }
  componentDidMount() {
    console.log('user view: ', this.props)
    this.props.dispatch_init();
    const userId = this._cache.userId = this.props.match.params.userId;
    this.handle_getUser(userId);
  }
  componentWillReceiveProps(nextProps) {
    const userId_prev = this.props.match.params.userId
    const userId_next = nextProps.match.params.userId;
    if (userId_prev !== userId_next) {
      // route has change need to get user
      this.handle_getUser(userId_next);
    }
  }
  handle_getUser(userId) {
    const isNew = /^new$/i.test(userId)
    if (!isNew) {
      this.props.dispatch_fetchUser(userId);
      this._cache.userId = userId;
    }
  }
  render() {
    const name = _.get(this.props.users, `${this._cache.userId}.name`, void 0)
    // return (this.props.isLoading) ? (
    return (false) ? (
      <div>
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      </div>
    ):(
      <div>
        <div>{`id: ${this._cache.userId}`}</div>
        <div>{`Name: ${name}`}</div>
      </div>
    )
  }

};

export default connect(mapStoreToProps, mapDispatchToProps)(UserCatalog);

