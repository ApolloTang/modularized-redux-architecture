import _ from 'lodash';
import store from 'root/store';
import {createHttp} from 'util/rest';
import c from '../../common/actions-names';
import {nameSpace, rootUrl} from '../../config';


const userCatelog = {
  getAll() {
    return createHttp
      .get(`${rootUrl}/users`)
      .then(
        userCatelog => {
          store.dispatch( {
            type: `${nameSpace}__resources_userCatelog_update`,
            payload: {userCatelog}
          });
        }
      );
  }
}


export default userCatelog;
