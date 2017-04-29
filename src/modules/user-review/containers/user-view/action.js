import c from '../../common/actions-names';
import {nameSpace} from '../../config';

import API from '../../services/api';

import { push } from 'connected-react-router'

const userView = {
  init() {
    return (dispatch, getState) => {
      dispatch({
        type: c[`${nameSpace}__userView_init`],
      });
    }
  },
  fetchUser(userId) {
    return (dispatch, getState) => {
      dispatch({
        type: c[`${nameSpace}__userView_fetch_begin`],
      });
      API.users.getOne(userId).then(
      // API.users.getOne('432434234').then( //<--- for testing not found
        user=>{
          setTimeout( ()=>{
            dispatch({
              type: c[`${nameSpace}__userView_fetch_success`],
              payload: {user}
            });
            return user;
          }, 1000);
        }
      ).catch((err)=>{
        dispatch({
          type: c[`${nameSpace}__userView_fetch_fail`],
          error: err
        });
      });
    }
  },
  deleteUser(userId) {
    return (dispatch, getState) => {
      dispatch({
        type: c[`${nameSpace}__userView_delete_begin`],
      });
      API.users.del(userId).then(
      // API.users.del('432434234').then( //<--- for testing not found
        user=>{
          dispatch({
            type: c[`${nameSpace}__userView_delete_success`],
            payload: {user}
          });
          // now that user has been delete, we can no longer
          // stay in this user page, so we have to navigate away
          dispatch( push('/users'));

          return user;
        }
      ).catch((err)=>{
          dispatch({
            type: c[`${nameSpace}__userView_delete_fail`],
            error: err
          });
      });
    }
  },
}

export default userView;


