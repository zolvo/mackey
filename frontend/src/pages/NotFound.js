import React from "react";
import styled from "styled-components";

function NotFound() {
  return <NotFoundWrapper>Page 404 NotFound</NotFoundWrapper>;
}

const NotFoundWrapper = styled.h1`
  padding-top: 5em;
  text-align: center;
`;

export default NotFound;
