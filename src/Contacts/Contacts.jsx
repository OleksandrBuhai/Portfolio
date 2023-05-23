import React from "react";
import styles from "./Contacts.module.css";
import containerStyle from '../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className={`${styles.contactsBlock} ${containerStyle.bckgrndColor}`}>
            <div className={`${containerStyle.container} ${styles.contactContainer}`}>
                <h4>Contacts</h4>
                <form className={styles.form}>
                        <div className={styles.inputBox}>
                            <input type="text" placeholder="Full Name"/>
                            <input type="email" placeholder="Email Adress"/>
                        </div>
                        <div className={styles.inputBox}>
                            <input type="number" placeholder="Mobile Number"/>
                            <input type="text" placeholder="Email Subject"/>
                        </div>
                        <textarea className={styles.textArea} name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>

                </form>
                <button className={styles.button}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default Contacts