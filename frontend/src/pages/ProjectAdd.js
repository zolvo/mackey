import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import StepAdd from "../components/StepAdd";

function ProjectAdd() {
  const dispatch = useDispatch();
  const [Title, setTitle] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const data = await fetch("/api/project", {
      method: "POST",
      body: JSON.stringify({
        projectTitle: Title,
      }),
    });
  };

  return (
    <Container>
      <Head>Add Project</Head>
      <Input>
        <form className="projectForm">
          <input
            type="text"
            className="projectTitle"
            placeholder="Title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="projectDescription"
            placeholder="Description"
            // required
          />
          <Photo>
            <button>Add Photo</button>
            <button>Add Video</button>
          </Photo>
          <StepAdd />
          <div>
            <button className="addStep">Add Steps</button>
          </div>
          <div>
            <button className="submit" onClick={handleClick}>
              Submit Project
            </button>
          </div>
        </form>
        <Footer>created by @appAcademy August cohort 2020</Footer>
      </Input>
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

const Input = styled.div`
  .projectForm {
    padding-top: 3em;
    // padding-bottom: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  input {
    margin-bottom: 0.5em;
    color: #292721;
    border: none;
    width: 55em;
    height: 3em;
    padding-left: 1em;
    border-radius: 1em;
    outline: none;
  }

  .projectDescription {
    text-align: start;
    height: 10em;
    padding-left: 1em;
    padding-top: 1em;
    width: 55em;
    border: none;
    border-radius: 1em;
    margin-bottom: 0.5em;
    outline: none;
  }

  .addStep {
    height: 2.4em;
    width: 8em;
    border-radius: 0.5em;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    font-weight: 800;
    background-color: #df6902;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .submit {
    height: 2.5em;
    width: 55em;
    border-radius: 0.5em;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    font-weight: 800;
    background-color: #df6902;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

const Photo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  box-sizing: border-box;
  height: 2em;
  width: 20em;
  margin-top: 1em;
  margin-bottom: 0.5em;
  button {
    border-radius: 0.5em;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    font-weight: 800;
    background-color: #df6902;
  }
`;

const Footer = styled.div`
  padding-top: 10em;
  padding-bottom: 5em;
  color: grey;
  text-align: center;
  font-size: 12px;
  // background-color: white;
  letter-spacing: 0.15em;
`;

export default ProjectAdd;
