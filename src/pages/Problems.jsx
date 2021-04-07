import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import Header from "../components/Default/Header";
import ContainerCounter from "../components/ContainerCounter/ContainerCounter";
import svgProblems from "../assets/images/problems.svg";
import InputSearch from "../components/Default/InputSearch";

function Problems() {
  const data = [
    {
      title: "Nº problemas levantados",
      counter: "100",
    },
    {
      title: "Nº problemas abordados",
      counter: "80",
    },
    {
      title: "% tasa de gestión acum",
      counter: "80 %",
    },
  ];

  return (
    <Wrapper>
      <Header
        title="Problemas"
        icon={svgProblems}
        btnLogout
        btnFilter
        btnNewItem
        titleBtnNewItem={"Nuevo Problema"}
      />
      <Row className="hidden-xs">
        <Col xl={16}>
          <ContainerCounter data={data} />
        </Col>
        <Col xl={8} className="col">
          <InputSearch placeholder={"Seleccione Problema"} />
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Problems;

const Wrapper = styled.div`
  margin: 10px;
  @media (min-width: 767px) {
    margin: 20px;
  }
  .col {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 6em 0px;
  }
`;
