import React from "react";
import styles from "./Contacts.module.css";
import containerStyle from '../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className={styles.contactsBlock} id="contacts">
            <div className={`${containerStyle.container} ${styles.contactContainer}`}>
            <div className={styles.textContainer}>
                <h5>Contact me</h5>
                <p>Let's get in touch</p>
                <span>oleksandr.buugay@gmail.com</span>
            </div>
                <div className={styles.formContainer}>
                    <form>
                        <input/>
                        <input/>
                        <textarea/>
                    </form>
                    <button/>
                </div>

            </div>
        </div>
    )
}

export default Contacts