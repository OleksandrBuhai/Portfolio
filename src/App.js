import React from 'react';
import style from './App.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from "./Content/Content";
import {BrowserRouter} from "react-router-dom";
import Main from "./Main/Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";


function App() {
    return (
        <div className={style.App}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>

    );
}

export default App;
