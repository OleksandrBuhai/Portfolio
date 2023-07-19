import React from 'react';
import style from '../AboutMe/AbouMe.module.css'
import block from '../Contacts/Contacts.module.css'
import Tets from "./Test/Tets";
import SkillsAboutMe from "./Test/Skills";
import {FaCss3, FaHtml5, FaJs, FaReact, FaWordpress} from "react-icons/fa";
import {SiFramer, SiNextdotjs} from "react-icons/si";
import Description from "./Description/Description";


const AboutMe = () => {

        const aboutData = [
            {
                title: 'About me',
                info: [
                    {
                        title: 'About me',
                        stage: 'Experienced Front End Developer specializing in React,JS,TS,HTML/CSS, and React-Redux.Skilled in web\n' +
                            '            development and web design.\n' +
                            '            Native speaker in Ukranian, upper-intermidiate English, intermidiate in Czech. Passionate about bringing\n' +
                            '            ideas to life through innovative web solutions"'
                    }
                ]
            },
            {
                title: 'skills',
                info: [
                    <FaHtml5/>,
                    <FaCss3/>,
                    <FaJs/>,
                    <FaReact/>,
                    <SiNextdotjs/>,
                    <SiFramer/>,
                    <FaWordpress/>,
                ],
            },
            {
                title: 'experience',
                info: [
                    {
                        title: 'UX/UI Designer - XYZ Company',
                        stage: '2012 - 2023',
                    },
                    {
                        title: 'Web Developer - ABC Agency',
                        stage: '2010 - 2012',
                    },
                    {
                        title: 'Intern - DEF Corporation',
                        stage: '2008 - 2010',
                    },
                ]
            }
        ]


        return (
            <div className={block.contactsBlock}>
                <div className={style.aboutmeContainer}>
                    <div className={style.photo}>Photo</div>
                    <div>
                      <Description/>
                    </div>
                </div>
            </div>
        );
    }
;

export default AboutMe;