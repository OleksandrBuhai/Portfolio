import React, {useState} from 'react';
import style from '../Credential/Credentials.module.css'
import kpi from '../../assests/img/credentialsImg/kpi-big-logo.png'

const Credentials = () => {

    const credential = [{

        title: 'NTUU KPI',
        years: '2015-2019',
        description: 'welding production automation engineer',
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

export default Credentials;


export const Experience = () => {

    const [state, setState] = useState(true)


    const check = () => {
        setState(!state)
        console.log(state);
    }


    const experience = [{
        title: 'Mindy Support',
        years: '2016-2017',
        description: 'graphic designer'
    },
        {
            title: 'BAT Ukraine',
            years: '2018-2018',
            description: 'engineer assistant'
        },
        {
            title: 'Skoda Auto CZ',
            years: '2019-2023',
            description: "team leader in production"
        }
    ]

    return (
        <div className={style.credentials}>
            {experience.map((el, index) => {
                return <div className={style.blocks}
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