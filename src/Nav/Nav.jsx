import React from "react";
import style from "../Nav/Nav.module.css";
import {Link} from 'react-scroll'

function Nav() {
    return (
        <div className={style.navContainer}>
            <ul className={style.navMenu}>
                <li>
                    <Link to="main"
                          smooth={true}>
                        Main
                    </Link>
                </li>
                <li>
                    <Link to="skills"
                          smooth={true}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects"
                          smooth={true}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contacts"
                          smooth={true}>
                        Contact me
                    </Link></li>
            </ul>
        </div>
    );
}

export default Nav;
