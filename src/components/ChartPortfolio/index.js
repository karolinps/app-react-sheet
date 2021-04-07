/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";

import Chart from "./chart";
import Slider from "./utils/Slider";
import Strategy from "./utils/Strategy";
import Filters, { types } from "./utils/Filters";

import {
  formatDateServerResponse,
  generateArrayCreateAt,
  getYearsList,
  getSizeBooble,
  getNumberYear,
} from "./utils/funcUtilities";

const briefcase = [
  // DATA DE BACKEND
  {
    x: "2022-01-02", // posision horizontal (izquierda, derecha)
    y: 60, // posision vertical (arriba, abajo) (0,100)
    r: 40, // tamaño de la esfera (impacto)
    title: "1", // label que aparece dentro de la burbuja
    description: "desarrollar gobiernos corpoarativos 1", //
    type: 1, // habría que poner el identificador del tipo. y ajustar la lista en filters. actualmente es el id que coincida con types en filters
    create_at: "2021-01-01",
  },
  {
    x: "2024-05-31",
    y: 90,
    r: 40,
    title: "2",
    description: "descripcion 2",
    type: 2,
    create_at: "2021-01-01",
  },
  {
    x: "2022-06-15",
    y: 60,
    r: 40,
    title: "3",
    description: "descripcion 3",
    type: 3,
    create_at: "2022-05-17",
  },
  {
    x: "2024-06-05",
    y: 40,
    r: 60,
    title: "4",
    description: "descripcion 4",
    type: 1,
    create_at: "2023-06-01",
  },
  {
    x: "2022-05-31",
    y: 25,
    r: 40,
    title: "5",
    description: "descripcion 6",
    type: 2,
    create_at: "2021-01-31",
  },
  {
    x: "2024-06-15",
    y: 60,
    r: 40,
    title: "6",
    description: "descripcion 6",
    type: 3,
    create_at: "2024-01-15",
  },
  {
    x: "2023-11-05",
    y: 85,
    r: 60,
    title: "7",
    description: "descripcion 7",
    type: 1,
    create_at: "2023-12-25",
  },
];

const Index = () => {
  const [selectedYears, setSelectedYears] = useState([]);
  const [data, setData] = useState([]);

  const [activeYear, setActiveYear] = useState();
  const [activeType, setActiveType] = useState({ id: 0, name: "" });

  const [yearsCreateAt, setYearsCreateAt] = useState([]);

  const [stragety, setStrategy] = useState(0);

  const formateData = (list, init) => {
    // ACÁ SE PUEDE UTILIZAR PARA SUSTITUIR LAS VARIABLES POR COMO VENGAN DE LA BASE DE DATOS
    // preprocesa la informacion recibida y crea una lista ideal.
    const listFormated = [];
    const listCreateAtYears = [];
    const listDataYears = [];
    for (const element of list) {
      listFormated.push({
        x: getNumberYear(element.x),
        y: element.y,
        r: getSizeBooble(element.r),
        title: element.title,
        description: element.description,
        color: types.find((t) => t.id === element.type)?.color,
        create_at: element.create_at,
      });

      if (init) {
        // obtiene la lista de los años existentes en create_at y data
        listCreateAtYears.push(
          parseInt(
            moment(element.create_at, formatDateServerResponse).format("YYYY")
          )
        );
        listDataYears.push(
          parseInt(moment(element.x, formatDateServerResponse).format("YYYY"))
        );
      }
    }
    if (init) {
      setYearsCreateAt(generateArrayCreateAt(listCreateAtYears));
    }
    return listFormated;
  };

  useEffect(() => {
    setData(formateData(briefcase, true)); // llamada inicial de la info.
  }, []);

  useEffect(() => {
    setSelectedYears(getYearsList(activeYear, stragety));
  }, [activeYear, stragety]);

  const calculeLabelYears = (s) => {
    // genera la estructura del label
    let listSelectedYears = [];
    if (s.length > 0) {
      switch (stragety) {
        case 2:
          listSelectedYears = [`${s[0]}`, `${s[1]}`, `${s[2]}`];
          break;
        case 5:
          listSelectedYears = [
            `${s[0]}-${s[1]}`,
            `${s[2]}-${s[3]}`,
            `${s[4]}-${s[5]}`,
          ];
          break;
        case 8:
          listSelectedYears = [
            `${s[0]}-${s[2]}`,
            `${s[3]}-${s[5]}`,
            `${s[6]}-${s[8]}`,
          ];
          break;
        default:
          break;
      }
    }
    return listSelectedYears;
  };

  const typeFilter = (type, array) => {
    // recibe una lista y la filtra por años.
    let list = [];
    if (type.id === 0) {
      list = array;
    } else {
      const listFiltered = array.filter((b) => b.type === type.id);
      list = listFiltered;
    }
    return list;
  };

  const yearFilter = (active, array) => {
    const list = array.filter(
      (element) =>
        parseInt(
          moment(element.create_at, formatDateServerResponse).format("YYYY")
        ) === active
    );
    return list;
  };

  const filterByYear = (active) => {
    //FILTRO
    // filtro slider,
    const array = typeFilter(activeType, briefcase); // primero se revisa si existe un filtro por tipo
    const listFilteredYear = yearFilter(active, array); // segundo se realiza el filtro deseado por año
    setData(formateData(listFilteredYear));
    setActiveYear(active);
  };

  const filterByType = (type) => {
    // FILTRO
    setActiveType(type);
    const array = yearFilter(activeYear, briefcase); // primero se revisa si existe filtro por año (que realmente siempre hay xD)
    const listFiltereType = typeFilter(type, array); // segundo se realiza el filtro deseado por tipo
    setData(formateData(listFiltereType));
  };

  return (
    <>
      <TitleStyled>Portafolio de innovación</TitleStyled>

      <Wrapper>
        <DivContainer>
          <ContainerChart>
            <div style={{ marginRight: "auto", display: "none" }}>
              <Strategy getStrategy={setStrategy} />
            </div>
            <div>
              <Chart
                data={data}
                labelYears={calculeLabelYears(selectedYears)}
                selectedYears={selectedYears}
                stragety={stragety}
              />
              <Slider
                yearsCreateAt={yearsCreateAt}
                getSelectedYear={filterByYear}
              />
            </div>
          </ContainerChart>
          <Filters getFilter={filterByType} />
        </DivContainer>
      </Wrapper>
    </>
  );
};

export default Index;

const Wrapper = styled.div`
  top: 3em;
  bottom: 0em;
  overflow: hidden;
  left: 0em;
  right: 0em;
  position: absolute;
  :hover {
    overflow: auto;
  }
  @media (max-width: 767px) {
    left: 0em;
    right: 0em;
    position: absolute;
    top: auto;
    bottom: auto;
  }
`;

const DivContainer = styled.div`
  background: #f4f4f4;
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  min-width: 750px;
  @media (min-width: 1600px) {
    height: 100%;
  }
`;

const ContainerChart = styled.div`
  background: #f4f4f4;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 550px;
`;

const TitleStyled = styled.h2`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: var(--blue-dark);
`;
