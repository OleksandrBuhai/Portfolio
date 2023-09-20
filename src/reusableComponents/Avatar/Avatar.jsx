import React from 'react';
import styled from "styled-components";
import testImg from "../../assests/img/photo/test2Ava.png";

const Styled = styled.div`
  
  position: absolute;
  z-index: 9;
  @media (max-width: 760px) {
    position: relative;
   
  }

`

const Img = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-width: 760px) {
      max-height: 100%;
    height:auto;
    
  }

`

const Avatar = () => {
    return <Styled>
        <Img src={testImg}
             alt='' className=''/>
    </Styled>
}
export default Avatar;