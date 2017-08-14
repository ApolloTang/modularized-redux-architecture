import {combineReducers} from 'redux';

import todos from  'modules/todos/reducers';
import todos2 from  'modules/todos2/reducers';

const modules = combineReducers({
  todos,
  todos2
});

const rootReducer = combineReducers({
  modules,
  // resources: AppReducer,
  // sessions: {}
})

export default rootReducer;
