import React from 'react';
import style from './App.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from "./Main/Main/Main";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import AboutMe from "./AboutMe/AboutMe";
import Transition from "./Transinition/Transinition";


function App() {


    return (
        <div className={style.App}>
            <Header/>
            <Transition/>
            <Main/>
            <AboutMe/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>

    );
}

export default App;
