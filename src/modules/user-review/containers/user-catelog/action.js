import c from '../../common/actions-names';
import {nameSpace} from '../../config';

import API from '../../services/api';

const userCatelog = {
  init() {
    return (dispatch, getState) => {
      dispatch({
        type: `${nameSpace}__userCatlog_init`,
      });
      API.userCatelog.getAll();
    }
  }
}

export default userCatelog;


