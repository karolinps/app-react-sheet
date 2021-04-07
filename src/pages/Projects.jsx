import React from "react";
import styled from "styled-components";
import Header from "../components/Default/Header";
import svgProjects from "../assets/images/projects.svg";
import ContainerItems from "../components/ContainerCounter/ContainerItems";
import Card from "../components/Default/Card";
function Projects() {
  const data = [
    {
      title: "Titulo de iniciativa",
      body: "Proyecto CDI",
    },
    {
      title: "Estado",
      body: "",
    },
    {
      title: "Ingeniero a cargo",
      body: "",
    },
    {
      title: "Fecha de ingreso",
      body: "",
    },
  ];
  const dataTwo = [
    {
      title: "Objetivo del proyecto",
      body: "Proyecto CDI",
    },
    {
      title: "Plazo comprometido",
      body: "",
    },
    {
      title: "Capex comprometido",
      body: "",
    },
    {
      title: "Beneficio esperado",
      body: "",
    },
  ];

  return (
    <Wrapper>
      <Header
        title="Proyectos"
        icon={svgProjects}
        btnLogout
        inputSearch
        placeholder="Seleccione proyecto"
      />
      <ContainerItems data={data} />
      <ContainerItems data={dataTwo} />
      <Row className="hidden-xs">
        <Col className="col-one">
          <TitleStyled>Hoja de vida</TitleStyled>
          <Card></Card>
        </Col>
        <Col className="col-two">
          <TitleStyled>Observaciones</TitleStyled>
          <Card></Card>
        </Col>
        <Col>
          <TitleStyled>Detalles</TitleStyled>
          <Card></Card>
        </Col>
      </Row>
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

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  @media (min-width: 767px) {
    position: absolute;
    right: 1.5em;
    left: 1.5em;
    bottom: 2em;
    top: 25em;
  }
  .col-one {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .col-two {
    grid-column-start: 3;
    grid-column-end: 5;
  }
`;
const Col = styled.div`
  position: relative;
`;

const TitleStyled = styled.h1`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: var(--blue-dark);
`;
