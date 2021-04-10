import React from "react";
import { Switch } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Header from "../Default/Header";
import svgProjects from "../../assets/images/projects.svg";
import ContainerItems from "../ContainerCounter/ContainerItems";
import Card from "../Default/Card";
import TimeLine from "../TimeLine/TimeLine";
import AddItemList from "../AddItemList/AddItemList";

function Detail() {
  const detailInitiative = useSelector(
    (store) => store.initiative.dataByInitiative
  );

  const data = [
    {
      title: "Titulo de iniciativa",
      body: detailInitiative.titulo,
    },
    {
      title: "Estado",
      body: detailInitiative.estado_simplificado,
    },
    {
      title: "Ingeniero a cargo",
      body: detailInitiative.lider_sponsor,
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
    <>
      <Header
        title="Proyectos"
        icon={svgProjects}
        btnLogout
        inputSearch
        placeholder="Seleccione proyecto"
      />
      <ContainerItems data={data} />
      <ContainerItems data={dataTwo} />
      <Row>
        <Col className="col-one">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TitleStyled>Timeline</TitleStyled>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TitleLeft>Solo caso de negocio</TitleLeft>
              <Switch defaultChecked size="small" />
            </div>
          </div>
          <Card>
            <TimeLine />
          </Card>
        </Col>
        <Col className="col-two">
          <TitleStyled>Observaciones</TitleStyled>
          <Card>
            <AddItemList />
          </Card>
        </Col>
        <Col>
          <TitleStyled>Detalles</TitleStyled>
          <Card></Card>
        </Col>
      </Row>
    </>
  );
}

export default Detail;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 992px) {
    .col-one {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .col-two {
      grid-column-start: 3;
      grid-column-end: 5;
    }
  }
`;
const Col = styled.div``;

const TitleStyled = styled.h1`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: var(--subtitle);
  color: var(--blue-dark);
`;
const TitleLeft = styled.h1`
  font-family: var(--font-opensans);
  font-style: normal;
  font-size: var(--bpdy);
  color: var(--blue-dark);
  margin-right: 0.5em;
  text-decoration: underline;
  margin-bottom: 0px;
`;
