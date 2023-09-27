import styled, { keyframes } from 'styled-components';


const animate1 = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

const animate2 = keyframes`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`;

const animate3 = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`;

const animate4 = keyframes`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`;


const StyledButton = styled.a`
  cursor: pointer;
  width: 15rem;
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  margin: 40px 0;
  color: antiquewhite;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  margin-right: 50px;


  &:hover {
    background: antiquewhite;
    color: #050801;
    /*box-shadow: 0 0 5px antiquewhite, 0 0 25px antiquewhite, 0 0 50px antiquewhite, 0 0 200px antiquewhite;*/
    -webkit-box-reflect: below 1px linear-gradient(transparent, white);

    /* Pause animations on hover */
    span:nth-child(1) {
      background: none;
      animation-play-state: paused;
    }

    span:nth-child(2) {
      background: none;
      animation-play-state: paused;
    }

    span:nth-child(3) {
      background: none;
      animation-play-state: paused;
    }

    span:nth-child(4) {
      background: none;
      animation-play-state: paused;
    }
  }

  &:nth-child(1) {
    filter: hue-rotate(270deg);
  }

  &:nth-child(2) {
    filter: hue-rotate(110deg);
  }

  span {
    position: absolute;
    display: block;
  }

  span:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #EE6D52;
    animation: ${animate1} 2s linear infinite;
  }
  

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: #EE6D52;
    animation: ${animate2} 2s linear infinite;
    animation-delay: 0.25s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: black;
    animation: ${animate3} 2s linear infinite;
    animation-delay: 0.5s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: #EE6D52;
    animation: ${animate4} 2s linear infinite;
    animation-delay: 0.75s;
  }
`;

export const Button = (props) => {
    const pdfURL = "https://github.com/OleksandrBuhai/Portfolio/raw/main/src/assests/animation/resume/Alex_Buhai_CV.pdf";

    const handleDownloadPDF = () => {
        const link = document.createElement("a");
        link.href = pdfURL;
        link.download = "Alex_Buhai_CV.pdf";


        link.click();
    };


    return (
        <StyledButton onClick={handleDownloadPDF}>
            {props.name}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </StyledButton>
    )
}
