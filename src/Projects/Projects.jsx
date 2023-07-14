import React, {useEffect} from "react";
import styles from "./Projects.module.css";
import containerStyle from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import AOS from "aos";
import 'aos/dist/aos.css';


function Projects() {


    useEffect(() => {
        AOS.init();
    }, [])

    const projectInfo = [
        {
            url: ' ',
            gitHubLink: '',
            picture: '',
            name: 'ToDo List',
            text: 'That\'s my lovest project, where I used much of my knowledge. Here I am trying to implement all the new technologies which I learned in past, and test many features i seen. \n' +
                'For this project i used : TypeScript, CSS,  React ,Redux ,Redux Toolkit  ,Snapshot testing, Unit testing, StoryBook ,Material UI '
        },
        {
            url: false,
            gitHubLink: '',
            picture: '',
            name: 'Social Network',
            text: 'With this project, I learned how to work with classes components, which could be handy with some old applications. Researched how to work Redux under the hood, was working with old libraries '
        },
        {
            url: false,
            gitHubLink: '',
            picture: '',
            name: 'Counter',
            text: 'My very first project. Here I still test the new library and features. A nice small app to see how some things works :)'
        }
    ]


    /*   {projectInfo.map((el, index) => {

           const order = () => {
               if (props.windowWidth < 850) return '0'
               else return index % 2 === 0 ? '2' : '0'
           }

           return <div className={classes.projectCart}><ProjectCart key={index}
                                                                    url={el.url}
                                                                    gitHubLink={el.gitHubLink}
                                                                    picture={el.picture}
                                                                    windowWidth={props.windowWidth}
           />
               <span className={classes.cardSpanText} style={{
                   order: order()
               }}><div className={classes.projectName}>{el.name}</div>
                   {el.text}</span>

           </div>
       })}*/
    return (
        <div className={`${styles.projectsBlock} ${containerStyle.bckgrndColor2}`} id="projects">
            <div className={containerStyle.container}>
                <h3 className={styles.header}>My projects</h3>

                {projectInfo.map((el, index) => {

                    const isEven = index % 2 === 0;

                    return <div className={`${styles.projects} ${isEven ? styles.even : styles.odd}`}
                                data-aos="zoom-in-right">
                        <Project url={el.url} name={el.name} text={el.text} picture={el.picture}/>
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