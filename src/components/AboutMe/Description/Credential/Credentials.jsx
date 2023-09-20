import React, {useState} from 'react';
import style from './Credentials.module.css'
import kpi from '../../../../assests/img/credentialsImg/kpi-big-logo.png'

export const Credentials = () => {

    const credential = [{

        title: 'NTUU KPI',
        years: '2015-2019',
        description: 'production automation engineer',
        img: kpi
    },
        {
            title: 'IPTKiSSumDU',
            years: '2013-2015',
            description: 'production automation technologist',
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
                    <span>{el.description}</span>
                </div>
            })}
        </div>
    );
};




export const Experience = () => {

    const [state, setState] = useState(true)


    const check = () => {
        setState(!state)
        console.log(state);
    }


    const experience = [{
        title: 'Mindy Support',
        years: '2016-2017',
        description: 'Graphic Assistant'
    },
        {
            title: 'BAT Ukraine',
            years: '2018-2018',
            description: 'engineer assistant'
        },
        {
            title: 'Skoda Auto CZ',
            years: '2019-2021',
            description: "Production Technician"
        },
        {
            title: 'Freelancer',
            years: '2022-2023',
            description: "Frontend Developer"
        },
        {
            title: 'Berlin Labc LLC',
            years: '04.2023-07.2023',
            description: "Frontend Developer"
        }
    ]

    return (
        <div className={style.expierence}>
            {experience.map((el, index) => {
                return <div className={style.expierenceBlock}
                            onClick={check}
                            key={index}
                >
                    <span>
                        {el.title}
                    </span>
                    <span>{el.years}</span>
                    <span>{el.description}</span>

                </div>
            })}
        </div>
    );

}