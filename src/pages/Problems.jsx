import React from "react";
import styled from "styled-components";
import Header from "../components/Default/Header";
import ContainerCounter from "../components/ContainerCounter/ContainerCounter";
import svgProblems from "../assets/images/problems.svg";

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
    <>
      <Header
        title="Problemas"
        icon={svgProblems}
        btnLogout
        btnFilter
        btnNewItem
        titleBtnNewItem={"Nuevo Problema"}
      />
      <Row>
        <ColLeft>
          <ContainerCounter data={data} />
        </ColLeft>
        {/* <ColRight>
          <InputSearch placeholder={"Seleccione Problema"} />
        </ColRight> */}
      </Row>
    </>
  );
}

export default Problems;

const Row = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;
const ColLeft = styled.div`
  grid-column: 1 / span 3;
`;
// const ColRight = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   margin: 5.5em 0px;
// `;
