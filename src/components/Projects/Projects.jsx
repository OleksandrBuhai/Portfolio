import AOS from "aos";
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import CaptionBuilderApp from '../../assests/img/projectsImg/CaptionBuilder.png';
import gymWebImg from '../../assests/img/projectsImg/GymWebSite.png';
import influexaImg from '../../assests/img/projectsImg/Influexa.jpg';
import memeIMG from '../../assests/img/projectsImg/MemeSearch.png';
import ecComerceImg from '../../assests/img/projectsImg/eComerce.png';
import portfolioIMG from '../../assests/img/projectsImg/portfolioIMG.png';
import salesAnalytics from '../../assests/img/projectsImg/salesAnalytics.png'
import skiResort from '../../assests/img/projectsImg/SkiResort.png'
import drumNpad from '../../assests/img/projectsImg/drumNpad.png'
import Project from "./Project/Project";
import styles from "./Projects.module.css";


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
            text: 'Portfolio web site. Here i used almost all of my knowledge in web development.'
        },
        {
            url: false,
            gitHubLink: 'https://github.com/OleksandrBuhai/Portfolio',
            gitHubRepo: 'https://caption-builder.vercel.app/',
            picture: CaptionBuilderApp,
            name: 'Caption Builder',
            text: 'Caption Builder App. Caption builder for your video. Develop with NextJS, TailwindCSS, AWS.'
        },
        {
            url: false,
            gitHubLink: 'https://github.com/OleksandrBuhai/UI_DESIGN_SALES_ANALYTYC',
            gitHubRepo: 'https://ui-design-sales-analytyc.vercel.app/',
            picture: salesAnalytics,
            name: 'Sales Analytics UI Design',
            text: 'Sales Analytics UI landing page. Develop with React, Ts, Styled components.'
        },
        {
            url: false,
            gitHubLink: 'https://ski-resort-9wg9-zdp1akhfq-oleksandrs-projects-847aa668.vercel.app/',
            gitHubRepo: 'https://github.com/OleksandrBuhai/SkiResort',
            picture: skiResort,
            name: 'Ski resort',
            text: 'Ski resort landing page, with parralax effect. Develop with React, JS, CSS.'
        },
        {
            url: false,
            gitHubLink: 'https://oleksandrbuhai.github.io/eCommerce/',
            gitHubRepo: 'https://github.com/OleksandrBuhai/eCommerce',
            picture: ecComerceImg,
            name: 'eCommerce',
            text: 'eCommerce web site where you can look, buy different stuff. Making with React, TS, Tailwind CSS, RTK.'
        },
        {
            url: false,
            gitHubLink: 'https://oleksandrbuhai.github.io/DrumPad/',
            gitHubRepo: 'https://github.com/OleksandrBuhai/DrumPad',
            picture: drumNpad,
            name: 'drumNpad',
            text: 'drumNpad web app where you can create music. Making with React, TS, TailwindCSS.'
        },
        {
            url: false,
            gitHubLink: 'https://oleksandrbuhai.github.io/memesSearch/',
            gitHubRepo: 'https://github.com/OleksandrBuhai/memesSearch',
            picture: memeIMG,
            name: 'Gif Search',
            text: 'GifSearch web site where you find a gif for any case.Making with React, TS, StyledComponent, Axios, RTK.'
        },
      
        {
            url: false,
            gitHubLink: 'https://oleksandrbuhai.github.io/GymSite/',
            gitHubRepo: 'https://github.com/OleksandrBuhai/GymSite',
            picture: gymWebImg,
            name: 'Gym Website',
            text: 'How probably can look  web site for gym.In this projects I used React.JS, framer-motion and another.'
                
        },

        {
            url: false,
            gitHubRepo: 'https://github.com/OleksandrBuhai/Influenser',
            picture: influexaImg,
            name: 'Influexa',
            text: 'Landing page. Make with Vite, React, TailwindCSS.'
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