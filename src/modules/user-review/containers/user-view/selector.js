import _ from 'lodash';
import Action from './action';
import {nameSpace} from '../../config';

const mapStoreToProps = store=>{
  const userCatelog = _.get(store, `modules.${nameSpace}.resources.userCatelog`, null);
  const isLoading = _.get(store, `modules.${nameSpace}.session.userCatelog.isLoading`, true);
  return {
    userCatelog,
    isLoading
  }
};

const mapDispatchToProps = dispatch => ({
  dispatch_init(userId) { dispatch(Action.init(userId) ) },
  dispatch_someAction() { dispatch( Action_someAction() ); }
});


export {mapStoreToProps, mapDispatchToProps};