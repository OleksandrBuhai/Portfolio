import React, {useEffect} from "react";
import styles from "./Projects.module.css";
import containerStyle from '../assests/styles/Container.module.css'
import Project from "./Project/Project";
import AOS from "aos";
import 'aos/dist/aos.css';
import socialNetworkImg from '../../src/assests/img/projectsImg/socialNetwork.webp'
import todoListIMg from '../../src/assests/img/projectsImg/todolist.png'
import gymWebImg from '../../src/assests/img/projectsImg/GymWebSite.png'


function Projects() {


    useEffect(() => {
        AOS.init();
    }, [])

    const projectInfo = [
        {
            url: ' ',
            gitHubLink: 'https://github.com/OleksandrBuhai/ToDoList',
            picture: todoListIMg,
            name: 'ToDo List',
            text: 'That\'s my lovest project, where I used much of my knowledge. Here I am trying to implement all the new technologies which I learned in past, and test many features i seen. \n' +
                'For this project i used : TypeScript, CSS,  React ,Redux ,Redux Toolkit  ,Snapshot testing, Unit testing, StoryBook ,Material UI '
        },
        {
            url: false,
            gitHubLink: 'https://github.com/OleksandrBuhai/SocialNetwork',
            picture: socialNetworkImg,
            name: 'Social Network',
            text: 'With this project, I learned how to work with classes components, which could be handy with some old applications. Researched how to work Redux under the hood, was working with old libraries '
        },
        {
            url: false,
            gitHubLink: 'https://github.com/OleksandrBuhai/Portfolio',
            picture: '',
            name: 'Portfolio',
            text: 'My portfolio web site. Here i used almost all of my knowledge in web development'
        },
        {
            url: false,
            gitHubLink: 'https://github.com/OleksandrBuhai/GymSite',
            picture: gymWebImg,
            name: 'Gym Website',
            text: 'How probably can look  web site for gym.In this projects I used React.JS, framer-motion and another ' +
                'technique for making that look more cool and more interesting than another similar projects on the market'
        }
    ]


    return (
        <div className={`${styles.projectsBlock} ${containerStyle.bckgrndColor2}`} id={'projects'}>

            <div className={containerStyle.container}>

                <h3 className={styles.header}>My projects</h3>

                {projectInfo.map((el, index) => {

                    const isEven = index % 2 === 0;

                    return <div key={index} className={`${styles.projects} ${isEven ? styles.even : styles.odd}`}
                                data-aos="zoom-in-right">
                        <Project url={el.gitHubLink} name={el.name} text={el.text} picture={el.picture}/>
                        <div className={styles.textContainer}>
                            <span>{el.name}</span>
                            <span>{el.text}</span>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default Projects