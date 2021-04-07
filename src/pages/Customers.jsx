import React from "react";
import styled from "styled-components";
import Header from "../components/Default/Header";
import ContainerCounter from "../components/ContainerCounter/ContainerCounter";
import TableComponent from "../components/Table/Table";
import svgCustomer from "../assets/images/customer.svg";
import ChartFunnel from "../components/Funnel/ChartFunnel";

function Customer() {
  const data = [
    {
      title: "Nº Iniciativas WAVE",
      counter: "34",
    },
    {
      title: "Beneficio Esperado ",
      counter: "200",
    },
    {
      title: "Beneficio Capturado",
      counter: "100",
    },
    {
      title: "% Capturado",
      counter: "50%",
    },
    {
      title: "% Aporte meta empresa",
      counter: "5%",
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
  const dataEmbudo = [
    {
      number: "45",
      counter: "120",
      description: "Idea",
      percentage: "100",
    },
    {
      number: "12",
      counter: "100",
      description: "Validación",
      percentage: "80",
    },
    {
      number: "8",
      counter: "80",
      description: "Planeación",
      percentage: "50",
    },
    {
      number: "12",
      counter: "20",
      description: "Implementación",
      percentage: "50",
    },
    {
      number: "5",
      counter: "10",
      description: "Monitoreo",
      percentage: "50",
    },
    {
      number: "4",
      counter: "120",
      description: "Captura",
      percentage: "50",
    },
  ];
  return (
    <Wrapper>
      <Header
        title="Clientes"
        icon={svgCustomer}
        btnLogout
        btnNewItem
        inputSearch
        placeholder="Seleccione cliente interno"
        titleBtnNewItem={"Nueva Oportunidad"}
      />
      <ContainerCounter data={data} />
      <Row className="hidden-xs">
        <Col>
          <ChartFunnel data={dataEmbudo} />
        </Col>
        <Col>
          <TableComponent titleHeader={titleHeader} dataTable={dataTable} />
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Customer;

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
