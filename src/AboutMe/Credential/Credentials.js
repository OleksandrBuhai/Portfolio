import React, {useState} from 'react';
import style from '../Credential/Credentials.module.css'
import kpi from '../../assests/img/credentialsImg/kpi-big-logo.png'
import kipt from '../../assests/img/credentialsImg/kipt1.png'

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
                    <h6>
                        {el.title}
                    </h6>
                    <span>{el.years}</span>
                    <h6>{el.description}</h6>
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
                    <h6>
                        {el.title}
                    </h6>
                    <span>{el.years}</span>
                    <h6>{el.description}</h6>

                </div>
            })}
        </div>
    );

}