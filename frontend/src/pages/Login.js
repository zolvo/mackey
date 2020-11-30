import React, { useState } from "react";
import * as sessionActions from "../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/main" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <Container>
      <LoginHeader>LOGIN</LoginHeader>
      <LoginWrapper>
        <form onSubmit={handleSubmit}>
          <Error>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </Error>
          <div>
            <input
              type="text"
              value={credential}
              placeholder="Username or Email"
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Log In</button>
          </div>
          <Footer>
            <div>
              don't have any account?
              <NavLink exact to="/signup">
                <span>Signup</span>
              </NavLink>
            </div>
            <p>@2020 created by: Makey.</p>
          </Footer>
        </form>
      </LoginWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  height: 792px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginHeader = styled.div`
  margin-top: 5em;
  background-color: lightgray;
  font-weight: 900;
  opacity: 0.5;
  height: 4em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Error = styled.div`
  color: red;
  padding-top: 1em;
  /* padding-bottom: 1em; */
  font-weight: 700;
  font-size: 12px;
`;

const LoginWrapper = styled.div`
  padding-top: 2em;
  display: flex;
  /* border: 2px solid red; */
  flex-direction: row;
  width: 500px;
  height: 550px;
  justify-content: center;
  /* box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25); */

  form {
    box-sizing: border-box;
    background-color: #e4f7ff;
    width: 24em;
    height: 29em;
    border: 2px solid pink;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    align-items: center;
    padding: 20px;
  }

  div {
    margin-bottom: 30px;
    text-decoration: none;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  }

  input {
    color: #292721;
    border: none;
    width: 18em;
    height: 3em;
    padding-left: 1em;
    border-radius: 1em;
    outline: none;

    transition: all 0.2x ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }

  button {
    background-color: #ef9d55;
    font-weight: 700;
    border: none;
    width: 18em;
    height: 3em;
    border-radius: 2em;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);

    transition: all 0.2x ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: 30px;
    color: #292721;
  }

  span {
    margin-left: 5px;
    font-weight: 700;
    color: #ef9d55;
  }

  p {
    font-size: 10px;
    color: #292721;
  }
`;

export default Login;
