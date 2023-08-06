import React from 'react';
import style from '../AboutMe/AbouMe.module.css'
import Description from "./Description/Description";
import Avatar from "../Avatar/Avatar";
import {heroOptions} from "../Particles/config/particles-config";
import ParticleContainer from "../Particles/ParticlesComponent";


const AboutMe = () => {

        return (
            <div className={style.container} id={"about"}>
                <ParticleContainer options={heroOptions}/>
                <div className={style.aboutmeContainer}>
                    <div className={style.photo}>
                        <Avatar/>
                </div>
                    <div className={style.description}>
                      <Description/>
                    </div>
                </div>
            </div>
        );
    }
;

export default AboutMe;