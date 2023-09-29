import React from "react";
import styles from "./Project.module.css"
import {FaLink} from "react-icons/fa";


function Project(props) {



    return (

        <div className={styles.projectContainer}  >
        <div className={styles.project}>
            <img  src={props.picture} alt=''></img>
            <div className={styles.layer}>
               <a href={props.url} className={styles.linkContainer}>
                 <FaLink className={styles.linkIcon}/>
               </a>
            </div>
        </div>
        </div>

    )
}

export default Project