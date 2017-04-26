
import React, {Component} from 'react';

import * as Redux from 'redux';
import appReducer from 'modules/reducer-test/reducer/app';

const store = Redux.createStore(appReducer);
console.log('store content: ', store.getState());


import style from './style.less';
class ModuleRoot extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`reduxLab ${style['module-style']}`} >
                <p> reduxLab </p>
            </div>
        );
    }
}

export default ModuleRoot;


