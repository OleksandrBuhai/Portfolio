import React, {useEffect} from "react";
import styles from "./Projects.module.css";
import containerStyle from '../common/styles/Container.module.css'
import Project from "./Project/Project";


function Projects() {

    return (
        <div className={`${styles.projectsBlock} ${containerStyle.bckgrndColor2}`} id="projects">
            <div className={containerStyle.container}>
                <h3 className={styles.header}>My projects</h3>
                <div className={styles.projects}>
                    <Project/>
                    <Project/>
                    {/*<Project/>
            <Project/>*/}
                </div>
            </div>
        </div>
    )
}

export default Projects