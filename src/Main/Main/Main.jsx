import React from "react";
import style from "../Main/Main.module.css"
import containerStyle from "../../common/styles/Container.module.css"
import {motion} from "framer-motion";
import portfolio from"../../common/img/photo/portfolio.jpeg"
import styles from "../../Footer/Footer.module.css";
import GitHub from "../../common/img/socialneb/assets/github.png";
import Instagram from "../../common/img/socialneb/assets/instagram.png";
import LinkeId from "../../common/img/socialneb/assets/linkedin.png";
import ParticlesBck from "../../Particles/ParticlesComponent";
import ParticlesComponent from "../../Particles/ParticlesComponent";
import {heroOptions} from "../../Particles/config/particles-config";
import PracticleComp from "../../Particles/ParticlesComponent";
import HeroParticles from "../../Particles/ParticlesComponent";
import PracticleContainer from "../../Particles/ParticlesComponent";


function Main() {

    const transition= {type:'spring',duration: 3}

      return (
            <div className={style.main} id="main">
                <PracticleContainer />
                  <div className={containerStyle.container}>
                        <div className={style.text}>
                              <span>Hello </span>
                              <h1>I am Oleksandr Buhai</h1>
                              <p>I am Front end developer
                              </p>
                        </div>
                        <div className={style.photo}
                        >
                            <img src={portfolio} alt='' />
                        </div>
                  </div>
            </div>
      )
}


export default Main