import React from "react";
import styles from "./Project.module.css"


function Project() {


    return (

        <div className={styles.projectContainer}  >
        <div className={styles.project}>
            <img className={styles.icon}></img>
            <div className={styles.layer}>
               <a href={'props.url'}><button>Show</button></a>
            </div>
        </div>
        </div>

    )
}

export default Project