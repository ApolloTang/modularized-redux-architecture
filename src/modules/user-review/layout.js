import React, {Component} from 'react';

import { Route, Switch, Link, Redirect } from 'react-router-dom';

import style from './style-layout';
class Layout extends Component {
    constructor(props) {
        super(props);
    }
    render() {

      console.log('layout: ', this.props)
        return (
            <div className={`layout ${style['module-style']}`} >
              <div>{this.props.UserCatelog}</div>
              <div>
                <div>{this.props.Navigation}</div>
                <div>{this.props.routes}</div>
              </div>
            </div>
        );
    }
}

export default Layout;

