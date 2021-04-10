import React from "react";
import Header from "../components/Default/Header";
import svgProjects from "../assets/images/projects.svg";

function Projects() {
  return (
    <>
      <Header title="Proyectos" icon={svgProjects} btnLogout />
    </>
  );
}

export default Projects;
