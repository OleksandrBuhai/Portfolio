import React from "react";
import styles from "./Footer.module.css";
import containerStyle from '../common/styles/Container.module.css'

function Footer () {
    return (
        <div className={styles.footerContainer}>
            <div className={`${containerStyle.container} ${styles.footersBlock}`}>
                <h5>Oleksandr Buhai</h5>
                <div className={styles.span}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <footer>
                    2023 all right reserved
                </footer>
            </div>
        </div>
    )
}

export default Footer