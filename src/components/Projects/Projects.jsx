import React, {useEffect} from "react";
import styles from "./Projects.module.css";
import Project from "./Project/Project";
import AOS from "aos";
import 'aos/dist/aos.css';
import socialNetworkImg from '../../assests/img/projectsImg/socialNetwork.webp'
import todoListIMg from '../../assests/img/projectsImg/todolist.png'
import gymWebImg from '../../assests/img/projectsImg/GymWebSite.png'
import influexaImg from '../../assests/img/projectsImg/Influexa.jpg'
import portfolioIMG from '../../assests/img/projectsImg/portfolioIMG.png'
import ecComerceImg from '../../assests/img/projectsImg/eComerce.png'
import socialMedia from '../../assests/img/projectsImg/socialMedia.jpg'


function Projects() {


    useEffect(() => {
        AOS.init();
    }, [])

    const projectInfo = [
        {
            url: false,
            gitHubLink: 'https://github.com/OleksandrBuhai/Portfolio',
            gitHubRepo: 'https://oleksandrbuhai.github.io/Portfolio/',
            picture: portfolioIMG,
            name: 'Portfolio',
            text: 'My portfolio web site. Here i used almost all of my knowledge in web development'
        },
        {
            url: false,
            gitHubLink: 'https://oleksandrbuhai.github.io/eComerce/',
            gitHubRepo: 'https://github.com/OleksandrBuhai/eComerce',
            picture: ecComerceImg,
            name: 'eCommerce',
            text: 'eCommerce web site where u can look, buy different stuff.Making with React, TS, Tailwind CSS'
        },
        {
            url: false,
            gitHubLink: 'https://oleksandrbuhai.github.io/GymSite/',
            gitHubRepo: 'https://github.com/OleksandrBuhai/GymSite',
            picture: gymWebImg,
            name: 'Gym Website',
            text: 'How probably can look  web site for gym.In this projects I used React.JS, framer-motion and another '
                
        },

        {
            url: false,
            gitHubRepo: 'https://github.com/OleksandrBuhai/Influenser',
            picture: influexaImg,
            name: 'Influexa',
            text: 'Landing page. Make with Vite, React, TailwindCSS.'
        },
        {
            url: ' ',
            gitHubRepo: 'https://github.com/OleksandrBuhai/ToDoList',
            picture: todoListIMg,
            name: 'ToDo List',
            text: 'For this project i used: TypeScript, CSS,  React, Redux, Redux Toolkit, Snapshot testing, Unit testing, StoryBook, Material UI '
        },
        {
            url: false,
            gitHubRepo: 'https://github.com/OleksandrBuhai/SocialNetwork',
            picture: socialMedia,
            name: 'Social Network',
            text: 'With this project, I learned how to work with classes components, which could be handy with some old applications. Researched how to work Redux under the hood, was working with old libraries '
        },




    ]


    return (
        <div className={styles.projectsBlock } id={'Projects'}>

            <div className={styles.projectsContainer}>

                <h3 className={styles.header}>Projects</h3>

                {projectInfo.map((el, index) => {

                    const isEven = index % 2 === 0;

                    return <div key={index} className={`${styles.projects} ${isEven ? styles.even : styles.odd}`}
                                data-aos="zoom-in-right">
                        <Project url={el.gitHubLink} repoUrl={el.gitHubRepo} name={el.name} text={el.text} picture={el.picture}/>
                        <div className={styles.textContainer}>
                            <h4>{el.name}</h4>
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