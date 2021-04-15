import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  filterBySeasonAndStatus,
  clearFilterAllSeasons,
} from "../../redux/initiative/initiativeDucks";

function GridTableComponent() {
  // const { data } = props;
  const allDataInitiatives = useSelector((store) => store.initiative.data);
  const [active, setActive] = React.useState(false);

  const dispacth = useDispatch();
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

  let statusL0 = allDataInitiatives.filter((el) => el.estado_wave === "L0");
  let statusL1 = allDataInitiatives.filter((el) => el.estado_wave === "L1");
  let statusL2 = allDataInitiatives.filter((el) => el.estado_wave === "L2");
  let statusL3 = allDataInitiatives.filter((el) => el.estado_wave === "L3");
  let statusL4 = allDataInitiatives.filter((el) => el.estado_wave === "L4");
  let statusL5 = allDataInitiatives.filter((el) => el.estado_wave === "L5");

  //by seasons by status L0
  const counterL0AndSCL = statusL0.filter((el) => el.estacion === "Santiago");
  const counterL0AndBOG = statusL0.filter((el) => el.estacion === "Bogotá");
  const counterL0AndMED = statusL0.filter((el) => el.estacion === "Medellin");
  const counterL0AndUIO = statusL0.filter((el) => el.estacion === "Quito");
  const counterL0AndOtros = statusL0.filter(
    (el) =>
      el.estacion !== "Quito" &&
      el.estacion !== "Bogotá" &&
      el.estacion !== "Santiago" &&
      el.estacion !== "Medellin"
  );

  //by seasons by status L1
  const counterL1AndSCL = statusL1.filter((el) => el.estacion === "Santiago");
  const counterL1AndBOG = statusL1.filter((el) => el.estacion === "Bogotá");
  const counterL1AndMED = statusL1.filter((el) => el.estacion === "Medellin");
  const counterL1AndUIO = statusL1.filter((el) => el.estacion === "Quito");
  const counterL1AndOtros = statusL1.filter(
    (el) =>
      el.estacion !== "Quito" &&
      el.estacion !== "Bogotá" &&
      el.estacion !== "Santiago" &&
      el.estacion !== "Medellin"
  );

  //by seasons by status L2
  const counterL2AndSCL = statusL2.filter((el) => el.estacion === "Santiago");
  const counterL2AndBOG = statusL2.filter((el) => el.estacion === "Bogotá");
  const counterL2AndMED = statusL2.filter((el) => el.estacion === "Medellin");
  const counterL2AndUIO = statusL2.filter((el) => el.estacion === "Quito");
  const counterL2AndOtros = statusL2.filter(
    (el) =>
      el.estacion !== "Quito" &&
      el.estacion !== "Bogotá" &&
      el.estacion !== "Santiago" &&
      el.estacion !== "Medellin"
  );

  //by seasons by status L3
  const counterL3AndSCL = statusL3.filter((el) => el.estacion === "Santiago");
  const counterL3AndBOG = statusL3.filter((el) => el.estacion === "Bogotá");
  const counterL3AndMED = statusL3.filter((el) => el.estacion === "Medellin");
  const counterL3AndUIO = statusL3.filter((el) => el.estacion === "Quito");
  const counterL3AndOtros = statusL3.filter(
    (el) =>
      el.estacion !== "Quito" &&
      el.estacion !== "Bogotá" &&
      el.estacion !== "Santiago" &&
      el.estacion !== "Medellin"
  );

  //by seasons by status L4
  const counterL4AndSCL = statusL4.filter((el) => el.estacion === "Santiago");
  const counterL4AndBOG = statusL4.filter((el) => el.estacion === "Bogotá");
  const counterL4AndMED = statusL4.filter((el) => el.estacion === "Medellin");
  const counterL4AndUIO = statusL4.filter((el) => el.estacion === "Quito");
  const counterL4AndOtros = statusL4.filter(
    (el) =>
      el.estacion !== "Quito" &&
      el.estacion !== "Bogotá" &&
      el.estacion !== "Santiago" &&
      el.estacion !== "Medellin"
  );

  //by seasons by status L5
  const counterL5AndSCL = statusL5.filter((el) => el.estacion === "Santiago");
  const counterL5AndBOG = statusL5.filter((el) => el.estacion === "Bogotá");
  const counterL5AndMED = statusL5.filter((el) => el.estacion === "Medellin");
  const counterL5AndUIO = statusL5.filter((el) => el.estacion === "Quito");
  const counterL5AndOtros = statusL5.filter(
    (el) =>
      el.estacion !== "Quito" &&
      el.estacion !== "Bogotá" &&
      el.estacion !== "Santiago" &&
      el.estacion !== "Medellin"
  );

  //Counter total by season
  const counterBySeasonSCL = allDataInitiatives.filter(
    (el) => el.estacion === "Santiago"
  );
  const counterBySeasonBOG = allDataInitiatives.filter(
    (el) => el.estacion === "Bogotá"
  );
  const counterBySeasonMDE = allDataInitiatives.filter(
    (el) => el.estacion === "Medellin"
  );
  const counterBySeasonUIO = allDataInitiatives.filter(
    (el) => el.estacion === "Quito"
  );
  const counterBySeasonOtros = allDataInitiatives.filter(
    (el) =>
      el.estacion !== "Santiago" &&
      el.estacion !== "Bogotá" &&
      el.estacion !== "Medellin" &&
      el.estacion !== "Quito"
  );

  //by status
  const counteByL0 = statusL0.length;
  const counteByL1 = statusL1.length;
  const counteByL2 = statusL2.length;
  const counteByL3 = statusL3.length;
  const counteByL4 = statusL4.length;
  const counteByL5 = statusL5.length;

  const totalAll =
    counteByL0 + counteByL1 + counteByL2 + counteByL3 + counteByL4 + counteByL5;

  const dataAll = [
    {
      body: "ALL",
    },
    {
      body: counteByL0,
      action: "l0All",
    },
    {
      body: counteByL1,
      action: "l1All",
    },
    {
      body: counteByL2,
      action: "l2All",
    },
    {
      body: counteByL3,
      action: "l3All",
    },
    {
      body: counteByL4,
      action: "l4All",
    },
    {
      body: counteByL5,
      action: "l5All",
    },
    {
      body: totalAll,
      action: "lStatusAll",
    },
  ];

  const handleActiveByL0 = (action) => {
    if (action === "L0AndSCL") {
      dispacth(filterBySeasonAndStatus(counterL0AndSCL));
      setActive(action);
    } else if (action === "L0AndBOG") {
      dispacth(filterBySeasonAndStatus(counterL0AndBOG));
      setActive(action);
    } else if (action === "L0AndMED") {
      dispacth(filterBySeasonAndStatus(counterL0AndMED));
      setActive(action);
    } else if (action === "L0AndUIO") {
      dispacth(filterBySeasonAndStatus(counterL0AndUIO));
      setActive(action);
    } else if (action === "L0AndOtros") {
      dispacth(filterBySeasonAndStatus(counterL0AndOtros));
      setActive(action);
    }
  };

  const handleActiveByL1 = (action) => {
    if (action === "L1AndSCL") {
      dispacth(filterBySeasonAndStatus(counterL1AndSCL));
      setActive(action);
    } else if (action === "L1AndBOG") {
      dispacth(filterBySeasonAndStatus(counterL1AndBOG));
      setActive(action);
    } else if (action === "L1AndMED") {
      dispacth(filterBySeasonAndStatus(counterL1AndMED));
      setActive(action);
    } else if (action === "L1AndUIO") {
      dispacth(filterBySeasonAndStatus(counterL1AndUIO));
      setActive(action);
    } else if (action === "L1AndOtros") {
      dispacth(filterBySeasonAndStatus(counterL1AndOtros));
      setActive(action);
    }
  };
  const handleActiveByL2 = (action) => {
    if (action === "L2AndSCL") {
      dispacth(filterBySeasonAndStatus(counterL2AndSCL));
      setActive(action);
    } else if (action === "L2AndBOG") {
      dispacth(filterBySeasonAndStatus(counterL2AndBOG));
      setActive(action);
    } else if (action === "L2AndMED") {
      dispacth(filterBySeasonAndStatus(counterL2AndMED));
      setActive(action);
    } else if (action === "L2AndUIO") {
      dispacth(filterBySeasonAndStatus(counterL2AndUIO));
      setActive(action);
    } else if (action === "L2AndOtros") {
      dispacth(filterBySeasonAndStatus(counterL2AndOtros));
      setActive(action);
    }
  };

  const handleActiveByL3 = (action) => {
    if (action === "L3AndSCL") {
      dispacth(filterBySeasonAndStatus(counterL3AndSCL));
      setActive(action);
    } else if (action === "L3AndBOG") {
      dispacth(filterBySeasonAndStatus(counterL3AndBOG));
      setActive(action);
    } else if (action === "L3AndMED") {
      dispacth(filterBySeasonAndStatus(counterL3AndMED));
      setActive(action);
    } else if (action === "L3AndUIO") {
      dispacth(filterBySeasonAndStatus(counterL3AndUIO));
      setActive(action);
    } else if (action === "L3AndOtros") {
      dispacth(filterBySeasonAndStatus(counterL3AndOtros));
      setActive(action);
    }
  };

  const handleActiveByL4 = (action) => {
    if (action === "L4AndSCL") {
      dispacth(filterBySeasonAndStatus(counterL4AndSCL));
      setActive(action);
    } else if (action === "L4AndBOG") {
      dispacth(filterBySeasonAndStatus(counterL4AndBOG));
      setActive(action);
    } else if (action === "L4AndMED") {
      dispacth(filterBySeasonAndStatus(counterL4AndMED));
      setActive(action);
    } else if (action === "L4AndUIO") {
      dispacth(filterBySeasonAndStatus(counterL4AndUIO));
      setActive(action);
    } else if (action === "L4AndOtros") {
      dispacth(filterBySeasonAndStatus(counterL4AndOtros));
      setActive(action);
    }
  };

  const handleActiveByL5 = (action) => {
    if (action === "L5AndSCL") {
      dispacth(filterBySeasonAndStatus(counterL5AndSCL));
      setActive(action);
    } else if (action === "L5AndBOG") {
      dispacth(filterBySeasonAndStatus(counterL5AndBOG));
      setActive(action);
    } else if (action === "L5AndMED") {
      dispacth(filterBySeasonAndStatus(counterL5AndMED));
      setActive(action);
    } else if (action === "L5AndUIO") {
      dispacth(filterBySeasonAndStatus(counterL5AndUIO));
      setActive(action);
    } else if (action === "L5AndOtros") {
      dispacth(filterBySeasonAndStatus(counterL5AndOtros));
      setActive(action);
    }
  };

  //Filter show data by status totales
  const handleActiveByAllStatus = (action) => {
    if (action === "l0All") {
      dispacth(filterBySeasonAndStatus(statusL0));
      setActive(action);
    } else if (action === "l1All") {
      dispacth(filterBySeasonAndStatus(statusL1));
      setActive(action);
    } else if (action === "l2All") {
      dispacth(filterBySeasonAndStatus(statusL2));
      setActive(action);
    } else if (action === "l3All") {
      dispacth(filterBySeasonAndStatus(statusL3));
      setActive(action);
    } else if (action === "l4All") {
      dispacth(filterBySeasonAndStatus(statusL4));
      setActive(action);
    } else if (action === "l5All") {
      dispacth(filterBySeasonAndStatus(statusL5));
      setActive(action);
    } else if (action === "lStatusAll") {
      dispacth(filterBySeasonAndStatus(allDataInitiatives));
      setActive(action);
    }
  };

  //Filter show data by estaciones totales
  const handleActiveByAllSeasons = (action) => {
    if (action === "sclAll") {
      dispacth(filterBySeasonAndStatus(counterBySeasonSCL));
      setActive(action);
    } else if (action === "bogAll") {
      dispacth(filterBySeasonAndStatus(counterBySeasonBOG));
      setActive(action);
    } else if (action === "medAll") {
      dispacth(filterBySeasonAndStatus(counterBySeasonMDE));
      setActive(action);
    } else if (action === "uioAll") {
      dispacth(filterBySeasonAndStatus(counterBySeasonUIO));
      setActive(action);
    } else if (action === "otrosAll") {
      dispacth(filterBySeasonAndStatus(counterBySeasonOtros));
      setActive(action);
    }
  };

  const clear = () => {
    setActive("");
    dispacth(clearFilterAllSeasons());
  };
  return (
    <>
      <HeaderStyled>
        <TitleStyled>Portafolio de iniciativas</TitleStyled>
        <Filter onClick={clear}>Todos</Filter>
      </HeaderStyled>
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
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L0AndSCL"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L0AndSCL" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL0("L0AndSCL")}
            >
              {counterL0AndSCL.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L0AndBOG"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L0AndBOG" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL0("L0AndBOG")}
            >
              {counterL0AndBOG.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L0AndMED"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L0AndMED" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL0("L0AndMED")}
            >
              {counterL0AndMED.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L0AndUIO"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L0AndUIO" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL0("L0AndUIO")}
            >
              {counterL0AndUIO.length}
            </Grid>
            <Grid
              onClick={() => handleActiveByL0("L0AndOtros")}
              style={{
                backgroundColor:
                  active === "L0AndOtros"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L0AndOtros" ? "white" : "var(--blue-dark)",
              }}
            >
              {counterL0AndOtros.length}
            </Grid>
          </VerticalGrids>
          <VerticalGrids className="col-two col">
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L1AndSCL"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L1AndSCL" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL1("L1AndSCL")}
            >
              {counterL1AndSCL.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L1AndBOG"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L1AndBOG" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL1("L1AndBOG")}
            >
              {counterL1AndBOG.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L1AndMED"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L1AndMED" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL1("L1AndMED")}
            >
              {counterL1AndMED.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L1AndUIO"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L1AndUIO" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL1("L1AndUIO")}
            >
              {counterL1AndUIO.length}
            </Grid>
            <Grid
              onClick={() => handleActiveByL1("L1AndOtros")}
              style={{
                backgroundColor:
                  active === "L1AndOtros"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L1AndOtros" ? "white" : "var(--blue-dark)",
              }}
            >
              {counterL1AndOtros.length}
            </Grid>
          </VerticalGrids>
          <VerticalGrids className="col-three col">
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L2AndSCL"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L2AndSCL" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL2("L2AndSCL")}
            >
              {counterL2AndSCL.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L2AndBOG"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L2AndBOG" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL2("L2AndBOG")}
            >
              {counterL2AndBOG.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L2AndMED"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L2AndMED" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL2("L2AndMED")}
            >
              {counterL2AndMED.length}
            </Grid>
            <Grid
              style={{ marginBottom: "0.8em" }}
              onClick={() => handleActiveByL2("L2AndUIO")}
            >
              {counterL2AndUIO.length}
            </Grid>
            <Grid
              onClick={() => handleActiveByL2("L2AndOtros")}
              style={{
                backgroundColor:
                  active === "L2AndOtros"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L2AndOtros" ? "white" : "var(--blue-dark)",
              }}
            >
              {counterL2AndOtros.length}
            </Grid>
          </VerticalGrids>
          <VerticalGrids className="col-four col">
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L3AndSCL"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L3AndSCL" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL3("L3AndSCL")}
            >
              {counterL3AndSCL.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L3AndBOG"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L3AndBOG" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL3("L3AndBOG")}
            >
              {counterL3AndBOG.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L3AndMED"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L3AndMED" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL3("L3AndMED")}
            >
              {counterL3AndMED.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L3AndUIO"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L3AndUIO" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL3("L3AndUIO")}
            >
              {counterL3AndUIO.length}
            </Grid>
            <Grid
              onClick={() => handleActiveByL3("L3AndOtros")}
              style={{
                backgroundColor:
                  active === "L3AndOtros"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L3AndOtros" ? "white" : "var(--blue-dark)",
              }}
            >
              {counterL3AndOtros.length}
            </Grid>
          </VerticalGrids>
          <VerticalGrids className="col-five col">
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L4AndSCL"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L4AndSCL" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL4("L4AndSCL")}
            >
              {counterL3AndSCL.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L4AndBOG"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L4AndBOG" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL4("L4AndBOG")}
            >
              {counterL4AndBOG.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L4AndMED"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L4AndMED" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL4("L4AndMED")}
            >
              {counterL4AndMED.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L4AndUIO"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L4AndUIO" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL4("L4AndUIO")}
            >
              {counterL4AndUIO.length}
            </Grid>
            <Grid
              onClick={() => handleActiveByL4("L4AndOtros")}
              style={{
                backgroundColor:
                  active === "L4AndOtros"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L4AndOtros" ? "white" : "var(--blue-dark)",
              }}
            >
              {counterL4AndOtros.length}
            </Grid>
          </VerticalGrids>
          <VerticalGrids className="col-six col">
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L5AndSCL"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L5AndSCL" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL5("L5AndSCL")}
            >
              {counterL5AndSCL.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L5AndBOG"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L5AndBOG" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL5("L5AndBOG")}
            >
              {counterL5AndBOG.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L5AndMED"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L5AndMED" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL5("L5AndMED")}
            >
              {counterL5AndMED.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "L5AndUIO"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L5AndUIO" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByL5("L5AndUIO")}
            >
              {counterL5AndUIO.length}
            </Grid>
            <Grid
              onClick={() => handleActiveByL5("L5AndOtros")}
              style={{
                backgroundColor:
                  active === "L5AndOtros"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "L5AndOtros" ? "white" : "var(--blue-dark)",
              }}
            >
              {counterL5AndOtros.length}
            </Grid>
          </VerticalGrids>
          <VerticalGrids className="col-end">
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "sclAll"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "sclAll" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByAllSeasons("sclAll")}
            >
              {counterBySeasonSCL.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "bogAll"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "bogAll" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByAllSeasons("bogAll")}
            >
              {counterBySeasonBOG.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "medAll"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "medAll" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByAllSeasons("medAll")}
            >
              {counterBySeasonMDE.length}
            </Grid>
            <Grid
              style={{
                marginBottom: "0.8em",
                backgroundColor:
                  active === "uioAll"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "uioAll" ? "white" : "var(--blue-dark)",
              }}
              onClick={() => handleActiveByAllSeasons("uioAll")}
            >
              {counterBySeasonUIO.length}
            </Grid>
            <Grid
              onClick={() => handleActiveByAllSeasons("otrosAll")}
              style={{
                backgroundColor:
                  active === "otrosAll"
                    ? "var(--blue-medium)"
                    : "var(--gray-low)",
                color: active === "otrosAll" ? "white" : "var(--blue-dark)",
              }}
            >
              {counterBySeasonOtros.length}
            </Grid>
          </VerticalGrids>
        </>
        {dataAll.map((el, i) => {
          return (
            <Grid
              key={i}
              onClick={() => handleActiveByAllStatus(el.action)}
              style={{
                backgroundColor:
                  active === el.action
                    ? "var(--blue-medium)"
                    : "var(--gray-medium)",
                color: active === el.action ? "white" : "var(--blue-dark)",
              }}
            >
              {el.body}
            </Grid>
          );
        })}
      </Wrapper>
    </>
  );
}

// GridTableComponent.propTypes = {
//   // titleHeader: PropTypes.array,
//   data: PropTypes.array,
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

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: normal;
  font-size: var(--body);
  line-height: 20px;
  text-decoration-line: underline;
  color: var(--blue-dark);
  cursor: pointer;
`;
