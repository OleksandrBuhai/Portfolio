import React from "react";
import styles from "./Project.module.css"

function Project() {
    return (
        <div className={styles.project}>
            <img className={styles.icon}></img>
            <div className={styles.layer}>
                <span>Project name</span>
                <span>Short description</span>
                <button>Show</button>
            </div>
        </div>
    )
}

export default Project