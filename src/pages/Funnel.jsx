import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Header from "../components/Default/Header";
import DrawerComponent from "../components/Drawer/Drawer";
import FormInitiatives from "../components/Initiative/Form";
import ContainerCounter from "../components/ContainerCounter/ContainerCounter";
import TableComponent from "../components/Table/Table";
import svgFunnel from "../assets/images/funnel.svg";
import ChartFunnel from "../components/Funnel/ChartFunnel";
import { getAllData } from "../redux/initiative/initiativeDucks";
import config from "../config";

function Funnel() {
  const allDataInitiatives = useSelector((store) => store.initiative.data);
  const dataByStatus = useSelector((store) => store.initiative.dataByStatus);
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
    let acum = allDataInitiatives.reduce(
      (accu, currentValue) => accu + parseInt(currentValue.meta_benef_año),
      0
    );
    return acum;
  };

  const totalMetaByCountry = () => {
    let acum = allDataInitiatives.reduce(
      (accu, currentValue) => accu + parseInt(currentValue.meta_pais),
      0
    );
    return acum;
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
    },
    {
      title: "Título",
    },
    {
      title: "Estado",
    },
    {
      title: "Ultima revisión",
    },
  ];

  //Filtrando por status
  let statusL0 = allDataInitiatives.filter((el) => el.estado_wave === "L0");
  let statusL1 = allDataInitiatives.filter((el) => el.estado_wave === "L1");
  let statusL2 = allDataInitiatives.filter((el) => el.estado_wave === "L2");
  let statusL3 = allDataInitiatives.filter((el) => el.estado_wave === "L3");
  let statusL4 = allDataInitiatives.filter((el) => el.estado_wave === "L4");
  let statusL5 = allDataInitiatives.filter((el) => el.estado_wave === "L5");

  //Acumulador de monto por status
  //By status L0
  const totalMUSDL0 = () => {
    let acum = statusL0.reduce(
      (accu, currentValue) => accu - -currentValue.benef_compr,
      0
    );
    return acum;
  };

  //By status L1
  const totalMUSDL1 = () => {
    let acum = statusL1.reduce(
      (accu, currentValue) => accu - -currentValue.benef_compr,
      0
    );
    return acum;
  };

  //By status L2
  const totalMUSDL2 = () => {
    let acum = statusL2.reduce(
      (accu, currentValue) => accu - -currentValue.benef_compr,
      0
    );
    return acum;
  };

  //By status L3
  const totalMUSDL3 = () => {
    let acum = statusL3.reduce(
      (accu, currentValue) => accu - -currentValue.benef_compr,
      0
    );
    return acum;
  };

  //By status L4
  const totalMUSDL4 = () => {
    let acum = statusL4.reduce(
      (accu, currentValue) => accu - -currentValue.benef_compr,
      0
    );
    return acum;
  };

  //By status L5
  const totalMUSDL5 = () => {
    let acum = statusL5.reduce(
      (accu, currentValue) => accu - -currentValue.benef_compr,
      0
    );
    return acum;
  };


  //Data grid
  const dataFunnel = [
    {
      id: "1",
      percentage: "100",
      counter: statusL0.length,
      label: "Idea",
      musd: totalMUSDL0(),
      data: statusL0,
    },
    {
      id: "2",
      percentage: "90",
      counter: statusL1.length,
      label: "Validacion",
      musd: totalMUSDL1(),
      data: statusL1,
    },
    {
      id: "3",
      percentage: "75",
      counter: statusL2.length,
      label: "Planeación",
      musd: totalMUSDL2(),
      data: statusL2,
    },
    {
      id: "4",
      percentage: "60",
      counter: statusL3.length,
      label: "Implementación",
      musd: totalMUSDL3(),
      data: statusL3,
    },
    {
      id: "5",
      percentage: "45",
      counter: statusL4.length,
      label: "Monitoreo",
      musd: totalMUSDL4(),
      data: statusL4,
    },
    {
      id: "6",
      percentage: "35",
      counter: statusL5.length,
      label: "Captura",
      musd: totalMUSDL5(),
      data: statusL5,
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
        title="Embudo"
        icon={svgFunnel}
        btnLogout
        btnFilter
        btnNewItem
        titleBtnNewItem={"Nueva Iniciativa"}
        drawerShowForm={showDrawer}
      />
      <ContainerCounter data={data} />
      <Row>
        <Col>
          <ChartFunnel data={dataFunnel} />
        </Col>
        <Col>
          <TableComponent
            titleHeader={titleHeader}
            dataTable={dataByStatus ? dataByStatus.data : []}
            urlApi={`${config.api_sheet}/base_2021`}
          />
        </Col>
      </Row>
    </>
  );
}

export default Funnel;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 992px) {
    .col-one {
      grid-column-start: 1;
      grid-column-end: 2;
    }
    .col-two {
      grid-column-start: 2;
      grid-column-end: 5;
    }
  }
`;
const Col = styled.div``;
