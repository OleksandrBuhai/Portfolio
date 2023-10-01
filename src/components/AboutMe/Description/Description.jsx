import React, {useState} from 'react';
import style from './Description.module.css'
import {SkillDescription} from "./Skill/SkillDescription";
import {About} from "./About/About";
import {Credentials,Experience} from "./Credential/Credentials";
import {motion} from "framer-motion";
import {fadeIn} from "../../../assests/animation/fadeIn/fadeIn";

const Description = () => {

    const tabItems = [
        { label: 'About', content: <About/> },
        { label: 'Skills', content: <SkillDescription/> },
        { label: 'Credentials', content: <Credentials/> },
        { label: 'Experience', content: <Experience/> },
    ];

    const [activeTab, setActiveTab] = useState(tabItems[0]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={style.descriptionContainer}>
            <ul className={style.descriptionNav}>
                {tabItems.map((tab, index) => (
                    <li
                        key={index}
                        onClick={() => handleTabClick(tab)}
                        className={activeTab.label === tab.label ? style.active : ''}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            {/*<motion.div
                key={activeTab.label}
                variants={fadeIn("up", 0.01)}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{duration: 0.01, ease: "easeInOut"}}
                className={style.content}>{activeTab.content}</motion.div>*/}
            <div className={style.content}
              >{activeTab.content}</div>
        </div>
    );
};

export default Description;