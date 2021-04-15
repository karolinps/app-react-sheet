import React from "react";
import styled from "styled-components";

function TableProcess() {
  const titleHeaderGrid = [
    {
      title: "Procesos",
    },
    {
      title: "Sub-Proceso",
    },
    {
      title: "Procesos",
    },
    {
      title: "Sistemas",
    },
    {
      title: "Equipos",
    },
  ];
  const process = [
    {
      title: "Proceso # 1",
    },
    {
      title: "Proceso # 2",
    },
    {
      title: "Proceso # 3",
    },
    {
      title: "Proceso # 4",
    },
    {
      title: "Proceso # 5",
    },
  ];
  const subProcess = [
    {
      title: "Subproceso #1",
    },
    {
      title: "Subproceso # 2",
    },
    {
      title: "Subproceso # 3",
    },
    {
      title: "Subproceso # 4",
    },
    {
      title: "Subproceso # 5",
    },
  ];
  const dataTotal = [
    {
      body: "Totales",
    },
    {
      body: "Totales",
    },
    {
      body: "8",
    },
    {
      body: "2",
    },
    {
      body: "4",
    },
  ];
  return (
    <>
      <HeaderStyled>
        <TitleStyled>Procesos críticos</TitleStyled>
        <TitleStyled></TitleStyled>
      </HeaderStyled>
      <Wrapper>
        {titleHeaderGrid.map((el, i) => {
          return <Grid key={i}>{el.title}</Grid>;
        })}
        <>
          <VerticalGrids className="col-one">
            {process.map((el, i) => {
              return (
                <Grid style={{ marginBottom: "0.8em" }} key={i}>
                  {el.title}
                </Grid>
              );
            })}
          </VerticalGrids>
          <VerticalGrids className="col-two">
            {subProcess.map((el, i) => {
              return (
                <Grid
                  style={{ marginBottom: "1em", fontSize: "var(--body)" }}
                  key={i}
                >
                  {el.title}
                </Grid>
              );
            })}
          </VerticalGrids>
          <VerticalGrids className="col-three">
            {subProcess.map((el, i) => {
              return (
                <Grid
                  style={{
                    marginBottom: "1em",
                    fontSize: "var(--body)",
                    background: "var(--gray-low)",
                  }}
                  key={i}
                >
                  {/* {el.title} */}
                </Grid>
              );
            })}
          </VerticalGrids>
          <VerticalGrids className="col-four">
            {subProcess.map((el, i) => {
              return (
                <Grid
                  style={{
                    marginBottom: "1em",
                    fontSize: "var(--body)",
                    background: "var(--gray-low)",
                  }}
                  key={i}
                >
                  {/* {el.title} */}
                </Grid>
              );
            })}
          </VerticalGrids>
          <VerticalGrids className="col-five">
            {subProcess.map((el, i) => {
              return (
                <Grid
                  style={{
                    marginBottom: "1em",
                    fontSize: "var(--body)",
                    background: "var(--gray-low)",
                  }}
                  key={i}
                >
                  {/* {el.title} */}
                </Grid>
              );
            })}
          </VerticalGrids>
        </>
        {dataTotal.map((el, i) => {
          return (
            <Grid key={i} style={{ marginTop: "-0.8em" }}>
              {el.body}
            </Grid>
          );
        })}
      </Wrapper>
    </>
  );
}

export default TableProcess;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  .col-one {
    grid-column-start: 1;
    grid-column-end: 1;
  }
  .col-two {
    grid-column-start: 2;
    grid-column-end: 2;
  }
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleStyled = styled.h2`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: var(--subtitle);
  line-height: 27px;
  color: var(--blue-dark);
  @media (max-width: 991px) {
    margin-top: 1em;
  }
`;
const Grid = styled.div`
  background: var(--gray-medium);
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: var(--subtitle);
  line-height: 65px;
  text-align: center;
  color: var(--blue-dark);
  cursor: pointer;
  height: 70px;
`;
const VerticalGrids = styled.div``;
