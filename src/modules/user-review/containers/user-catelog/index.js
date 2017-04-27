import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';


import {mapStoreToProps, mapDispatchToProps} from './selector';


class UserCatalog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch_init();
  }
  render() {
    console.log('container: user-catlog:', this.props)
    return(
      <div>
        <div> User Catelogue xxxxxxxxxxxxxxxxx </div>
        <NavLink to={'/users/1'} activeClassName="is-active">user 1</NavLink>
        <NavLink to={'/users/2'} activeClassName="is-active">user 2</NavLink>
        <NavLink to={'/users/3'} activeClassName="is-active">user 3</NavLink>
      </div>
    )
  }

};

export default connect(mapStoreToProps, mapDispatchToProps)(UserCatalog);

const AddTodo = ({dispatch_addTodo}) => {
    let inputValue;
    let inputNode;
    return (
        <div>
            <form onSubmit={
                e=>{
                    e.preventDefault();
                    dispatch_addTodo(inputValue);
                    inputValue = '';
                    inputNode.value = '';
                }} >
                <input
                    ref={ thisNode=>{ inputNode = thisNode }}
                    onChange={e=>{ e.preventDefault(); inputValue=e.target.value;}}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};


// export default connect(mapStoreToProps, mapDispatchToProps)(AddTodo);
