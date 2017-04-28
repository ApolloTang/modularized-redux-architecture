import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';


import {mapStoreToProps, mapDispatchToProps} from './selector';


class UserCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.handle_selectUser = this.handle_selectUser.bind(this);
    this._cache = {};
  }
  componentDidMount() {
    console.log('user view: ', this.props)
    const userId = this._cache.userId = this.props.match.params.userId;
    const isNew = /^new$/i.test(userId)
    if (!isNew) {
      this.props.dispatch_init(userId);
    }
  }
  handle_selectUser(userId) {
    this.props.dispatch_selectUser(userId);
  }
  render() {
    const userId = this.props.match.params.userId;

    // return (this.props.isLoading) ? (
    return (false) ? (
      <div>
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      </div>
    ):(
      <div>
        <div>{this._cache.userId}</div>
      </div>
    )
  }

};

export default connect(mapStoreToProps, mapDispatchToProps)(UserCatalog);

