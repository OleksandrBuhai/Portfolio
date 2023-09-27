import React from "react";

import style from "./Main.module.css";
import containerStyle from "../../../assests/styles/Container.module.css";

import {motion} from "framer-motion";
import {Button} from "../../../reusableComponents/Button/Button";
import {fadeIn} from "../../../assests/animation/fadeIn/fadeIn";
import Avatar from "../../../reusableComponents/Avatar/Avatar";

import eclipse1 from "../../../assests/img/eclipse/ellipse-1.png";
import eclipse2 from "../../../assests/img/eclipse/ellipse-2.png";
import eclipse3 from "../../../assests/img/eclipse/ellipse-3.png";


export const Main =()=> {




    return (
        <div className={style.main} id="Main">
            <div className={containerStyle.container}>
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{duration: 1, ease: "easeInOut"}}
                    className={style.text}
                >
                    <h3 style={{display: "flex"}}>
                        Hi there
                        <span className={style.greet}> 👋 </span>
                    </h3>
                    <h3>I am Oleksandr Buhai</h3>
                    <h3>Front-end developer</h3>
                    <Button  name={"Download CV"} onClick={()=>{
                        console.log('huy')}}/>
                </motion.div>
                <motion.div className={style.photoContainer}>
                    <motion.div
                        variants={fadeIn("up", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        transition={{duration: 1, ease: "easeInOut"}}
                        className={style.photo}
                    >
                        <div className={style.shapeInner}>
                            <motion.div
                                variants={fadeIn("up", 0.6)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                transition={{duration: 1, ease: "easeInOut"}}
                                className={style.eclipse1}
                            >
                                <img src={eclipse1} alt=""/>
                            </motion.div>
                            <motion.div
                                variants={fadeIn("up", 0.7)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                transition={{duration: 1, ease: "easeInOut"}}
                                className={style.eclipse2}
                            >
                                <img src={eclipse2} alt=""/>
                            </motion.div>
                            <motion.div
                                variants={fadeIn("up", 0.8)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                transition={{duration: 1, ease: "easeInOut"}}
                                className={style.eclipse3}
                            >
                                <img src={eclipse3} alt=""/>
                            </motion.div>
                        </div>
                        <Avatar/>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}


