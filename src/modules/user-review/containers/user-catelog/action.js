import c from '../../common/actions-names';
import {nameSpace} from '../../config';

import API from '../../services/api';


const userCatelog = {
  init() {
    return (dispatch, getState) => {
      dispatch({
        type: c[`${nameSpace}__userCatelog_fetch_begin`],
      });
      API.userCatelog.getAll().then(
        userCatelog=>{
          setTimeout( ()=>{
            dispatch({
              type: c[`${nameSpace}__userCatelog_fetch_success`],
            });
          }, 2000)
        },
        err=>{
          dispatch({
            type: c[`${nameSpace}__userCatelog_fetch_fail`],
            error: err
          });
        },

      );
    }
  }
}

export default userCatelog;


