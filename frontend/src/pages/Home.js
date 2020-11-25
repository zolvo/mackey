import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const history = useHistory();
  const toLogin = () => history.push("/login");
  return (
    <HomeWrapper>
      <Title>MAKE YOUR FIRST STEP TO MAKE SOMETHING</Title>
      <Logo>MAKEY!</Logo>
      <Words>Now Available For You</Words>
      <LoginButton>
        <button onClick={toLogin}>
          {/* <i className="fas fa-sign-in-alt"></i> */}
          <span>Login</span>
        </button>
      </LoginButton>
      <Footer>created by @appAcademy August cohort 2020</Footer>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  background-color: #e4f7ff;
  height: 100%;
  width: 100%;
  padding-top: 5em;
`;

const Title = styled.div`
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.18em;
  font-weight: 700;
  padding-top: 100px;
  padding-bottom: 50px;
`;

const Logo = styled.div`
  font-size: 110px;
  font-weight: lighter;
  text-align: center;
  letter-spacing: 0.18em;
  padding-bottom: 30px;
  font-family: noto sans jp;
`;

const Words = styled.div`
  font-size: 22px;
  text-align: center;
  letter-spacing: 0.25em;
  padding-bottom: 4em;
`;

const LoginButton = styled.div`
  text-align: center;
  padding-bottom: 6em;

  i {
    color: #413f39;
  }
  span {
    padding-left: 10px;
    padding-right: 10px;
    letter-spacing: 0.08em;
  }
`;

const Footer = styled.div`
  padding-top: 5em;
  color: grey;
  text-align: center;
  font-size: 12px;
  background-color: white;
  letter-spacing: 0.15em;
`;

export default Home;
