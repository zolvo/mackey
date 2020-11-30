import React from "react";
import styled from "styled-components";
import DIY from "../assets/DIY.jpg";
import DIY2 from "../assets/DIY2.jpg";
import About from "./About";
import ProjectMain from "../components/ProjectMain";

function Main() {
  return (
    <MainWrapper>
      <FirstPage>
        <ImageContainer1>
          <img src={DIY} alt={DIY} />
        </ImageContainer1>
        <div className="title">MAKE SOMETHING TO MAKE YOU HAPPY</div>
        <div className="logo">CREATE</div>
        <div className="words">ANY OF YOUR INTEREST</div>
      </FirstPage>
      <SecondPage>
        <TextContainer>
          <div className="title">ABOUT MAKEY!</div>
          <div className="word">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. ​ ​
            <p>
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide.
            </p>
          </div>
        </TextContainer>
        <ImageContainer2 />
      </SecondPage>
      <ThirdPage>
        <ProjectMain />
      </ThirdPage>
      <FourthPage>
        <About />
      </FourthPage>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImageContainer1 = styled.div`
  img {
    box-sizing: border-box;
    // opacity: 0.5;
    width: 50%;
    padding-top: 2em;
  }
`;

const ImageContainer2 = styled.div`
  box-sizing: border-box;
  background-image: url(${DIY2});
  height: 80%;
  width: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FirstPage = styled.div`
  text-align: center;
  padding-top: 5em;
  height: 710px;
  width: 100%;
  background-color: #e4f7ff;

  .title {
    font-size: 17px;
    text-align: center;
    letter-spacing: 0.18em;
    font-weight: 700;
    padding-top: 100px;
    padding-bottom: 30px;
  }

  .logo {
    font-size: 110px;
    font-weight: lighter;
    text-align: center;
    letter-spacing: 0.18em;
    padding-bottom: 30px;
    font-family: noto sans jp;
  }

  .words {
    font-size: 22px;
    text-align: center;
    letter-spacing: 0.25em;
  }
`;

const SecondPage = styled.div`
  background-color: white;
  height: 720px;
  width: 100%;
  display: flex;
  flex-content: column;
  align-items: center;
  justify-content: space-evenly;
  // border: 1px solid blue;

  .title {
    font-family: noto sans jp;
    font-size: 42px;
    padding-bottom: 30px;
    letter-spacing: 0.1em;
  }

  .word {
    letter-spacing: 0.03em;
    font-family: nunito;
    font-size: 14px;
    color: grey;
    font-weight: 200;
    box-sizing: border-box;
    // border: 1px solid red;
    width: 26em;
  }
  p {
    padding-top: 20px;
  }
`;

const ThirdPage = styled.div`
  background-color: lightcyan;
  text-align: center;
  height: 730px;
  width: 100%;
`;
const FourthPage = styled.div`
  background-color: #f4f3f2;
  text-align: center;
  height: 720px;
  width: 100%;
`;

export default Main;
