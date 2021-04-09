import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

function GridTableComponent() {
  // const { titleHeader, dataTable } = props;
  const titleHeaderGrid = [
    {
      title: "USD",
    },
    {
      title: "L0",
    },
    {
      title: "L1",
    },
    {
      title: "L2",
    },
    {
      title: "L3",
    },
    {
      title: "L4",
    },
    {
      title: "L5",
    },
    {
      title: "ALL",
    },
  ];

  return (
    <>
      <TitleStyled>Listado de iniciativas</TitleStyled>
      <Wrapper>
        {titleHeaderGrid.map((el, i) => {
          return <Grid key={i}>{el.title}</Grid>;
        })}
        <>
          <VerticalGrids className="col-start">
            <Grid style={{ marginBottom: "0.8em" }}>SCL</Grid>
            <Grid style={{ marginBottom: "0.8em" }}>BOG</Grid>
            <Grid style={{ marginBottom: "0.8em" }}>MDE</Grid>
            <Grid style={{ marginBottom: "0.8em" }}>UIO</Grid>
            <Grid>otros</Grid>
          </VerticalGrids>
          <VerticalGrids className="col-one col">
            <Grid style={{ marginBottom: "0.8em" }}>23</Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid></Grid>
          </VerticalGrids>
          <VerticalGrids className="col-two col">
            <Grid style={{ marginBottom: "0.8em" }}>12</Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid></Grid>
          </VerticalGrids>
          <VerticalGrids className="col-three col">
            <Grid style={{ marginBottom: "0.8em" }}>6</Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid></Grid>
          </VerticalGrids>
          <VerticalGrids className="col-four col">
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid></Grid>
          </VerticalGrids>
          <VerticalGrids className="col-five col">
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid></Grid>
          </VerticalGrids>
          <VerticalGrids className="col-six col">
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid></Grid>
          </VerticalGrids>
          <VerticalGrids className="col-end">
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid style={{ marginBottom: "0.8em" }}></Grid>
            <Grid></Grid>
          </VerticalGrids>
        </>
        {titleHeaderGrid.map((el, i) => {
          return <Grid key={i}>{i === 0 ? "ALL" : null}</Grid>;
        })}
      </Wrapper>
    </>
  );
}

// GridTableComponent.propTypes = {
//   titleHeader: PropTypes.array,
//   dataTable: PropTypes.array,
// };
export default GridTableComponent;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1em;
  .col-start {
    grid-column-start: 1;
    grid-column-end: 1;
  }
  .col-one {
    grid-column-start: 2;
    grid-column-end: 2;
    div {
      background: var(--gray-low);
      :hover {
        background: var(--blue-medium);
        color: #fff;
      }
    }
  }
  .col-two {
    grid-column-start: 3;
    grid-column-end: 3;
    div {
      background: var(--gray-low);
    }
  }
  .col-three {
    grid-column-start: 4;
    grid-column-end: 4;
    div {
      background: var(--gray-low);
    }
  }
  .col-four {
    grid-column-start: 5;
    grid-column-end: 5;
    div {
      background: var(--gray-low);
    }
  }
  .col-five {
    grid-column-start: 6;
    grid-column-end: 6;
    div {
      background: var(--gray-low);
    }
  }
  .col-six {
    grid-column-start: 7;
    grid-column-end: 7;
    div {
      background: var(--gray-low);
    }
  }
  .col-end {
    grid-column-start: 8;
    grid-column-end: 8;
  }
  .col {
    font-family: var(--font-opensans);
    font-style: normal;
    font-weight: normal;
    font-size: var(--body);
  }
`;

const Grid = styled.div`
  background: var(--gray-medium);
  height: 70px;
  // width: 70px;
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: var(--subtitle);
  line-height: 65px;
  text-align: center;
  color: var(--blue-dark);
  cursor: pointer;
`;
const VerticalGrids = styled.div``;

const TitleStyled = styled.h2`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: 1.3em;
  line-height: 27px;
  color: var(--blue-dark);
  @media (max-width: 991px) {
    margin-top: 1em;
  }
`;
