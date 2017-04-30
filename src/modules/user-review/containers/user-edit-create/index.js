import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';


import {mapStoreToProps, mapDispatchToProps} from './selector';

function isValid_userId(userId) {
  return (userId.match(/^[0-9a-fA-F]{24}$/) || userId.match(/^new$/i));
};

class UserView extends React.Component {
  constructor(props) {
    super(props);

    this.handle_draftChanged = this.handle_draftChanged.bind(this);
    this.handle_save = this.handle_save.bind(this);
    this.handle_cancel = this.handle_cancel.bind(this);

    this._cache = {};
  }
  componentDidMount() {
    const isNew = (this.props.match.path === '/users/new');
    if ( _userId && !isValid_userId(_userId)) {
      console.log('[Error] userId is invalid'); // eslint-disable-line no-console
      return;
    }
    const _userId = this._cache.userId = this.props.match.params.userId;
    const userId = isNew ? void 0 : _userId;

    this.props.dispatch_draftInit(userId);
  }
  handle_draftChanged(data) {
    this.props.dispatch_draftInit(data);
  }
  handle_save() {
    const userId = this._cache.userId;
    this.props.dispatch_draftSubmit(userId);
  }
  handle_cancel() {
    this.props.dispatch_draftCancel();
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
        <div> <input type="text" value={name} />{}</div>

        <button onClick={this.handle_save}>Save</button>
        <button onClick={this.handle_cancel}>cancel</button>
      </div>
    )
  }

};

export default connect(mapStoreToProps, mapDispatchToProps)(UserView);

