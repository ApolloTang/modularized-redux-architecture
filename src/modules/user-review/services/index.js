import _ from 'lodash';
import store from 'root/store';
import createHttp from 'util/http';
import c from '../../common/actions-name';


const rootURL = `localhost:3000`;
const userCatelog = {
  getAll: ()=>{
    return createHttp()
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
};

const API = {
  userCatelog,
};

export default API;

