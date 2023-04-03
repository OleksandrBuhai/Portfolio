import React from "react";
import styles from "./HireMe.module.css"
import containerStyle from '../common/styles/Container.module.css'

function HireMe() {
    return (
        <div className={styles.hireMeBlock}>
            <div className={`${containerStyle.container} ${styles.hiresContainer}`}>
                <h4>
                    I am considering remote work
                </h4>
                <button className={styles.button}>
                        Hire me
                    </button>
            </div>
        </div>
    )
}

export default HireMe