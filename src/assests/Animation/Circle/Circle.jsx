import React from 'react';
import styled, {keyframes} from 'styled-components';
import image from '../../img/animatedIMg/circles.png'


const pulseAnimation = keyframes`
  0% {
    filter: brightness(100%);
  }
  50% {
    filter: brightness(120%);
  }
  100% {
    filter: brightness(100%);
  }
`;

const CirclesContainer = styled.div`
  width: 200px;
  height: auto;
  max-width: 100%;
  position: absolute;
  right: -50px;
  bottom:-20px;
  padding: -50px;
  mix-blend-mode: color-dodge;
  animation: ${pulseAnimation} 4s infinite;/* Apply the pulse animation here */
  z-index: 0;

  @media (min-width: 1280px) {
    width: 300px;
  }
`;

const CirclesImage = styled.img`
  width: 260px;
  height: 200px;
`;



const Circles = () => {
    return (
        <CirclesContainer>
            <CirclesImage
                src={image}
                alt=''
            />
        </CirclesContainer>
    );
};

export default Circles;
