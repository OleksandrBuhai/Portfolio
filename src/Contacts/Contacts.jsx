import React from "react";
import styles from "./Contacts.module.css";
import containerStyle from '../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className={`${styles.contactsBlock} ${containerStyle.bckgrndColor}`}>
            <div className={`${containerStyle.container} ${styles.contactContainer}`}>
                <h4>Contacts</h4>
                <form className={styles.form}>
                    <input type="text" className={styles.input} />
                    <input type="text" className={styles.input} />
                    <textarea className={styles.textarea}></textarea>
                </form>
                <button className={styles.button}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default Contacts