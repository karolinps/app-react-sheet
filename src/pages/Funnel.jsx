import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Header from "../components/Default/Header";
import ContainerCounter from "../components/ContainerCounter/ContainerCounter";
import TableComponent from "../components/Table/Table";
import svgFunnel from "../assets/images/funnel.svg";
import ChartFunnel from "../components/Funnel/ChartFunnel";

function Funnel() {
  const allDataProjects = useSelector((store) => store.project.data);
  const dataByProject = useSelector((store) => store.project.dataByProject);

  const data = [
    {
      title: "Plan",
      counter: "100",
    },
    {
      title: "Real",
      counter: "80",
    },
    {
      title: "% Avance",
      counter: "80 %",
    },
    {
      title: "Proyectado",
      counter: 90,
    },
    {
      title: "% Proyectado",
      counter: "90 %",
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

  let statusL0 = allDataProjects.filter((el) => el.estado === "L0");
  let statusL1 = allDataProjects.filter((el) => el.estado === "L1");
  let statusL2 = allDataProjects.filter((el) => el.estado === "L2");
  let statusL3 = allDataProjects.filter((el) => el.estado === "L3");
  let statusL4 = allDataProjects.filter((el) => el.estado === "L4");
  let statusL5 = allDataProjects.filter((el) => el.estado === "L5");

  let dataNewL0 = [];
  let dataNewL1 = [];
  let dataNewL2 = [];
  let dataNewL3 = [];
  let dataNewL4 = [];
  let dataNewL5 = [];

  statusL0.map((el) => {
    if (el.iniciativas) {
      return el.iniciativas.map((el) => {
        if (el) {
          return dataNewL0.push({ ...el });
        }
      });
    }
  });
  statusL1.map((el) => {
    if (el.iniciativas) {
      return el.iniciativas.map((el) => {
        if (el) {
          return dataNewL1.push({ ...el });
        }
      });
    }
  });
  statusL2.map((el) => {
    if (el.iniciativas) {
      return el.iniciativas.map((el) => {
        if (el) {
          return dataNewL2.push({ ...el });
        }
      });
    }
  });
  statusL3.map((el) => {
    if (el.iniciativas) {
      return el.iniciativas.map((el) => {
        if (el) {
          return dataNewL3.push({ ...el });
        }
      });
    }
  });
  statusL4.map((el) => {
    if (el.iniciativas) {
      return el.iniciativas.map((el) => {
        if (el) {
          return dataNewL4.push({ ...el });
        }
      });
    }
  });
  statusL5.map((el) => {
    if (el.iniciativas) {
      return el.iniciativas.map((el) => {
        if (el) {
          return dataNewL5.push({ ...el });
        }
      });
    }
  });
  const dataFunnel = [
    {
      percentage: "100",
      counter: statusL0.length,
      label: "Idea",
      musd: "",
      data: statusL0,
      allInitiatives: dataNewL0,
    },
    {
      percentage: "90",
      counter: statusL1.length,
      label: "Validacion",
      musd: "",
      data: statusL1,
      allInitiatives: dataNewL1,
    },
    {
      percentage: "75",
      counter: statusL2.length,
      label: "Planeación",
      musd: "",
      data: statusL2,
      allInitiatives: dataNewL2,
    },
    {
      percentage: "60",
      counter: statusL3.length,
      label: "Implementación",
      musd: "",
      data: statusL3,
      allInitiatives: dataNewL3,
    },
    {
      percentage: "45",
      counter: statusL4.length,
      label: "Monitoreo",
      musd: "",
      data: statusL4,
      allInitiatives: dataNewL4,
    },
    {
      percentage: "35",
      counter: statusL5.length,
      label: "Captura",
      musd: "",
      data: statusL5,
      allInitiatives: dataNewL5,
    },
  ];
  return (
    <>
      <Header
        title="Embudo"
        icon={svgFunnel}
        btnLogout
        btnFilter
        btnNewItem
        titleBtnNewItem={"Nueva Oportunidad"}
      />
      <ContainerCounter data={data} />
      <Row>
        <Col>
          <ChartFunnel data={dataFunnel} />
        </Col>
        <Col>
          <TableComponent
            titleHeader={titleHeader}
            dataTable={dataByProject ? dataByProject.allInitiatives : []}
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
