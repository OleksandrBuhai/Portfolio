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
            years: '04.2023-07.2023',
            description: "Front End Developer"
        },
        {
            title: 'Freelancer',
            years: '06.2022-05.2023',
            description: "Front End Developer"
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