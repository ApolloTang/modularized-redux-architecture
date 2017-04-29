import c from '../../common/actions-names';
import {nameSpace} from '../../config';

import API from '../../services/api';

import { push } from 'connected-react-router'
import Action_userCatelog from  '../user-catelog/action'

const userEditCreate = {
  init() {
    return (dispatch, getState) => {
      dispatch({
        type: c[`${nameSpace}__userEdit_init`],
      });
    }
  },
  initDraft(userId) {
    if (userId) {
      return (dispatch, getState) => {
        dispatch({
          type: c[`${nameSpace}__userEdit_initDraft_begin`],
        });
        API.users.getOne(userId).then(
          user=>{
            setTimeout( ()=>{
              dispatch({
                type: c[`${nameSpace}__userEdit_initDraft_success`],
                payload: {user}
              });
              return user;
            }, 1000);
          }
        ).catch((err)=>{
          dispatch({
            type: c[`${nameSpace}__userEdit_initDraft_fail`],
            error: err
          });
        });
      }
    } else {
      // create
    }
  },
}

export default userEditCreate;


