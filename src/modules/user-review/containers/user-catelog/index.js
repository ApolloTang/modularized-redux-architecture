import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';


import {mapStoreToProps, mapDispatchToProps} from './selector';


const UserItem = ({ displayName, id, selectUser, id_selectedUser }) => (
  <div className={(id===id_selectedUser) ? 'is-active' : ''} >
    <NavLink
      onClick={(e)=>selectUser(id)}
      to={`/users/${id}`}
      activeClassName="is-active">{displayName}</NavLink>
  </div>
);

const UserList = ({userCatelog, selectUser, id_selectedUser})=>{
  const ids = Object.keys(userCatelog);
  return (
    <div>
      { ids.map( id =>{
        const displayName = _.get(userCatelog, `${id}.name`, '');
        return(
          <UserItem
            key={id}
            id_selectedUser={id_selectedUser}
            id={id}
            displayName={displayName}
            selectUser={selectUser}
          />
        );
      }) }
    </div>
  );
}


class UserCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.handle_selectUser = this.handle_selectUser.bind(this);
    this.handle_getUserCatelog = this.handle_getUserCatelog.bind(this);
  }
  componentDidMount() {
    this.props.dispatch_init();
    this.handle_getUserCatelog();
  }
  handle_getUserCatelog() {
    this.props.dispatch_fetchUserCatelog();
  }
  handle_selectUser(userId) {
    this.props.dispatch_selectUser(userId);
  }
  render() {
    return (this.props.isLoading) ? (
      <div>
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      </div>
    ):(
      <div>
        <UserList
          id_selectedUser={this.props.id_selectedUser}
          userCatelog={this.props.userCatelog}
          selectUser = {this.handle_selectUser}
        />
      </div>
    )
  }

};

export default connect(mapStoreToProps, mapDispatchToProps)(UserCatalog);

