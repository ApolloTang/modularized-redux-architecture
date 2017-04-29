import _ from 'lodash';
import store from 'root/store';
import {createHttp} from 'util/rest';
import c from '../../common/actions-names';
import {nameSpace, rootUrl} from '../../config';


const users = {
  getAll() {
    return createHttp
      .get(`${rootUrl}/users`)
      .then(
        users => {
          store.dispatch( {
            type: c[`${nameSpace}__resources_users_update`],
            payload: {users}
          });
          return users;
        }
      );
  },
  getOne(userId) {
    return createHttp
      .get(`${rootUrl}/users/${userId}`)
      .then(
        user => {
          store.dispatch( {
            type: c[`${nameSpace}__resources_users_update`],
            payload: {user}
          });
          return user;
        }
      );
  },
  create() {
    return createHttp
      .post(`${rootUrl}/users`)
      .then(
        newUser => {
          store.dispatch( {
            type: c[`${nameSpace}__resources_users_update`],
            payload: {newUser}
          });
          return newUser;
        }
      )
  },
  del(userId) {
    return createHttp
      .del(`${rootUrl}/users/${userId}`)
      .then(
        deletedUser => {
          store.dispatch( {
            type: c[`${nameSpace}__resources_users_delete`],
            payload: {deletedUser}
          });
          return deletedUser;
        }
      )
  }

}


export default users;
