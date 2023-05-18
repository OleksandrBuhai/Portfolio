import React from "react";
import style from "./Skill.module.css"
import containerStyle from "../../common/styles/Container.module.css"



function Skill(props) {
    return (
        <div className={`${style.skill} ${containerStyle.bckgrndColor}`}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
          {/*  <span className={style.description}>

                {props.description}
            </span>*/}
            <button className={style.button}>Show more</button>
        </div>
    )
}

export default Skill