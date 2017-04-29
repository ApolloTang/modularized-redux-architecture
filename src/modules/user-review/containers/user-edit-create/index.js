import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';


import {mapStoreToProps, mapDispatchToProps} from './selector';


class UserView extends React.Component {
  constructor(props) {
    super(props);

    this.handle_getUser = this.handle_getUser.bind(this);
    this.handle_save = this.handle_save.bind(this);
    this.handle_cancel = this.handle_cancel.bind(this);

    this._cache = {};
  }
  componentDidMount() {
    this.props.dispatch_init();
    const userId = this._cache.userId = this.props.match.params.userId;
    this.handle_getUser(userId);
    // init draft here
  }
  handle_getUser(userId) {
    const isNew = /^new$/i.test(userId)
    if (!isNew) {
      this.props.dispatch_fetchUser(userId);
      this._cache.userId = userId;
    }
  }
  handle_save(userId) {
  }
  handle_cancel(userId) {
  }
  render() {
    const name = _.get(this.props.users, `${this._cache.userId}.name`, void 0)
    return (this.props.isLoading) ? (
    // return (false) ? (
      <div>
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      </div>
    ):(
      <div>
        <div>Edit/Create User</div>
        <div>{`id: ${this._cache.userId}`}</div>
        <div> <input type="text" value={name}/>{}</div>

        <button onClick={this.handle_save}>Save</button>
        <button onClick={this.handle_cancel}>cancel</button>
      </div>
    )
  }

};

export default connect(mapStoreToProps, mapDispatchToProps)(UserView);

