import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';


import {mapStoreToProps, mapDispatchToProps} from './selector';


const UserItem = ({ displayName, id }) => ( <NavLink to={`/users/${id}`} activeClassName="is-active">{displayName}</NavLink> );

const UserList = ({userCatelog})=>{
  const ids = Object.keys(userCatelog);
  return (
    <div>
      { ids.map( id =>{
          const displayName = _.get(userCatelog, `${id}.name`, '');
          return(
            <UserItem
              key={id}
              id={id}
              displayName={displayName}
            />
          );
      }) }
    </div>
  );
}


class UserCatalog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch_init();
  }
  render() {
    return (this.props.isLoading) ? (
      <div>
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      </div>
    ):(
      <div>
        <UserList userCatelog={this.props.userCatelog}/>
      </div>
    )
  }

};

export default connect(mapStoreToProps, mapDispatchToProps)(UserCatalog);

