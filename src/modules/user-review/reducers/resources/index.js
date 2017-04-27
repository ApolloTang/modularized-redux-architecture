import _ from 'lodash';
import {combineReducers} from 'redux';

import c from '../../common/actions-names';
import {nameSpace} from '../../config';

// import userCatelog from '.user-catelog';
const userCatelog = (state = {}, action) => {
  switch (action.type) {
    case `${nameSpace}__resources_userCatelog_update` : {
    }
    default: {
      return state;
    }
  }
}

const resources = combineReducers( {
  userCatelog
});


export default resources;

