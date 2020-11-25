import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function ProjectList() {
  const history = useHistory();
  const detail = () => history.push("/project/:id");

  return (
    <Wrapper>
      <Title>HOW I CAN HELP YOU</Title>
      <Container>
        <Box>
          <Picture>TITLE</Picture>
          <Line />
          <Description />
          <button onClick={detail}>Detail</button>
        </Box>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Title = styled.div`
  box-sizing: border-box;
  //   border: 1px solid red;
  height: 45px;
  width: 245px;
  font-family: noto sans jp;
  font-size: 35px;
  // padding-bottom: 30px;
  letter-spacing: 0.05em;
  margin-left: 4em;
  margin-top: 1.5em;
  line-height: 1em;
`;

const Container = styled.div``;

const Box = styled.div`
  box-sizing: border-box;
  border: 5px solid black;
  width: 14em;
  height: 20em;
  margin-top: 5em;
  margin-left: 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.div`
  box-sizing: border-box;
  border: 1px solid red;
  width: 12em;
  heigth: 15em;
`;

const Line = styled.div``;

const Description = styled.div``;

export default ProjectList;
