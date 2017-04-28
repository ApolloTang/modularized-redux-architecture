import {nameSpace} from  '../config';

const userCatlog = [
  'userCatelog_init',
  `userCatelog_fetch_begin`,
  'userCatelog_fetch_success',
  'userCatelog_fetch_fail',
  'userCatelog_selectUser',
];

import userView from '../containers/user-view/action-names';

/* move the following const to reducers/resources? */
const resources = [
  'resources_userCatelog_update',
  'resources_users_update',
];

const symbols = [
  ...resources,
  ...userCatlog,
  ...userView
].reduce((acc, eventName) => ({
  ...acc,
  [`${nameSpace}__${eventName}`]: acc[eventName] ? duplicateEventNameError(eventName) : Symbol.for(`${nameSpace}__${eventName}`)
}), {});

function duplicateEventNameError (eventName) {
  throw new Error(`Event ${eventName} already exists`);
}

export default symbols;

