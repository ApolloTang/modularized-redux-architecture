import {nameSpace} from  '../config';

const userCatlog = [
  'userCatelog_init',
  'userCatelog_fetch',
  'userCatelog_fetch_success',
  'userCatelog_fetch_fail',
  'userCatelog_select',
];

const resources = [
  'resources_userCatelog_update',
];

const symbols = [
  ...resources,
  ...userCatlog,
  'add',
  'remove',
  'toggle',
].reduce((acc, eventName) => ({
  ...acc,
  [`${nameSpace}__${eventName}`]: acc[eventName] ? duplicateEventNameError(eventName) : Symbol.for(eventName)
}), {});

function duplicateEventNameError (eventName) {
  throw new Error(`Event ${eventName} already exists`);
}

export default symbols;

