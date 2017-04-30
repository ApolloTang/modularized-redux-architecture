import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';

import ReduxInput from 'widgets/redux-input';
import FormField from 'widgets/form-field';

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

    this.onFieldChange = this.onFieldChange.bind(this);

    this.state = { };

    this._cache = {
      isValid_userId: true
    };
  }
  componentWillMount() {
    const isNew = (this.props.match.path === '/users/new');

    const _userId = this._cache.userId = this.props.match.params.userId;
    const userId = isNew ? void 0 : _userId;

    if ( _userId && !isValid_userId(_userId)) {
      console.error(`[Error] userId ${userId} is invalid`); // eslint-disable-line no-console
      this._cache.isValid_userId = false;
    }
  }
  componentDidMount() {
    this.props.dispatch_draftInit(this._cache.userId);
  }
  handle_draftChanged(data) {
    this.props.dispatch_draftChanged(data);
  }
  handle_save() {
    const userId = this._cache.userId;
    this.props.dispatch_draftSubmit(userId);
  }
  handle_cancel() {
    this.props.dispatch_draftCancel();
  }

  onFieldChange (fieldName) {
    return fieldValue => {
      const { campaignId, adId, campaignBillingEnabled } = this.props;
      // if (adId) {
      //     _setAction({isNew: false});
      // } else {
      //     _setAction({isNew: true});
      // }

      const newFormData = {
        [fieldName]: fieldValue
      };
      this.handle_draftChanged(newFormData);
    };
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

    if (!this._cache.isValid_userId || (httpError && !httpError.ok )) {
      return(
        <div>
          This user does not exist
        </div>
      )
    }

    const _name = _.get(this.props.users, `${this._cache.userId}.name`, void 0)
    const name = _name ? _name : '';

    return (
      <div>
        <div>Edit/Create User</div>
        <div>{`id: ${this._cache.userId}`}</div>
        <FormField
          label="Name"
          errors={[]}
          showErrors={false}
          isRequired={false} >
          <ReduxInput
            value={name}
            onChange={this.onFieldChange('name')} />
        </FormField>
        <button onClick={this.handle_save}>Save</button>
        <button onClick={this.handle_cancel}>cancel</button>
      </div>
    )
  }

};

export default connect(mapStoreToProps, mapDispatchToProps)(UserView);

