import React from "react";
import styles from './Skills.module.css'
import containerStyle from '../assests/styles/Container.module.css'
import Skill from "./Skill/Skill";
import jsIcon from "../assests/img/bxl-javascript.svg"
import reactIcon from "../assests/img/bxl-react.svg"
import htmlIcon from "../assests/img/bxl-html5.svg"
import tsIcon from "../assests/img/bxl-typescript.svg"
import webIcon from "../assests/img/bxl-edge.svg"


function Skills() {
    return (
        <div className={styles.skillsBlock}  id="skills">
            <div className={`${styles.skillsContainer} ${containerStyle.container}`}>
                <h2 className={styles.header}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={"JS"} description={"Skills was improved by different tasks and pet projects"} img={jsIcon}/>
                    <Skill title={"HTML/CSS"} description={"SKills was improved by made some sites "} img={htmlIcon} />
                    <Skill title={"React"} description={"I make FB clone and different react/web application like snake game todolist and social network"} img={reactIcon} />
                    <Skill title={"TS"} description={"Skills was improved by different tasks and pet projects"} img={tsIcon} />
                    <Skill title={"WebDev"} description={"Making a design for different site,building maket for different projects"} img={webIcon} />
                </div>
            </div>
        </div>
    )
}

export default Skills