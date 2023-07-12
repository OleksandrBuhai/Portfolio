import React, {useEffect} from "react";
import styles from "./Project.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Project() {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className={styles.projectContainer}  data-aos="zoom-in-right">
        <div className={styles.project}>
            <img className={styles.icon}></img>
            <div className={styles.layer}>
            {/*    <span>Project name</span>
                <span>Short description</span>*/}
                <button>Show</button>
            </div>
        </div>
            <div className={styles.textContainer}>
                <span>Project name</span>
                <span>Short description</span>
            </div>
        </div>
    )
}

export default Project