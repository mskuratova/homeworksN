import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR}>  pre-junior  </NavLink>
            <NavLink to={PATH.JUNIOR}>  junior  </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>  junior-plus  </NavLink>
            <div className={s.block}></div>

        </div>
    )
}

export default Header
