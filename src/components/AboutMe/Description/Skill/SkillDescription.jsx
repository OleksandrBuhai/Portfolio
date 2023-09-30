import React from 'react';
import style from './SkillDescription.module.css'
import {FaCss3, FaDev, FaFigma, FaGit, FaHtml5, FaJs, FaReact, FaYarn} from "react-icons/fa";
import {SiTypescript,SiRedux} from "react-icons/si";
import {BsGit} from "react-icons/bs";
import {BiLogoTypescript,BiLogoJavascript} from "react-icons/bi";


export const SkillDescription = () => {


    const skillText = [
        {title: 'React', img: <FaReact/>},
        {title: 'JavaScript', img: <BiLogoJavascript/>},
        {title: 'TypeScript' ,img: <BiLogoTypescript/>},
        {title: 'HTML', img: <FaHtml5/>,},
        {title: 'CSS', img: <FaCss3/>,},
        {title: 'Redux', img: <SiRedux/>},
        {title: 'Git', img: <BsGit/>},
        {title: 'Web Development', img: <FaDev/>},
        {title: 'Web Design', img: <FaFigma/>},

    ]



    return (
            <div className={style.gridContainer}>
                {skillText.map((el, index) => {
                    return <div className={style.gridItem} key={index}>
                        {el.img}
                        <span className={style.span}>{el.title}</span>
                    </div>
                })}
            </div>
    );
};

