import React from "react";
import styles from "./Project.module.css"


function Project(props) {



    return (

        <div className={styles.projectContainer}  >
        <div className={styles.project}>
            <img className={styles.icon} src={props.picture} alt=''></img>
            <div className={styles.layer}>
               <a href={props.url}>
                   show
               </a>
            </div>
        </div>
        </div>

    )
}

export default Project