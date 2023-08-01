import React from 'react';
import style from '../Skill/SkillDescription.module.css'
import container from '../../Description/Description.module.css'
import {FaCss3, FaDev, FaFigma, FaGit, FaHtml5, FaJs, FaReact, FaYarn} from "react-icons/fa";

const SkillDescription = () => {


    const skillText = [
        {title: 'HTML', img: <FaHtml5/>,},
        {title: 'CSS', img: <FaCss3/>,},
        {title: 'React', img: <FaReact/>},
        {title: 'JavaScript/TypeScript', img: <FaJs/>},
        {title: 'Git', img: <FaGit/>},
        {title: 'Yarn', img: <FaYarn/>},
        {title: 'Web Development', img: <FaDev/>},
        {title: 'Web Design', img: <FaFigma/>},

    ]


    return (
        <div>
            <ul className={style.ul}>
                {skillText.map((el, index) => {
                    return <li className={style.li}>
                        {el.img}
                        <span className={style.span}>{el.title}</span>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default SkillDescription;