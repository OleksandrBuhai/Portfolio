import React from 'react';
import style from './About.module.css'

export const About = () => {

    const description = "Experienced Front End Developer specializing in React,JS,TS,HTML/CSS, and React-Redux.Skilled in web development and web design. Native speaker in Ukranian, upper-intermidiate English, intermidiate in Czech. Passionate about bringingideas to life through innovative web solutions"

    return (
        <div className={style.about}>
            {description}
        </div>
    );
};

