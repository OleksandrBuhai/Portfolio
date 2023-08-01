import React from 'react';
import style from '../AboutMe/AbouMe.module.css'
import Description from "./Description/Description";
import Avatar from "../Avatar/Avatar";
import {aboutMeParticles, heroOptions} from "../Particles/config/particles-config";
import PracticleAboutMe from "../Particles/ParticlesABoutme";
import PracticleContainer from "../Particles/ParticlesComponent";


const AboutMe = () => {

    const aboutMeCopyPRCTLS = {...aboutMeParticles}

        return (
            <div className={style.container}>
                <PracticleContainer options={heroOptions}/>
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