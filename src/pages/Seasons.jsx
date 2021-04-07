import React from "react";
import styled from "styled-components";
import Header from "../components/Default/Header";
import ContainerCounter from "../components/ContainerCounter/ContainerCounter";
import TableComponent from "../components/Table/Table";
import svgSeasons from "../assets/images/seasons.svg";

function Seasons() {
  const data = [
    {
      title: "Plan",
      counter: "100",
    },
    {
      title: "Real",
      counter: "80",
    },
    {
      title: "% Avance",
      counter: "80 %",
    },
    {
      title: "Proyectado",
      counter: 90,
    },
    {
      title: "% Proyectado",
      counter: "90 %",
    },
  ];
  const titleHeader = [
    {
      title: "#",
    },
    {
      title: "Título",
    },
    {
      title: "Estados",
    },
    {
      title: "Pendientes",
    },
  ];
  const dataTable = [
    {
      number: "001",
      title: "Poryecto CDI",
      status: "Proyecto CDI",
      pending: "Proyecto CDI",
    },
    {
      number: "001",
      title: "Poryecto CDI",
      status: "Proyecto CDI",
      pending: "Proyecto CDI",
    },
    {
      number: "001",
      title: "Poryecto CDI",
      status: "Proyecto CDI",
      pending: "Proyecto CDI",
    },
    {
      number: "001",
      title: "Poryecto CDI",
      status: "Proyecto CDI",
      pending: "Proyecto CDI",
    },
    {
      number: "001",
      title: "Poryecto CDI",
      status: "Proyecto CDI",
      pending: "Proyecto CDI",
    },
    {
      number: "001",
      title: "Poryecto CDI",
      status: "Proyecto CDI",
      pending: "Proyecto CDI",
    },
    {
      number: "001",
      title: "Poryecto CDI",
      status: "Proyecto CDI",
      pending: "Proyecto CDI",
    },
    {
      number: "001",
      title: "Poryecto CDI",
      status: "Proyecto CDI",
      pending: "Proyecto CDI",
    },
    {
      number: "001",
      title: "Poryecto CDI",
      status: "Proyecto CDI",
      pending: "Proyecto CDI",
    },
  ];

  return (
    <Wrapper>
      <Header
        title="Estaciones"
        icon={svgSeasons}
        btnLogout
        btnFilter
        btnNewItem
        titleBtnNewItem={"Nueva Oportunidad"}
      />
      <ContainerCounter data={data} />
      <Row className="hidden-xs">
        <Col></Col>
        <Col>
          <TableComponent titleHeader={titleHeader} dataTable={dataTable} />
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Seasons;

const Wrapper = styled.div`
  margin: 10px;
  @media (min-width: 767px) {
    margin: 20px;
  }
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 767px) {
    position: absolute;
    right: 1.5em;
    left: 1.5em;
    bottom: 2em;
    top: 15em;
  }
`;
const Col = styled.div`
  position: relative;
`;
