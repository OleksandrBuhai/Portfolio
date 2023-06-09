import React from "react";
import styles from "./Footer.module.css";
import containerStyle from '../common/styles/Container.module.css'
import {Link} from "react-scroll";

function Footer () {


    return (
        <div className={styles.footerContainer}>
            <div className={`${containerStyle.container} ${styles.footersBlock}`}>
                <footer className={styles.footer}>
                    Copyryting ©: 2023 by Oleksandr Buhai | All Rights Reserver.
                </footer>
                <div className={styles.goUp}><Link to="main" smooth={true}>UP</Link></div>
            </div>
        </div>
    )
}

export default Footer