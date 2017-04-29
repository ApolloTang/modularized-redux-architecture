import _ from 'lodash';
import Action from './action';
import {nameSpace} from '../../config';

const mapStoreToProps = store=>{
  const users = _.get(store, `modules.${nameSpace}.resources.users`, null);
  const isLoading = _.get(store, `modules.${nameSpace}.session.users.isLoading`, true);
  return {
    users,
    isLoading
  }
};

const mapDispatchToProps = dispatch => ({
  dispatch_init() { dispatch(Action.init() ) },
  dispatch_fetchUser(userId) { dispatch(Action.fetchUser(userId) ) },
  dispatch_someAction() { dispatch( Action_someAction() ); }
});


export {mapStoreToProps, mapDispatchToProps};
