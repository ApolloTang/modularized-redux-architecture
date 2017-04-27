import _ from 'lodash';
import store from 'root/store';
import {createHttp} from 'util/rest';
import c from '../../common/actions-names';

const rootURL = `http://localhost:3000/api`;
const userCatelog = {
  getAll() {
    return createHttp
      .get(`${rootURL}/users`)
      .then(
        users => { store.dispatch( {
            type: 'system',
            payload: {users}
          });
          return users;
        }
      );
  }
}

const API = {
  userCatelog,
}

export default API;

