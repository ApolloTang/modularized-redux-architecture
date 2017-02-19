import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './style';
const ModuleRoot = ({navigations}) => (
    <div className={`simple-navigation ${style['module-style']}`}>
        <ul>
            {
                navigations.map((n,i)=>(
                    <li key={i}>
                        <NavLink
                            exact
                            to={n.to}
                            activeClassName="is-active" >
                            {n.displayText}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </div>
)
export default ModuleRoot;


