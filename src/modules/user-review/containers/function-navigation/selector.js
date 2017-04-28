import _ from 'lodash';
import Action from './action';
import {nameSpace} from '../../config';

const mapStoreToProps = (store, ownProps)=>{
  const selectedUserId = _.get(store, `modules.userReview.session.userCatelog.id_selectedUser`, void 0);
  return {
    ownProps,
    selectedUserId
  }
};

const mapDispatchToProps = dispatch => ({
  dispatch_someAction() { dispatch( Action_someAction() ); }
});


export {mapStoreToProps, mapDispatchToProps};
