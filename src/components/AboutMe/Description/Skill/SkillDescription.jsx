import React, {useEffect, useState} from 'react';
import style from './SkillDescription.module.css';
import {buildStyles, CircularProgressbarWithChildren,} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import react from '../../../../assests/img/colorful/react.svg'
import html from '../../../../assests/img/colorful/html.svg'
import css from '../../../../assests/img/colorful/css.svg'
import js from '../../../../assests/img/colorful/js.svg'
import ts from '../../../../assests/img/colorful/ts.svg'
import redux from '../../../../assests/img/colorful/redux.svg'
import git from '../../../../assests/img/colorful/git.svg'


export const SkillDescription = () => {
    const skillText = [
        { title: 'React', img: react, progress: 80 },
        { title: 'JavaScript', img: js, progress: 70 },
        { title: 'TypeScript', img: ts, progress: 70 },
        { title: 'HTML', img: html, progress: 60 },
        { title: 'CSS', img: css, progress: 60 },
        { title: 'Redux', img: redux, progress: 75 },
        { title: 'Git', img: git, progress: 75 },

    ];


    const [progressValues, setProgressValues] = useState(
        skillText.map(() => 0)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressValues((prevValues) =>
                prevValues.map((value, index) =>
                    value < skillText[index].progress ? value + 5 : value
                )
            );
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={style.gridContainer}>
            {skillText.map((el,index)=>{

                return (
                    <div key={index} className={style.circular}>
                        <CircularProgressbarWithChildren
                            value={progressValues[index]}
                            minValue={0}
                            styles={buildStyles({
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathColor: `rgba(255, 255, 255, ${progressValues[index] / 100})`, // Red color
                                textColor: 'white',
                                trailColor: 'black',
                                backgroundColor: 'white',
                            })}
                        >
                            <div className={style.gridItem}>

                                <img style={{width:'3rem'}} src={el.img}/>
                                <span >{el.title}</span>
                            </div>
                        </CircularProgressbarWithChildren>

                    </div>
                )
            })}

        </div>
    );
};
