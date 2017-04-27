import _ from 'lodash';
import store from 'root/store';
import {createHttp} from 'util/rest';
import c from '../../common/actions-names';
import {nameSpace} from '../../config';

const rootURL = `http://localhost:3000/api`;

const userCatelog = {
  getAll() {
    return createHttp
      .get(`${rootURL}/users`)
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
