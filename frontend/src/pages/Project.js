import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { projectFetch } from "../store/projectReducer";
import Projects from "./ProjectList";

function Project() {
  const projects = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectFetch());
  }, [dispatch]);

  const { id } = useParams;

  return (
    <Container>
      <Head>Project</Head>
      <ProjectBox>
        {
          <div key={projects[id]} className="project">
            <div>
              <img src={projects[0].photo} alt={projects[0]}></img>
            </div>
            <div className="title">{projects[0].projectTitle}</div>
            <div className="description">{projects[0].projectDescription}</div>
            <div className="author">created by: {projects[0].userId}</div>
          </div>
        }
      </ProjectBox>
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

const ProjectBox = styled.div`
  // background-color: blue;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  color: grey;
  box-sizing: border-box;
  // border: 1px solid blue;

  img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    // border: 1px solid red;
    height: 50vh;
    width: 50vw;
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

export default Project;
