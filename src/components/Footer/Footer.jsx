import React from "react";
import styles from "./Footer.module.css";
import {Link} from "react-scroll";
import {FaArrowUp} from "react-icons/fa";

function Footer () {


    return (
        <div className={styles.footerContainer}>
            <div className={styles.footersBlock}>
                <footer className={styles.footer}>
                    Copyryting ©: 2023 by Oleksandr Buhai | All Rights Reserver.
                </footer>
                <div className={styles.goUp}><Link to="Main" smooth={true}><FaArrowUp/></Link></div>
            </div>
        </div>
    )
}

export default Footer