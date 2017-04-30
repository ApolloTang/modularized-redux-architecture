import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';


import {mapStoreToProps, mapDispatchToProps} from './selector';


class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.handle_getUser = this.handle_getUser.bind(this);
    this.handle_deleteUser = this.handle_deleteUser.bind(this);
    this._cache = {};
  }
  componentDidMount() {
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
  handle_deleteUser(userId) {
    const isNew = /^new$/i.test(userId)
    if (!isNew) {
      this.props.dispatch_deleteUser(userId)
    }
  }
  render() {
    const httpError  = _.get(this.props, `httpError`, void 0);

    if (this.props.isLoading) {
      return(
        <div>
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>
      )
    }

    const name = _.get(this.props.users, `${this._cache.userId}.name`, void 0);
    if (httpError && !httpError.ok ) {
      return(
        <div>
          This user does not exist, please select another user.
        </div>
      )
    } else {
      return (
        <div>
          <div>{`id: ${this._cache.userId}`}</div>
          <div>{`Name: ${name}`}</div>
          <button onClick={()=>{ this.handle_deleteUser(this._cache.userId) }}>delete this user</button>
        </div>
      )
    }

  }

};

export default connect(mapStoreToProps, mapDispatchToProps)(UserView);

