import React from 'react';
import logo from './logo.svg';
import style from './App.module.css';
import Header from './Header/Header';
import Main from './Main/Main/Main';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import HireMe from './HireMe/HireMe';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';


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
