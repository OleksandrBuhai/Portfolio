import React from "react";
import style from "../Nav/Nav.module.css"
import {Link, NavLink} from "react-router-dom";


function Nav () {

 return (
       <div className={style.navContainer}>
           <NavLink exact to="/" activeclassname={style.active}>Home</NavLink>
           <NavLink to="/main" activeclassname={style.active}>Main</NavLink>
           <NavLink to="/skills" activeclassname={style.active}>Skills</NavLink>
           <NavLink to="/projects" activeclassname={style.active}>Projects</NavLink>
           <NavLink to="/contacts" activeclassname={style.active}>Contacts</NavLink>
       </div>
 )
}


export default Nav