import React from 'react';
import styled, {keyframes} from 'styled-components';
import image from '../../img/animatedIMg/bulb.png'


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

const BulbContainer = styled.div`
  width: 200px;
  height: auto;
  max-width: 100%;
  position: absolute;
  left: -130px;
  bottom:-50px;
  padding: -50px;
  transform: rotate(45deg);
  mix-blend-mode: color-dodge;
  animation: ${pulseAnimation} 4s infinite;/* Apply the pulse animation here */
  z-index: 0;

  @media (min-width: 1280px) {
    width: 300px;
  }
`;

const BulbImage = styled.img`
  width: 260px;
  height: 300px;
`;



const Bulb = () => {
    return (
        <BulbContainer>
            <BulbImage
                src={image}
                alt=''
            />
        </BulbContainer>
    );
};

export default Bulb;
