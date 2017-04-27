import {nameSpace} from  '../config';

const userCatlog = [
  'userCatlog_init',
  'userCatlog_fetch',
  'userCatlog_fetch_success',
  'userCatlog_fetch_fail',
  'userCatlog_select'
];

const symbols = [
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

