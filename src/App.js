import React from 'react';
import style from './App.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from "./Content/Content";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
      <div className={style.App}>
              <Header />
              <Content />
              <Footer />
      </div>

  );
}

export default App;
