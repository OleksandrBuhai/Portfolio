import React from 'react';
import style from './AbouMe.module.css'
import Description from "./Description/Description";
import Avatar from "../../reusableComponents/Avatar/Avatar";
import {heroOptions} from "../Particles/config/particles-config";
import ParticleContainer from "../Particles/ParticlesComponent";


export const AboutMe = () => {

        return (
            <div className={style.container} id={"About"}>
                <ParticleContainer options={heroOptions}/>
                <div className={style.aboutmeContainer}>
                    <div className={style.photo}>
                        <Avatar />
                    </div>
                    <div className={style.description}>
                        <Description/>
                    </div>
                </div>
            </div>
        );
    }
;

