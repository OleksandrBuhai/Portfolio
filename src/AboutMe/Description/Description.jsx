import React, {useState} from 'react';
import navStyle from '../../Nav/Nav.module.css'
import style from '../Description/Description.module.css'

const Description = () => {

    const tabItems = [
        { label: 'About me', content: 'Hello' },
        { label: 'Skills', content: 'SSh' },
        { label: 'Credentials', content: 'Your credentials content here' },
    ];

    const [activeTab, setActiveTab] = useState(tabItems[0]); // Set the first tab as the initial active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab); // Update the active tab when clicking
    };

    return (
        <div>
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
            <div>{activeTab.content}</div>
        </div>
    );
};

export default Description;