import _ from 'lodash';
import {combineReducers} from 'redux';

import c from '../../common/actions-names';
import {nameSpace} from '../../config';

import {array_to_IndexirizedObj} from 'util/helper.js';


const users = (state = {}, action) => {
  switch (action.type) {
    case c[`${nameSpace}__resources_users_update`] : {
      const payload = action.payload
      let usersFromPayload = [];
      if (payload.hasOwnProperty('user')) {
        // payload receive a single user object, put it in an array
        usersFromPayload = [payload.user];
      }
      if (payload.hasOwnProperty('users')) {
        // payload receive a collection of users object in array
        usersFromPayload=payload.users;
      }

      console.log('yyyyyyy usersFromPayload; ', usersFromPayload);
      const state_prev = state;
      console.log('yyyyyyy state; ', state);
      const newUserObj = array_to_IndexirizedObj(usersFromPayload)
      console.log('yyyyyyy newUserObj; ', newUserObj);
      const state_next = {
        ...state_prev,
        ...newUserObj
      };
      console.log('yyyyyyy state_next; ', state_next);
      return state_next;
    }
    case c[`${nameSpace}__resources_users_delete`] : {
      console.log('rrrr in reduce resources'  )
      const payload = action.payload

      let id_deletedUser;
      console.log('rrrr in reduce resources users: payload: ', payload )
      if (payload.hasOwnProperty('deletedUser')) {
        // payload receive a single user object
        id_deletedUser = payload.deletedUser._id;
        console.log('rrrr id_deletedUser: ', id_deletedUser)
      }
      if (payload.hasOwnProperty('deletedUsers')) {
        // payload receive a collection of users object in array
        // ... not implimented
      }

      console.log('state; ', state);
      const users_next = _.cloneDeep(state.users);
      delete users_next[id_deletedUser]
      return users_next;
    }
    default: {
      return state;
    }
  }
}


export default users;
