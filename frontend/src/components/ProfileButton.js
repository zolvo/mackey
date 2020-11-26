import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../store/session";
import styled from "styled-components";
import { Redirect, useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <ButtonWrapper>
      <div className="welcome">Welcome {user.username}</div>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>user: {user.username}</li>
          <li>email: {user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  font-size: 12px;

  li {
    box-sizing: border-box;
    /* border: 1px solid red; */
    display: flex;
    justify-content: flex-start;
  }

  button {
  }
`;

export default ProfileButton;
