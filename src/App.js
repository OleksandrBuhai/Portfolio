import React from 'react';
import style from './App.module.css';
import Footer from './components/Footer/Footer';
import {Main} from "./components/Main/Main/Main";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import {AboutMe} from "./components/AboutMe/AboutMe";
import Transition from "./components/Transinition/Transinition";
import {Header} from "./components/Header/Header";



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
