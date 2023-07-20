import React from "react";
import style from "../Main/Main.module.css"
import containerStyle from "../../common/styles/Container.module.css"
import portfolio from "../../common/img/photo/portfolio.jpeg"
import PracticleContainer from "../../Particles/ParticlesComponent";
import image from '../../common/img/photo/avatar.png'
import {motion} from "framer-motion";


const Avatar = () => {
    return <div className='hidden xl:flex xl:max-w-none'>
        <img src={image} width={737} height={678}
             alt='' className='translate-z-0 w-full h-full'/>
    </div>
}

const fadeIn = (direction, delay) => {
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
            <PracticleContainer/>
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
                    <h3>I am <span>Frontend developer</span>
                    </h3>
                </motion.div>
                <div className='w-[1200px] h-full absolute right-0 bottom-0'>
                    <motion.div
                        variants={fadeIn('up', 0.5)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        transition={{duration: 1, ease: 'easeInOut'}}
                        className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
    lg:bottom-0 lg:right-[8%]'
                    >
                        <Avatar/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}


export default Main