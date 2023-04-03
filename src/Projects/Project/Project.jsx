import React from "react";
import styles from "./Project.module.css"

function Project() {
    return (
        <div className={`${styles.project} ${styles.text}`}>
            <div className={styles.icon}>
                Image
                <button>Show</button>
            </div>
            <div className={styles.text}>
                <span>Project name</span>
                <span>Short description</span>
            </div>
        </div>
    )
}

export default Project