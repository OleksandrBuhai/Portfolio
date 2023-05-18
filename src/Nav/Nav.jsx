import React from "react";
import style from "../Nav/Nav.module.css"


function Nav () {

 return (
       <div className={style.navContainer}>
        <a href="" className={style.active}>Main</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contacts</a>
       </div> 
 )   
}


export default Nav