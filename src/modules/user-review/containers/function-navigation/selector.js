import _ from 'lodash';
import Action from './action';
import {nameSpace} from '../../config';

const mapStoreToProps = (store, ownProps)=>{
  const id_selectedUser = _.get(store, `modules.${nameSpace}.session.userCatelog.id_selectedUser`, void 0);

  return {
    ownProps,
    id_selectedUser
  }
};

const mapDispatchToProps = dispatch => ({
  dispatch_someAction() { dispatch( Action_someAction() ); }
});


export {mapStoreToProps, mapDispatchToProps};
