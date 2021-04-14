import React from "react";
import { Switch } from "antd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";
import Header from "../Default/Header";
import svgProjects from "../../assets/images/projects.svg";
import ContainerItems from "../ContainerCounter/ContainerItems";
import Card from "../Default/Card";
import Item from "../Default/Item";

import TimeLine from "../TimeLine/TimeLine";
import AddItemList from "../AddItemList/AddItemList";
import Filter from "../AddItemList/Filter";
import config from "../../config";
import {
  getAllObservations,
  filterTypeByMilestone,
  filterTypeByRisks,
  filterTypeByProblem,
} from "../../redux/observation/observationDucks";

import { getByIniatitive } from "../../redux/initiative/initiativeDucks";

function Detail(props) {
  const detailInitiative = useSelector(
    (store) => store.initiative.dataByInitiative
  );
  const dataListObservation = useSelector((store) => store.observation.data);

  const dispatch = useDispatch();

  React.useEffect(() => {
    getDataList();
    getByInitiative();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDataList = () => {
    axios
      .get(`${config.api_sheet}/observaciones`)
      .then((res) => {
        dispatch(getAllObservations(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getByInitiative = () => {
    const idParams = props.match.params.id;
    axios
      .get(`${config.api_sheet}/base_2021/search?id=*${idParams}*`)
      .then((res) => {
        dispatch(getByIniatitive(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isExisData = detailInitiative.length > 0;
  const data = [
    {
      title: "Titulo de iniciativa",
      body: isExisData ? detailInitiative[0].titulo_proy : "",
    },
    {
      title: "Estado",
      body: isExisData ? detailInitiative[0].status : "",
    },
    {
      title: "Pais",
      body: isExisData ? detailInitiative[0].pais : "",
    },
    {
      title: "Gerencia",
      body: isExisData ? detailInitiative[0].gerencia : "",
    },
  ];

  const filter = async (action) => {
    let resData = await axios
      .get(`${config.api_sheet}/observaciones`)
      .then((res) => {
        return res.data;
      });
    if (action === 1) {
      dispatch(filterTypeByMilestone(resData));
    } else if (action === 2) {
      dispatch(filterTypeByProblem(resData));
    } else if (action === 3) {
      dispatch(filterTypeByRisks(resData));
    }
  };

  const statusCapex = isExisData
    ? detailInitiative[0].aux_capex === "r"
      ? "var(--danger)"
      : detailInitiative[0].aux_capex === "a"
      ? "yellow"
      : detailInitiative[0].aux_capex === "v"
      ? "var(--green)"
      : "var(--gray)"
    : "";

  const statusPlazo = isExisData
    ? detailInitiative[0].aux_plazo === "r"
      ? "var(--danger)"
      : detailInitiative[0].aux_plazo === "a"
      ? "yellow"
      : detailInitiative[0].aux_plazo === "v"
      ? "var(--green)"
      : "var(--gray)"
    : "";

  const statusBeneficio = isExisData
    ? detailInitiative[0].aux_benef === "r"
      ? "var(--danger)"
      : detailInitiative[0].aux_benef === "a"
      ? "yellow"
      : detailInitiative[0].aux_capex === "v"
      ? "var(--green)"
      : "var(--gray)"
    : "";
  return (
    <>
      <Header
        title="Iniciativa"
        icon={svgProjects}
        btnLogout
        inputSearch
        placeholder="Seleccione proyecto"
      />
      <ContainerItems data={data} />
      <>
        <RowContainer>
          <ColContainer style={{ gridColumn: "1/3" }}>
            <TitleStyled>Objetivo de la iniciativa</TitleStyled>
            <Item>
              <BodyStyled>
                {isExisData ? detailInitiative[0].obj_proy : ""}
              </BodyStyled>
            </Item>
          </ColContainer>
          <ColContainer style={{ gridColumn: "0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TitleStyled>Plazo</TitleStyled>
              <Circle
                style={{
                  backgroundColor: statusPlazo,
                }}
              ></Circle>
            </div>
            <Item>
              <BodyStyled>
                Comprometido:
                {isExisData ? detailInitiative.fecha_fin_compr : ""}
              </BodyStyled>
              <BodyStyled>
                Proyectado:
                {isExisData ? detailInitiative.fecha_fin_proy : ""}
              </BodyStyled>
            </Item>
          </ColContainer>
          <ColContainer style={{ gridColumn: "0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TitleStyled>Capex</TitleStyled>
              <Circle
                style={{
                  backgroundColor: statusCapex,
                }}
              ></Circle>
            </div>
            <Item>
              <BodyStyled>
                Comprometido: {""}
                {isExisData ? detailInitiative.capex_compr : ""}
              </BodyStyled>
              <BodyStyled>
                Proyectado: {""}
                {isExisData ? detailInitiative[0].capex_proy : ""}
              </BodyStyled>
            </Item>
          </ColContainer>
          <ColContainer style={{ gridColumn: "0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TitleStyled>Beneficio</TitleStyled>
              <Circle
                style={{
                  backgroundColor: statusBeneficio,
                }}
              ></Circle>
            </div>
            <Item>
              <BodyStyled>
                Comprometido: {""}
                {isExisData ? detailInitiative[0].benef_compr : ""}
              </BodyStyled>
              <BodyStyled>
                Proyectado: {isExisData ? detailInitiative[0].benef_proy : ""}
              </BodyStyled>
            </Item>
          </ColContainer>
        </RowContainer>
      </>
      <Row>
        <Col className="col-one">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TitleStyled>Timeline</TitleStyled>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TitleLeft>Solo caso de negocio</TitleLeft>
              <Switch defaultChecked size="small" />
            </div>
          </div>
          <Card>
            <TimeLine data={detailInitiative} />
          </Card>
        </Col>
        <Col className="col-two">
          <HeaderContainer>
            <TitleStyled>Observaciones</TitleStyled>
            <Filter
              filterByT1={() => filter(1)}
              filterByT2={() => filter(2)}
              filterByT3={() => filter(3)}
            />
          </HeaderContainer>

          <Card>
            <AddItemList data={dataListObservation} />
          </Card>
        </Col>
        <Col>
          <TitleStyled>Resumen</TitleStyled>
          <Card>
            <TitleCard>Descripción</TitleCard>
            <BodyStyled>
              {isExisData ? detailInitiative[0].descr : ""}
            </BodyStyled>
            <TitleCard>Fecha de creación</TitleCard>
            <BodyStyled>
              {isExisData ? detailInitiative[0].fecha_creacion : ""}
            </BodyStyled>
            <TitleCard>Cliente interno</TitleCard>
            <BodyStyled>
              {isExisData ? detailInitiative[0].ing_exop : ""}
            </BodyStyled>
            <TitleCard>Ingeniero a cargo</TitleCard>
            <BodyStyled>
              {isExisData ? detailInitiative[0].cliente_int : ""}
            </BodyStyled>
            <TitleCard>Ingeniero backup</TitleCard>
            <BodyStyled>
              {isExisData ? detailInitiative[0].ing_exop_b : " "}
            </BodyStyled>
            <TitleCard>Link de repositorio</TitleCard>
            <BodyStyled>
              {isExisData ? detailInitiative[0].link_repo : ""}
            </BodyStyled>
          </Card>
        </Col>
      </Row>
    </>
  );
}
Detail.propTypes = {
  match: PropTypes.object,
};
export default Detail;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 992px) {
    .col-one {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .col-two {
      grid-column-start: 3;
      grid-column-end: 5;
    }
  }
`;
const Col = styled.div``;

const TitleStyled = styled.h1`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: var(--subtitle);
  color: var(--blue-dark);
`;
const TitleLeft = styled.h1`
  font-family: var(--font-opensans);
  font-style: normal;
  font-size: var(--bpdy);
  color: var(--blue-dark);
  margin-right: 0.5em;
  text-decoration: underline;
  margin-bottom: 0px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  // grid-template-rows: 100px;
  margin-bottom: 0.5em;
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ColContainer = styled.div`
  margin: 5px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: var(--body);
  line-height: 20px;
  color: var(--blue-dark);
`;
const BodyStyled = styled.p`
  padding: 5px 10px;
  margin: auto;
  color: var(--blue-dark);
  font-size: var(--body);
`;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const TitleCard = styled.p`
  font-family: var(font-opensans);
  font-style: normal;
  font-weight: 600;
  font-size: var(--body);
  line-height: 20px;
  color: var(--gray-dark);
  padding: 5px 10px;
  margin: auto;
`;
