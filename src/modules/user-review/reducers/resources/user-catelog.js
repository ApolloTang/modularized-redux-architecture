import _ from 'lodash';
import {combineReducers} from 'redux';

import c from '../../common/actions-names';
import {nameSpace} from '../../config';

import {array_to_IndexirizedObj} from 'util/helper.js';


const userCatelog = (state = {}, action) => {
  switch (action.type) {
    case c[`${nameSpace}__resources_userCatelog_update`] : {
      const payload = action.payload
      const userCat_prev = state.userCat_prev;
      const userCat_next = {
        ...state.userCat_prev,
        ...array_to_IndexirizedObj(payload.userCatelog)
      }
      return userCat_next;
    }
    default: {
      return state;
    }
  }
}


export default userCatelog;
