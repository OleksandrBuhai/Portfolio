import React from 'react';
import {Outlet, Route, Routes, useLocation} from 'react-router-dom';
import Main from "../Main/Main/Main";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";

const Content = () => {
    const location = useLocation();

    return (
        <div >
            <Routes location={location}>
                <Route path="/" element={<AllComponents />  } exact={true.toString()}/>
                <Route path="/main" element={<Main />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </div>
    );
};

const AllComponents = () => {
    return (
        <React.Fragment>
            <Main />
            <Skills />
            <Projects />
            <Contacts />
        </React.Fragment>
    );
};


export default Content;