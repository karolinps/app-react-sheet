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
    <Wrapper>
      <Header
        title="Portafolio"
        icon={svgPortfolio}
        btnLogout
        btnFilter
        btnNewItem
        titleBtnNewItem={'Nueva Oportunidad'}
      />
      <ContainerCounter data={data} />
      <Row className="hidden-xs">
        <Col>
          <ChartPortfolio />
        </Col>
        <Col>
          <TableComponent titleHeader={titleHeader} dataTable={dataTable} />
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Portfolio;

const Wrapper = styled.div`
  margin: 10px;
  @media (min-width: 767px) {
    margin: 20px;
  }
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 767px) {
    position: absolute;
    right: 1.5em;
    left: 1.5em;
    bottom: 2em;
    top: 15em;
  }
}
`;
const Col = styled.div`
  flex: 1 0 18%;
  margin: 5px;
  position: relative;
`;
