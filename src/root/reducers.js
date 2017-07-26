import {combineReducers} from 'redux';

import todos from  'modules/todos/reducers';

const modules = combineReducers({
  todos
});

const rootReducer = combineReducers({
  modules,
  // resources: AppReducer,
  // sessions: {}
})

export default rootReducer;
