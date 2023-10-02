import React, {useState} from 'react';
import style from './Description.module.css'
import {SkillDescription} from "./Skill/SkillDescription";
import {About} from "./About/About";
import {Credentials, Experience} from "./Credential/Credentials";

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
            <div className={style.content}
              >{activeTab.content}</div>
        </div>
    );
};

export default Description;