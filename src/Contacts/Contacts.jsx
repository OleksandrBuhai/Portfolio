import React from "react";
import styles from "./Contacts.module.css";
import GitHub from "../assests/img/socialneb/assets/github.png";
import Instagram from "../assests/img/socialneb/assets/instagram.png";
import LinkeId from "../assests/img/socialneb/assets/linkedin.png";
import Circles from "../assests/Animation/Circle/Circle";
import Bulb from "../assests/Animation/Bulb/Bulb";


function Contacts() {
    return (
        <div className={styles.contactsBlock} id="contacts">
                <div className={styles.header}>
                    <h2>Contact Me</h2>
                    <h6>Waiting for your message</h6>
                </div>
            <div className={styles.contactContainer}>
                <div className={styles.textContainer}>
                    <span>Let's get in touch</span>
                    <span>oleksandr.buugay@gmail.com</span>
                    <div className={styles.socialLinks}>
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
                                    <button className={styles.button} type={"button"}>
                                        Submit
                                    </button>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
    <Bulb/>
            <Circles/>
        </div>
    )
}

export default Contacts