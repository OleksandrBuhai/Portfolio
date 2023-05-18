import React from "react";
import styles from './Skills.module.css'
import containerStyle from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";


function Skills() {
    return (
        <div className={`${styles.skillsBlock} ${containerStyle.bckgrndColor2}`}>
            <div className={`${styles.skillsContainer} ${containerStyle.container}`}>
                <h2>skills</h2>
                <div className={styles.skills}>
                    <Skill title={"JS/TS"} description={"Skills was improved by different tasks and pet projects"} />
                    <Skill title={"HTML/CSS"} description={"SKills was improved by made some sites "} />
                    <Skill title={"React"} description={"I make FB clone and different react/web application like snake game todolist and social network"} />
                    <Skill title={"sdasd"} description={"sdasdadd"}/>
                    <Skill title={"sdasd"} description={"sdasdadd"}/>
                    <Skill title={"sdasd"} description={"sdasdadd"}/>
                </div>
            </div>
        </div>
    )
}

export default Skills