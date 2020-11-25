// import { style } from '@material-ui/system';
import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <h2>About Us</h2>
      <Info>INFO@MAKEY.COM / TEL: 123-456-7890</Info>
      <Line>_____________</Line>
      <Words>
        I'm a paragraph. Click here to add your own text and edit me. Let your
        users get to know you
      </Words>
      <Base>©2020 Makey Proudly created by App Academy July Cohort</Base>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f4f3f2;
  height: 660px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    padding-top: 4em;
    color: #756f63;
    font-weight: 200;
    font-family: nunito sans;
    font-size: 40px;
    text-align: center;
    padding-bottom: 30px;
  }
`;

const Info = styled.div`
  color: #756f63;
  font-weight: 200;
  font-family: nunito;
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.3em;
`;

const Line = styled.div`
  color: #756f63;
  margin: 0px 0px;
  text-align: center;
  font-family: nunito;
  padding-bottom: 1em;
`;

const Words = styled.div`
  box-sizing: border-box;
  height: 12em;
  width: 28em;
  padding-top: 30px;
  text-align: center;
  color: #756f63;
  font-family: nunito;
  font-size: 15px;
  letter-spacing: 0.05em;
  font-weight: 200;
  padding-bottom: 18em;
`;

const Base = styled.div`
  background-color: #756f63;

  color: #ffffff;
  font-weight: 200;
  font-family: nunito;
  font-size: 13px;
  text-align: center;
  letter-spacing: 0.05em;
  padding-top: 1em;
  height: 100%;
  width: 100%;
`;

export default About;
