import React from "react";
import style from "../Main/Main.module.css"
import containerStyle from "../../common/styles/Container.module.css"


function Main() {

      return (
            <div className={`${style.main} ${containerStyle.bckgrndColor}`}>
                  <div className={containerStyle.container}>
                        <div className={style.text}>
                              <h3>Hello </h3>
                              <h1>I am Oleksandr Buhai</h1>
                              <h3>And I'm a <span>Frontend Developer</span></h3>
                              <p>
                                    Working on part time , keep studying  HTML,CSS, React, JS/TS
                              </p>
                              <div class="social-media">
                                    <a href=""><i class='bx bxl-instagram'></i></a>
                                    <a href=""><i class='bx bxl-facebook-circle'></i></a>
                                    <a href=""><i class='bx bxl-linkedin'></i></a>
                              </div>
                        </div>
                        <div className={style.photo}>
                        </div>
                  </div>
            </div>
      )
}


export default Main