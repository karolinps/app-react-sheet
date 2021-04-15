import React from "react";
import styled from "styled-components";
import Header from "../components/Default/Header";
import svgProblems from "../assets/images/problems.svg";
import Item from "../components/Default/Item";
import TableProccess from "../components/Table/TableProcess";
import Table from "../components/Table/TableGeneric";

function Problems() {
  const titleHeader = [
    {
      title: "Problema",
    },
    {
      title: "Iniciativa",
    },
    {
      title: "Estado",
    },
  ];
  return (
    <>
      <Header
        title="Problemas"
        icon={svgProblems}
        btnLogout
        btnFilter
        btnNewItem
        titleBtnNewItem={"Nuevo Problema"}
      />
      <Row style={{ gridTemplateColumns: "repeat(5, 1fr)", margin: "1.5em 0" }}>
        <Col style={{ gridColumn: "1 / 1" }}>
          <TitleStyled>N° de problemas</TitleStyled>
          <Item backgroundColor={"var(--gray-medium)"}>
            <BodyCounterStyled>100</BodyCounterStyled>
          </Item>
        </Col>
        <Col style={{ gridColumn: "2 / 2" }}>
          <TitleStyled>Nº problemas abordados</TitleStyled>
          <Item backgroundColor={"var(--gray-medium)"}>
            <BodyCounterStyled>50</BodyCounterStyled>
          </Item>
        </Col>
        <Col style={{ gridColumn: "3 / 5 " }}>
          <TitleStyled>% Composición</TitleStyled>
          <Item backgroundColor={"var(--gray-medium)"}>
            <BodyStyled>
              <p>
                Desviación al estándar:<span> 10 (20%)</span>
              </p>
              <p>
                Mejora al estándar:<span> 10 (20%)</span>
              </p>
            </BodyStyled>
            <BodyStyled>
              <p>
                Falta de estándar:<span> 10 (20%)</span>
              </p>
              <p>
                Cambio de estándar:<span> 10 (40%)</span>
              </p>
            </BodyStyled>
          </Item>
        </Col>
        <Col style={{ gridColumn: "5" }}>
          <TitleStyled>% de gestión</TitleStyled>
          <Item backgroundColor={"var(--gray-medium)"}>
            <BodyCounterStyled>50 %</BodyCounterStyled>
          </Item>
        </Col>
      </Row>
      <Row style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        <Col>
          <TableProccess />
        </Col>
        <Col>
          <Table
            dataTableHeader={titleHeader}
            dataTable={[]}
            titleTable="Lista de problemas"
          />
        </Col>
      </Row>
    </>
  );
}

export default Problems;

const Row = styled.div`
  display: grid;
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Col = styled.div`
  margin: 5px;
  font-family: Open Sans;
  line-height: 20px;
  color: var(--blue-dark);
  font-style: normal;
`;
const TitleStyled = styled.h1`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: var(--subtitle);
  color: var(--blue-dark);
`;

const BodyCounterStyled = styled.p`
  font-size: var(--body-big);
  font-weight: bold;
  line-height: 68px;
  text-align: center;
`;

const BodyStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0.5em;
  position: relative;
  top: 0.3em;
  line-height: 2em;
  p {
    font-size: var(--body);
    margin-bottom: 0;
  }
  span {
    font-weight: bold;
  }
`;
