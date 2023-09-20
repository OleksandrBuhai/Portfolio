import React, {useEffect, useState} from "react";
import style from "./Nav.module.css";
import {Link, scroller} from 'react-scroll'

function Nav() {

    const values = [
        {id: 1, text: 'Main'},
        {id: 2, text: 'About'},
        {id: 3, text: 'Projects'},
        {id: 4, text: 'Contacts'},
    ]

    const [activeId, setActiveId] = useState()


    useEffect(() => {
        const handleScroll = () => {
            const elements = ["Main", "About", "Projects", "Contacts"];
            const offset = window.innerHeight * 0.4;

            for (let i = elements.length - 1; i >= 0; i--) {
                const element = elements[i];
                const el = document.getElementById(element);
                if (el && el.getBoundingClientRect().top <= offset) {
                    setActiveId(element);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className={style.navContainer}>
            <ul className={style.navMenu}>
                {values.map((el, index) => (
                    <li key={index}>
                        <Link to={el.text} smooth={true}
                              onClick={() => {
                                  scroller.scrollTo(el.text, {
                                      smooth: true,

                                  });
                              }}
                              className={activeId === el.text ? style.huy : ''}
                        >
                            {el.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Nav;
