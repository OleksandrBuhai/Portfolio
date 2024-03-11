import React, {useState} from 'react';
import style from './Credentials.module.css'
import kpi from '../../../../assests/img/credentialsImg/kpi-big-logo.png'
import itInc from '../../../../assests/img/credentialsImg/itIncubator.svg'

export const Credentials = () => {

    const credential = [
        {
            title: 'IT-Incubator',
            years: '2020-2021',
            description: 'Front End Developer',
            img:itInc
        },
        {

        title: 'NTUU KPI',
        years: '2015-2019',
        description: 'Automation engineer',
        img: kpi
    },
        {
            title: 'IPTKiSSumDU',
            years: '2013-2015',
            description: 'Automation technologist',
            img: kpi
        }
    ]


    return (

        <div className={style.credentials}>
            {credential.map((el, index) => {
                return <div className={style.blocks}
                            key={index}
                            style={{backgroundImage: `url(${el.img})`, backgroundSize: 'cover'}}>
                    <span>
                        {el.title}
                    </span>
                    <span>{el.years}</span>
                    <span style={{color:'#EE6D52', fontWeight:'400'}}>{el.description}</span>
                </div>
            })}
        </div>
    );
};




export const Experience = () => {

    const [state, setState] = useState(true)


    const experience = [

        {
            title: 'Berlin Labc LLC',
            years: '04.2022-07.2022',
            description: "Front End Developer"
        },
        {
            title: 'Freelance',
            years: '07.2022-03.2024',
            description: "Front End Developer"
        },
        {
            title: 'Skoda Auto',
            years: '05.2019-12.2022',
            description: 'Production Technoligist'
        },
        {
            title: 'BAT Ukraine',
            years: '12.2016-07.2017',
            description: 'Middle Manufaturing operator'
        },
    
        {
            title: 'Mindy Support',
            years: '12.2016-07.2017',
            description: 'Graphic Assistant'
        },
    ]

    return (
        <div className={style.credentials}>
            {experience.map((el, index) => {
                return <div className={style.blocks}
                            key={index}
                >
                    <span>
                        {el.title}
                    </span>
                    <span>{el.years}</span>
                    <span style={{color:'#EE6D52', fontWeight:'400'}}>{el.description}</span>

                </div>
            })}
        </div>
    );

}