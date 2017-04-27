import c from '../../common/actions-names';
import {nameSpace} from '../../config';


const userCatelog = {
  init() {
    return (dispatch, getState) => {
      dispatch({
        type: `${nameSpace}__userCatlog_init`,
      });
    }
  }
}

export default userCatelog;


