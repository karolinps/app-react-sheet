import React from "react";
import styled from "styled-components";
import Header from "../components/Default/Header";
import svgProjects from "../assets/images/projects.svg";

function Projects() {
  return (
    <Wrapper>
      <Header
        title="Proyectos"
        icon={svgProjects}
        btnLogout
        inputSearch
        placeholder="Seleccione proyecto"
      />
    </Wrapper>
  );
}

export default Projects;

const Wrapper = styled.div`
  margin: 10px;
  @media (min-width: 767px) {
    margin: 20px;
  }
`;
