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
          <div>
            <i className="fas fa-plus-circle fa-3x"></i>
            <span>Add Project</span>
          </div>
        </NavLink>
      </AddProject>

      <List>
        {projects.map((project) => (
          <NavLink key={project.projectTitle} to={`/project/${project.id}`}>
            <div>
              <img src={project.photo} alt={project.photo}></img>
            </div>
            <div>{project.projectTitle}</div>
            <div>{project.projectDescription}</div>
          </NavLink>
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
  img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid red;
    width: 30%;
  }

  div {
  }
`;

export default Projects;
