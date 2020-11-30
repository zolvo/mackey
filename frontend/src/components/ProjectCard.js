import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { projectFetch } from "../store/projectReducer";

function ProjectCard() {
  const projects = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectFetch());
  }, [dispatch]);

  return (
    <Container>
      <Box>
        {projects.slice(0, 2).map((project) => {
          <div key={project.id} className="project">
            <div>
              <img src={project.photo} alt={project.photo} />
            </div>
            <div className="title">{project.projectTitle}</div>
            <Line>_____________</Line>
            <div className="description">{project.projectDescription}</div>
            <buton>Detail</buton>
          </div>;
        })}
      </Box>
    </Container>
  );
}

const Container = styled.div``;

const Box = styled.div`
  box-sizing: border-box;
  border: 5px solid black;
  margin: 0 auto;
  width: 14em;
  height: 20em;
  margin-top: 5em;
  //   margin-left: 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5em;

  // height: 100%;
  // width: 100%;
  display: flex;
  justify-content: center;

  color: grey;
  box-sizing: border-box;
  // border: 1px solid blue;

  .project {
    border-size: border-box;
    width: 13em;
    height: 20em;
    border: 1px solid grey;
    display: flex;
    margin-left: 1em;
  }

  img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    // border: 1px solid red;
    height: 9em;
    width: 100%;
    padding: 0.6em;
  }

  .title {
    margin-top: 1em;
    font-weight: bold;
    font-size: 18 px;
    color: grey;
  }

  .description {
    font-weight: lighter;
    font-size: 14px;
    color: grey;
    padding: 0.6em;
  }

  .author {
    margin-top: 3em;
    font-weight: lighter;
    font-size: 12px;
    color: grey;
    padding: 0.6em;
  }
`;

const Line = styled.div`
  color: grey;
  margin: 0px 0px;
  text-align: center;
  font-family: monserrat;
  padding-bottom: 1em;
`;

export default ProjectCard;
