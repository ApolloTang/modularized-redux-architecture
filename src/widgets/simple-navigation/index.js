import React from 'react';
import { Link } from 'react-router-dom';

import style from './style';
const ModuleRoot = ({navigations}) => (
    <div className={`simple-navigation ${style['module-style']}`}>
        <ul>
            {
                navigations.map((n,i)=>(
                    <li key={i}> <Link to={n.to}> {n.displayText} </Link> </li>
                ))
            }
        </ul>
    </div>
)
export default ModuleRoot;


