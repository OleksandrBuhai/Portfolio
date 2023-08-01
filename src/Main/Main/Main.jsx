import React from "react";
import style from "../Main/Main.module.css"
import containerStyle from "../../assests/styles/Container.module.css"
import {motion} from "framer-motion";
import Avatar from "../../Avatar/Avatar";
import TypeWriter from "../../assests/Animation/TypeWriter/TypeWriter";
import eclipse1 from '../../assests/img/eclipse/ellipse-1.png'
import eclipse2 from '../../assests/img/eclipse/ellipse-2.png'
import eclipse3 from '../../assests/img/eclipse/ellipse-3.png'


export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
            transition: {
                type: 'tween',
                duration: 1.5,
                delay: delay,
                ease: [0.25, 0.6, 0.3, 0.8],
            },
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.4,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

function Main() {

    return (
        <div className={style.main} id="main">

            <div className={containerStyle.container}>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    transition={{duration: 1, ease: 'easeInOut'}}
                    className={style.text}>
                    <h3>Hello </h3>
                    <h1>I am Oleksandr Buhai</h1>
                    <h3>I am <TypeWriter text={'Front end developer'} delay={100} infinite/>
                    </h3>
                </motion.div>
                <div className={style.photoContainer}>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    transition={{duration: 1, ease: 'easeInOut'}}
                    className={style.photo}
                >
                    <div className={style.shapeInner}>
                        <motion.div
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            transition={{duration: 1, ease: 'easeInOut'}}
                            className={style.eclipse1}>
                        <img src={eclipse1} alt=''/>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 0.7)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            transition={{duration: 1, ease: 'easeInOut'}}
                            className={style.eclipse2}>
                            <img src={eclipse2} alt=''/>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 0.8)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            transition={{duration: 1, ease: 'easeInOut'}}
                            className={style.eclipse3}>
                            <img src={eclipse3} alt=''/>
                        </motion.div>
                    </div>
                    <Avatar/>
                    {/*<Circles/>*/}
                </motion.div>
                </div>
            </div>




        </div>
    )
}


export default Main