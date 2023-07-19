import React, {useState} from 'react';
import navStyle from '../../Nav/Nav.module.css'
import style from '../Description/Description.module.css'

const Description = () => {

    const [activeTab, setActiveTab] = useState('About'); // Set an initial active tab

    const about = 'Hello';
    const skills = 'SSh';

    const handleTabClick = (tab) => {
        setActiveTab(tab); // Update the active tab when clicking
    };

    return (
        <div>
            <ul className={style.descriptionNav}>
                <li
                    onClick={() => {
                        handleTabClick('About'); // Call handleTabClick and pass the tab name
                    }}
                    className={activeTab === 'About' ? style.active : ''}
                >
                    About me
                </li>
                <li
                    onClick={() => {
                        handleTabClick('Skills'); // Call handleTabClick and pass the tab name
                    }}
                    className={activeTab === 'Skills' ? style.active : ''}
                >
                    Skills
                </li>
                <li
                    onClick={() => {
                        handleTabClick('Credentials'); // Call handleTabClick and pass the tab name
                    }}
                    className={activeTab === 'Credentials' ? style.active : ''}
                >
                    Credentials
                </li>
            </ul>
            <div>{activeTab === 'About' ? about : activeTab === 'Skills' ? skills : null}</div>
        </div>
    );
};

export default Description;