import c from '../../common/actions-names';
import {nameSpace} from '../../config';

import API from '../../services/api';


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
          }, 2000);
        }
      ).catch((err)=>{
        dispatch({
          type: c[`${nameSpace}__userView_fetch_fail`],
          error: err
        });
      });
    }
  },

  // selectUser(userId) {
  //   return (dispatch, getState) => {
  //     console.log('dispatch selection user: ', userId)
  //     dispatch({
  //       type: c[`${nameSpace}__userCatelog_selectUser`],
  //       payload: {userId}
  //     });
  //   }
  // }
}

export default userView;


