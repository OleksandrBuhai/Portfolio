import React, {useState} from "react";
import style from "./Skill.module.css"
import containerStyle from "../../common/styles/Container.module.css"




function Skill(props) {

    const description1 = props.description
    const [text, setText] = useState('');

    const handleMouseEnter = () => {
        setText(description1);
    };

    const handleMouseLeave = () => {
        setText('');
    };

    return (
        <div className={`${style.skill} ${containerStyle.bckgrndColor}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description} >{text}</span>
        </div>
    )
}

export default Skill