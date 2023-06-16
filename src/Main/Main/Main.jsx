import React from "react";
import style from "../Main/Main.module.css"
import containerStyle from "../../common/styles/Container.module.css"
import {motion} from "framer-motion";
import portfolio from"../../common/img/photo/portfolio.jpeg"
import styles from "../../Footer/Footer.module.css";
import GitHub from "../../common/img/socialneb/assets/github.png";
import Instagram from "../../common/img/socialneb/assets/instagram.png";
import LinkeId from "../../common/img/socialneb/assets/linkedin.png";


function Main() {

    const transition= {type:'spring',duration: 3}

      return (
            <div className={style.main} id="main">

                  <div className={containerStyle.container}>
                        <div className={style.text}>
                              <span>Hello </span>
                              <h1>I am Oleksandr Buhai</h1>
                              <p>And I'm a Frontend Developer</p>
                            <div className={style.socialLinks}>
                                <img src={GitHub} alt=""/>
                                <img src={Instagram} alt=""/>
                                <img src={LinkeId} alt=""/>
                            </div>
                        </div>
                        <div className={style.photo}>
                            <motion.div
                                initial={{opacity:0,x:-100}}
                                transition={{...transition,duration:2}}
                                whileInView={{opacity:1,x:0}}
                            ></motion.div>
                            <motion.div
                                initial={{opacity:0,x:100}}
                                transition={{...transition,duration:2}}
                                whileInView={{opacity:1,x:0}}
                            ></motion.div>
                            <motion.img
                                initial={{opacity:0,x:-100}}
                                animate={{opacity:1,x:0}}
                                exit={{opacity:0,x:-100}}
                                transition={transition}
                                src={portfolio} alt='' />
                        </div>
                  </div>
            </div>
      )
}


export default Main