import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../store/session";
import styled from "styled-components";

function Signup() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/main" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <Container>
      <SignupHeader>SIGNUP</SignupHeader>
      <SignupWrapper>
        <form onSubmit={handleSubmit} className="form">
          <Error>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </Error>
          <div>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
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
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
          <Footer>
            <div>
              have an account?
              <NavLink exact to="/Login">
                <span>Login</span>
              </NavLink>
            </div>
            <p>@2020 created by: Makey.</p>
          </Footer>
        </form>
      </SignupWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffffff;
  height: 792px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupHeader = styled.div`
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

const SignupWrapper = styled.div`
  padding-top: 2em;
  display: flex;
  /* border: 2px solid red; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 550px;
  /* box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25); */

  form {
    box-sizing: border-box;
    background-color: #e4f7ff;
    width: 24em;
    height: auto;
    border: 2px solid pink;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    align-items: center;
    padding: 20px;
  }

  div {
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    margin-bottom: 30px;
    text-decoration: none;
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
    margin-top: 15px;
    font-size: 10px;
    color: #292721;
  }
`;

export default Signup;
