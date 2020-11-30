import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { projectFetch } from "../store/projectReducer";

function Projects() {
  const projects = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectFetch());
  }, [dispatch]);

  return (
    <Container>
      <Head>List Projects</Head>
      <AddProject>
        <NavLink to="/project/add">
          <div className="addIcon">
            <i className="fas fa-plus-circle fa-3x"></i>
            <span>Add Project</span>
          </div>
        </NavLink>
      </AddProject>

      <List>
        {projects.length > 0 &&
          projects.map((project) => (
            <div key={project.id} className="project">
              <NavLink to={`/project/${project.id}`}>
                <div>
                  <img src={project.photo} alt={project.photo}></img>
                </div>
                <div className="title">{project.projectTitle}</div>
                <Line>_____________</Line>
                <div className="description">{project.projectDescription}</div>
                <div className="author">created by: {project.userId}</div>
              </NavLink>
            </div>
          ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 5em;
  text-align: center;
`;
const Head = styled.div`
  font-size: 42px;
  letter-spacing: 0.05em;
  padding-bottom: 2em;
`;

const AddProject = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  border-sizing: border-box;
  div {
    font-size: 13px;
    letter-spacing: 0.1em;
    font-weight: 700;
    color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    height: 5em;
    border-radius: 0.5em;
    margin-left: 45em;
    margin-top: -8em;
  }
`;

const List = styled.div`
  height: 100%;
  width: 100%;
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

export default Projects;
