import React from "react";
import styled from "styled-components";
import Header from "../components/Default/Header";
import ContainerCounter from "../components/ContainerCounter/ContainerCounter";
import TableComponent from "../components/Table/Table";
import GridTable from "../components/Table/GridTable";
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
    <>
      <Header
        title="Estaciones"
        icon={svgSeasons}
        btnLogout
        btnFilter
        btnNewItem
        titleBtnNewItem={"Nueva Oportunidad"}
      />
      <ContainerCounter data={data} />
      <Row>
        <Col>
          <GridTable />
        </Col>
        <Col>
          <TableComponent titleHeader={titleHeader} dataTable={dataTable} />
        </Col>
      </Row>
    </>
  );
}

export default Seasons;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Col = styled.div``;
