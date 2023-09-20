import React from "react";
import styles from "./Contacts.module.css";
import GitHub from "../../assests/img/socialneb/assets/github.png";
import LinkedIn from "../../assests/img/socialneb/assets/linkedin.png";
import Circles from "../../assests/animation/Circle/Circle";
import Bulb from "../../assests/animation/Bulb/Bulb";


function Contacts() {
    return (
        <div className={styles.contactsBlock} id="Contacts">
            <div className={styles.header}>
                <h2>Contact Me</h2>
                <h6>Waiting for your message</h6>
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.textContainer}>
                    <span>Let's get in touch</span>
                    <span>oleksandr.buugay@gmail.com</span>
                    <div className={styles.socialLinks}>

                        <a href={'https://github.com/OleksandrBuhai'}><img src={GitHub}/></a>
                        <a href={' https://www.linkedin.com/in/oleksandr-buhai-95a35227b/'}><img src={LinkedIn}/></a>

                    </div>
                </div>
                <div className={styles.formContainer}>
                    <form>
                        <div>
                            <div>
                                <p>
                                    <input className={styles.input} placeholder={'Name'}/>

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
                            <div className={styles.centerButton}>
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