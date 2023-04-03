import React from "react";
import style from "../Main/Main.module.css"


function Main() {

      return (
            <div className={style.main}>
                  <div className={style.container}>
                        <div className={style.text}>
                              <span>Hello</span>
                              <h1>I am Oleksandr</h1>
                              <p>Frond-End Developer</p>
                        </div>
                        <div className={style.photo}>
                        </div>
                  </div>
            </div>
      )
}


export default Main