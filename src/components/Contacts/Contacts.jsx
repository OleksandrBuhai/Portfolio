import React, { useRef } from "react";
import styles from "./Contacts.module.css";
import GitHub from "../../assests/img/socialneb/assets/github.png";
import LinkedIn from "../../assests/img/socialneb/assets/linkedin.png";
import Circles from "../../assests/animation/Circle/Circle";
import Bulb from "../../assests/animation/Bulb/Bulb";
import emailjs from '@emailjs/browser';

function Contacts() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_h44wvlb',
                'template_von5hp4',
                form.current,
                'Hc34q67_kNB4O02CX'
            )
            .then(
                (result) => {
                    console.log(result.text);

                    window.alert('message sent')
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className={styles.contactsBlock} id="Contacts">
            <div className={styles.header}>
                <h2>Contact Me</h2>
                <h6>Waiting for your message</h6>
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.textContainer}>
                    <span>Let's get in touch</span>

                    <div className={styles.socialLinks}>
                        <a href={'https://github.com/OleksandrBuhai'}>
                            <img src={GitHub} alt="GitHub" />
                        </a>
                        <a href={' https://www.linkedin.com/in/oleksandr-buhai-95a35227b/'}>
                            <img src={LinkedIn} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <div>
                                <p>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        name="user_name"
                                        placeholder="Name"
                                    />
                                </p>
                            </div>
                            <div>
                                <p>
                                    <input
                                        className={styles.input}
                                        type="email"
                                        name="user_email"
                                        placeholder="Email address"
                                    />
                                </p>
                            </div>
                            <div>
                                <p>
                                    <input
                                        className={styles.input}
                                        placeholder="Subject"
                                        name="subject"
                                    />
                                </p>
                            </div>
                            <div>
                                <p>
                  <textarea
                      name="message"
                      className={styles.textArea}
                      placeholder="Enter your message"
                  />
                                </p>
                            </div>
                            <div className={styles.centerButton}>
                                <p>
                                    <button
                                        type="submit"
                                        className={styles.button}
                                    >
                                        Submit
                                    </button>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Bulb />
            <Circles />
        </div>
    );
}

export default Contacts;
