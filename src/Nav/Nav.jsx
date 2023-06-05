import React from "react";
import style from "../Nav/Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div className={style.navContainer}>
            <NavLink exact to="/" activeClassName={style.active}>
                Home
            </NavLink>
            <NavLink to="/main" activeClassName={style.active}>
                Main
            </NavLink>
            <NavLink to="/skills" activeClassName={style.active}>
                Skills
            </NavLink>
            <NavLink to="/projects" activeClassName={style.active}>
                Projects
            </NavLink>
            <NavLink to="/contacts" activeClassName={style.active}>
                Contacts
            </NavLink>
        </div>
    );
}

export default Nav;
