import React from "react";
import styles from "./Contacts.module.css";
import containerStyle from '../common/styles/Container.module.css'
import style from "../Main/Main/Main.module.css";
import GitHub from "../common/img/socialneb/assets/github.png";
import Instagram from "../common/img/socialneb/assets/instagram.png";
import LinkeId from "../common/img/socialneb/assets/linkedin.png";


function Contacts() {
    return (
        <div className={styles.contactsBlock} id="contacts">
                <div className={styles.header}>
                    <h2 className={styles.headerText}>Contact Me</h2>
                    <h6 className={styles.secondText}>Waiting for your message</h6>
                </div>
            <div className={styles.contactContainer}>
                <div className={styles.textContainer}>
                    <p>Let's get in touch</p>
                    <span>oleksandr.buugay@gmail.com</span>
                    <div className={style.socialLinks}>
                        <img src={GitHub} alt=""/>
                        <img src={Instagram} alt=""/>
                        <img src={LinkeId} alt=""/>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <form>
                        <div>
                            <div >
                                <p>
                                    <input  className={styles.input} placeholder={'Name'}/>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <input className={styles.input} placeholder={'Email adress'}/>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <input className={styles.input} placeholder={'Subject'}/>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <textarea className={styles.textArea} placeholder={'Enter your messasge'}/>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <input className={styles.button} type={"submit"}/>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts