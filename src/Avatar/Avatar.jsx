import React from 'react';
import image from "../assests/img/photo/avatar.png";
import styled from "styled-components";
import testImg from "../assests/img/photo/test2Ava.png";

const Styled = styled.div`
  position: absolute;
  z-index: 9;
`

const Avatar = () => {
    return <Styled>
        <img src={testImg} width={737} height={678}
             alt='' className=''/>
    </Styled>
}
export default Avatar;