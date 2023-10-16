import React from "react";
import styles from "./Project.module.css"
import {FaLink,FaGithub} from "react-icons/fa";


function Project(props) {



    return (

        <div className={styles.projectContainer}  >
        <div className={styles.project}>
            <img className={styles.icon}  src={props.picture} alt=''></img>
            <div className={styles.layer}>
              
              {props.url != null ?  <a href={props.url} className={styles.linkContainer}>
                 <FaLink className={styles.linkIcon}/>                
               </a> : ''}
             
               <a href={props.repoUrl} className={styles.linkContainer}>
               <FaGithub className={styles.linkIcon}/>
               </a>
            </div>
        </div>
        </div>

    )
}

export default Project