import Action from './action';

console.log('xxxxx Action: ', Action);

const mapStoreToProps = store=>{
  console.log('xxxx user-catlog: selector: ', store);
  return store;
};

const mapDispatchToProps = dispatch => ({
  dispatch_init() { dispatch(Action.init() ) },
  dispatch_someAction() { dispatch( Action_someAction() ); }
});


export {mapStoreToProps, mapDispatchToProps};
