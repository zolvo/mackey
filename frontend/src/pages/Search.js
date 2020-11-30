import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { searchAll } from "../store/searchReducer";

function Search() {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchAll(search));
  });

  return (
    <Container>
      <Head>Search</Head>
      <Wrapper></Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 5em;
  text-align: center;
  background-color: #f6f6f6;
`;

const Head = styled.div`
  font-size: 42px;
  letter-spacing: 0.05em;
  padding-top: 0.2em;
  padding-bottom: 1em;
  background-color: white;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export default Search;
