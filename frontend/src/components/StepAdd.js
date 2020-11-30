import React from "react";
import styled from "styled-components";

function StepAdd() {
  return (
    <Container>
      <Input>
        <input className="stepTitle" placeholder="Step Title" />
        <textarea className="stepDescription" placeholder="Step Description" />
      </Input>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: #f6f6f6;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1em;

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

  .projectDescription,
  .stepDescription {
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
    color: white;
    font-weight: 800;
    background-color: #df6902;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

export default StepAdd;
