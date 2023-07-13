import React from "react";
import styles from "./Contacts.module.css";
import containerStyle from '../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className={styles.contactsBlock} id="contacts">
            <div className={`${containerStyle.container} ${styles.contactContainer}`}>
                <div className={styles.text}>
                <span className={styles.header}>Contact me</span>
                    <span>Let's get in touch</span>
                    <span>oleksandr.buugay@gmail.com</span>
                </div>
                <div>
                <form className={styles.form}>
                        <div className={styles.inputBox}>
                            <input type="text" placeholder="Full Name"/>
                            <input type="email" placeholder="Email Adress"/>
                        </div>
                        <textarea className={styles.textArea} name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                </form>
                <button className={styles.button}>
                    Send
                </button>
                </div>
            </div>
        </div>
    )
}

export default Contacts