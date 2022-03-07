import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import DrawerComponent from "../components/Drawer/Drawer";
import FormInitiatives from "../components/Initiative/Form";

import Header from "../components/Default/Header";
import ContainerCounter from "../components/ContainerCounter/ContainerCounter";
import TableComponent from "../components/Table/Table";
import GridTable from "../components/Table/GridTable";
import svgSeasons from "../assets/images/seasons.svg";

import { getAllData } from "../redux/initiative/initiativeDucks";
import config from "../config";

function Seasons() {
  const allDataInitiatives = useSelector((store) => store.initiative.data);
  const dataBySeasonsAndStatus = useSelector(
    (store) => store.initiative.dataBySeasonsAndStatus
  );
  const activeFilter = useSelector((store) => store.initiative.activeFilter);
  const [visible, setVisible] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    const resp = await axios.get(`${config.api_sheet}/base_2021`);
    dispatch(getAllData(resp.data));
  };

  //Total de counter
  const totalBenefCapt = () => {
    let acum = allDataInitiatives.reduce(
      (accu, currentValue) => accu - -currentValue.benef_captura,
      0
    );
    return acum;
  };
  const totalBenefCompr = () => {
    let acum = allDataInitiatives.reduce(
      (accu, currentValue) => accu - -currentValue.benef_compr,
      0
    );
    return acum;
  };

  const totalMetaAnio = () => {
    let number =
      allDataInitiatives.length > 0
        ? Math.max(...allDataInitiatives.map((el) => el.meta_benef_año))
        : 0;
    return number;
  };

  const totalMetaByCountry = () => {
    let number =
      allDataInitiatives.length > 0
        ? Math.max(...allDataInitiatives.map((el) => el.meta_pais))
        : 0;
    return number;
  };

  //Total promedio real / plan
  const totalAvancePercent = () => {
    let prome = totalBenefCapt() ? totalBenefCapt() / totalMetaAnio() : 0;
    return prome;
  };

  //Total promedio proyectado / plan
  const totalProyecPercent = () => {
    let prome = totalBenefCompr() ? totalBenefCompr() / totalMetaAnio() : 0;
    return prome;
  };

  const validateByFilterCountry = activeFilter
    ? totalMetaByCountry()
    : totalMetaAnio();

  const data = [
    {
      title: "Plan",
      counter: validateByFilterCountry,
    },
    {
      title: "Real",
      counter: totalBenefCapt(),
    },
    {
      title: "% Avance",
      counter: `${totalAvancePercent()} %`,
    },
    {
      title: "Proyectado",
      counter: totalBenefCompr(),
    },
    {
      title: "% Proyectado",
      counter: `${totalProyecPercent().toFixed(2)} %`,
    },
  ];

  const titleHeader = [
    {
      title: "#",
      width: 10,
    },
    {
      title: "Título",
      width: 20,
    },
    {
      title: "Estado",
      width: 20,
    },
    {
      title: "Ultima revisión",
      width: 30,
    },
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const drawer = (
    <DrawerComponent
      title={"Nueva Iniciativa"}
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width={400}
    >
      <FormInitiatives drawerOnClose={onClose} />
    </DrawerComponent>
  );

  return (
    <>
      {drawer}
      <Header
        title="Estaciones"
        icon={svgSeasons}
        btnLogout
        btnFilter
        btnNewItem
        titleBtnNewItem={"Nueva Iniciativa"}
        drawerShowForm={showDrawer}
      />
      <ContainerCounter data={data} />
      <Row>
        <Col>
          <GridTable />
        </Col>
        <Col>
          <TableComponent
            titleHeader={titleHeader}
            dataTable={dataBySeasonsAndStatus ? dataBySeasonsAndStatus : []}
            urlApi={`${config.api_sheet}/base_2021`}
          />
        </Col>
      </Row>
    </>
  );
}

export default Seasons;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Col = styled.div``;
