import React from "react";
import style from "../Main/Main.module.css"
import containerStyle from "../../common/styles/Container.module.css"


function Main() {

      return (
            <div className={`${style.main} ${containerStyle.bckgrndColor}`}>
                  <div className={containerStyle.container}>
                        <div className={style.text}>
                              <span>Hello </span>
                              <h1>I am Oleksandr Buhai</h1>
                              <p>And I'm a Frontend Developer</p>
                        </div>
                        <div className={style.photo}>
                        </div>
                  </div>
            </div>
      )
}


export default Main