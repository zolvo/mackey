import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { projectFetch } from "../store/projectReducer";
import ProjectCard from "./ProjectCard";

function ProjectMain() {
  const projects = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(projectFetch());
  }, [dispatch]);

  const allProjects = () => history.push("/project");

  return (
    <Wrapper>
      <Title>HOW I CAN HELP YOU</Title>
      <Container>
        {/* <Box>
          <Picture>
            {projects && projects[0] && projects[0].photo}
            {projects && projects[0] && projects[0].projectTitle}
          </Picture>
          <Line />
          Detail
          <Description />
        </Box> */}
        <Box>
          <ProjectCard projects={projects} />
        </Box>
        <button onClick={allProjects}>All Projects</button>
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
  // border: 1px solid red;
  width: 100%;
  height: 20em;
  margin-top: 5em;
  // margin-left: 1em;
  display: flex;
  flex-direction: rows;
  justify-content: center;
  align-items: center;
  margin-bottom: 5em;
`;

// const Picture = styled.div`
//   box-sizing: border-box;
//   border: 1px solid red;
//   width: 12em;
//   heigth: 15em;
// `;

// const Line = styled.div``;

// const Description = styled.div``;

export default ProjectMain;
