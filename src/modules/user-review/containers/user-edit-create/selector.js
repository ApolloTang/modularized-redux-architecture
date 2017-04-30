import _ from 'lodash';
import Action from './action';
import {nameSpace} from '../../config';

const mapStoreToProps = store=>{
  const users = _.get(store, `modules.${nameSpace}.resources.users`, null);
  const isLoading = _.get(store, `modules.${nameSpace}.session.userView.isLoading`, true);
  return {
    users,
    isLoading
  }
};

const mapDispatchToProps = dispatch => ({
  dispatch_draftInit(userId) { dispatch(Action.draftInit(userId) ) },
  dispatch_draftChanged(data) { dispatch(Action.draftChanged(data) ) },
  dispatch_draftSubmit(userId) { dispatch(Action.darftSubmit(userId) ) },
  dispatch_draftCancel() { dispatch(Action.draftTearDown() ) }
});


export {mapStoreToProps, mapDispatchToProps};
