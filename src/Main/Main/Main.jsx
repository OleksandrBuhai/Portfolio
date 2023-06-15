import React from "react";
import style from "../Main/Main.module.css"
import containerStyle from "../../common/styles/Container.module.css"
import {motion} from "framer-motion";
import portfolio from"../../common/img/photo/portfolio.jpeg"


function Main() {

    const transition= {type:'spring',duration: 3}

      return (
            <div className={style.main} id="main">

                  <div className={containerStyle.container}>
                        <div className={style.text}>
                              <span>Hello </span>
                              <h1>I am Oleksandr Buhai</h1>
                              <p>And I'm a Frontend Developer</p>
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