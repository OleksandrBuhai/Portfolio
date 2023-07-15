import React from 'react';
import containerStyle from "../common/styles/Container.module.css";
import style from '../AboutMe/AbouMe.module.css'
import main from '../Main/Main/Main.module.css'
import block from '../Contacts/Contacts.module.css'


const AboutMe = () => {
    return (
        <div className={block.contactsBlock}>
            <div className={style.aboutmeContainer}>
                <div className={style.photo}>Photo</div>
                <div className={style.description}>
                    <p>About me</p>
                    <span>Experienced Front End Developer specializing in React,JS,TS,HTML/CSS, and React-Redux.Skilled in web development and web design.
                            Native speaker in Ukranian, upper-intermidiate English, intermidiate in Czech.
                            Passionate about bringing ideas to life through innovative web solutions</span>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;