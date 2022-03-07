import React from "react";
import styled from "styled-components";
import Header from "../components/Default/Header";
import ContainerCounter from "../components/ContainerCounter/ContainerCounter";
import ChartPortfolio from "../components/ChartPortfolio/index";
import TableComponent from "../components/Table/Table";
import svgPortfolio from "../assets/images/portfolio.svg";

function Portfolio() {
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
        title="Portafolio"
        icon={svgPortfolio}
        btnLogout
        btnFilter
        btnNewItem
        titleBtnNewItem={"Nueva Oportunidad"}
      />
      <ContainerCounter data={data} />
      <Row>
        <Col className="col-one">
          <ChartPortfolio />
        </Col>
        <Col className="col-two">
          <TableComponent titleHeader={titleHeader} dataTable={dataTable} />
        </Col>
      </Row>
    </>
  );
}

export default Portfolio;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 992px) {
    .col-one {
      grid-column-start: 1;
      grid-column-end: 2;
    }
    .col-two {
      grid-column-start: 2;
      grid-column-end: 5;
    }
  }
`;
const Col = styled.div``;
