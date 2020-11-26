import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
// import Home from "../../Pages/Home";
// import LoginFormModal from "../LoginFormModal";
// import "./Navigation.css";
import logo from "../assets/logo.jpg";
import styled from "styled-components";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        {/* <LoginFormModal /> */}
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  const handleSubmit = () => {};

  return (
    <NavWrapper>
      <li>
        <div>
          <img src={logo} alt={logo} />
          <span className="logoName">Makey!</span>
        </div>
        <div>
          <NavLink exact to="/main">
            <i className="fas fa-home"></i>
            <span className="home">Home</span>
          </NavLink>
          <NavLink exact to="/project">
            <i className="far fa-folder"></i>
            <span className="home">Projects</span>
          </NavLink>
        </div>
        <div>
          <i className="fas fa-search"></i>
          <input
            className="searchBar"
            type="text"
            placeholder="find project, recipe, interest"
            onSubmit={handleSubmit}
          />
        </div>
        {isLoaded && sessionLinks}
      </li>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  display: flex;
  background-color: white;
  opacity: 0.92;
  position: fixed;
  height: 5em;
  width: 100%;

  li {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
  }

  div {
    box-sizing: border-box;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    font-weight: 700;
    height: 2em;
  }

  .logoName {
    letter-spacing: 0.3em;
  }

  img {
    box-sizing: border-box;
    border: 3px solid #ff9e02;
    padding: 3px;
    height: 2.5em;
    width: auto;
    margin-right: 8px;
  }

  .fa-home {
    color: #413f39;
  }

  .fa-search {
    color: #413f39;
  }

  .fa-folder {
    color: #413f39;
    padding-left: 1.5em;
  }

  .searchBar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-left: 5px;
    padding-left: 5px;
    box-sizing: border-box;
    height: 30px;
    border-radius: 20px;

    border: 1px solid #ffffff;
    background-color: #fefefe;
  }

  .home {
    font-size: 14px;
    padding-left: 5px;
  }

  .welcome {
    font-size: 12px;
    letter-spacing: 0em;
    padding-right: 5px;
  }
`;

export default Navigation;
