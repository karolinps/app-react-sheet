/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js";
import "chartjs-plugin-datalabels";
import PropTypes from "prop-types";
import styled from "styled-components";
const labelDanger = ["ALTA", "MEDIA", "BAJA"]; // los labels para riesgo (para dinamico solo modificar array)

const ChartJS = ({ data, labelYears, selectedYears }) => {
  const chartRef = useRef(null);
  const [myChart, setMyChart] = useState(null);

  useEffect(() => {
    // use efect que permite el montado del chart, despues de montado el componente.
    setMyChart(
      new Chart(chartRef.current, {
        type: "bubble",
        data: { datasets: getDatasets(data) },
        options: options,
      })
    );
  }, []);

  useEffect(() => {
    // use efect que escucha cambios de los ticks
    if (myChart) {
      myChart.options.scales.xAxes[0].ticks = ticksSize();
      myChart.update();
    }
  }, [JSON.stringify(selectedYears)]);

  useEffect(() => {
    // use efect que escucha cambios del las listas
    if (myChart) {
      myChart.data.datasets = getDatasets(data);
      myChart.update();
    }
  }, [JSON.stringify(data)]);

  const ticksSize = () => {
    return {
      min: Math.min(...selectedYears), // el primer numero del array de años
      max: Math.max(...selectedYears), // el ultimo numero del array de años el array
    };
  };

  const dataProccess = (list) => {
    // función que procesa la lista y la ordena como la necesita el componente
    const data = {
      data: [],
      colors: [],
    };
    for (const element of list) {
      const { color, ...rest } = element;
      data.colors.push(color);
      data.data.push({ ...rest });
    }
    return data;
  };

  const getDatasets = (list) => {
    // función que ordena el objeto de datasets (basicamente para no repetir codigo al actualizar)
    return [
      {
        backgroundColor: dataProccess(list).colors,
        borderColor: dataProccess(list).colors,
        borderWidth: 1,
        data: dataProccess(list).data,
      },
    ];
  };

  const options = {
    // opciones de configuración que permite tener el estilo actual
    tooltips: {
      titleFontFamily: "Roboto",
      titleFontSize: 18,
      cornerRadius: 0,
      displayColors: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
            .description; // contenido del toltip
        },
      },
    },
    scales: {
      yAxes: [
        {
          position: "left",
          offset: true, //  esto agrega un item invisible a los bordes
          gridLines: {
            display: false, // quita la cuadricula
          },
          ticks: {
            min: 0,
            max: 100,
          },
        },
      ],
      xAxes: [
        {
          offset: true, //  esto agrega un item invisible a los bordes
          gridLines: {
            display: false, // quita la cuadricula
          },
          ticks: ticksSize(),
        },
      ],
      chartArea: {
        backgroundColor: `F4F4F4`,
      },
    },
    plugins: {
      // esto sirve para controlar los titulos en cada burbuja
      datalabels: {
        anchor: function (context) {
          var value = context.dataset.data[context.dataIndex];
          return value.v < 50 ? "end" : "center";
        },
        align: function (context) {
          var value = context.dataset.data[context.dataIndex];
          return value.v < 50 ? "end" : "center";
        },
        color: function (context) {
          var value = context.dataset.data[context.dataIndex];
          return value.v < 50 ? context.dataset.backgroundColor : `#FFF`;
        },
        font: {
          weight: "500",
        },
        formatter: function (value) {
          return value.title; // este es el valor de texto en cada burbuja
        },
        offset: 2,
        padding: 0,
      },
    },
    responsive: true,
    legend: {
      display: false,
    },
  };
  return (
    <div
      style={{
        height: "500px",
        width: "500px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: "calc(100% - 60px)",
          width: "calc(100% - 60px)",
          zIndex: 1,
          right: 0,
          top: 0,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            {[1, 2, 3].map((j) => (
              <div
                key={j}
                style={{
                  height: "100%",
                  width: "100%",
                  border: `1px solid #F4F4F4`,
                  background: "#E8E8E8",
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "60px",
          zIndex: 3,
          left: 0,
          top: 0,
          backgroundColor: "#F4F4F4",
          display: "flex",
          flexDirection: "row",
          paddingBottom: "60px",
        }}
      >
        <div
          style={{
            width: "30px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          <Title
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            RIESGO
          </Title>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            alignItems: "center",
            width: "60px",
            height: "100%",
            fontSize: 12,
          }}
        >
          {labelDanger.map((label) => (
            <div
              key={label}
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          height: "60px",
          width: "100%",
          zIndex: 3,
          left: 0,
          bottom: 0,
          backgroundColor: "#F4F4F4",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "COLUMN",
          paddingLeft: "35px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "30px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          <Title>PLAZO</Title>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
            height: "30px",
            width: "100%",
            fontSize: 12,
          }}
        >
          {labelYears.map((label) => (
            <div key={label}>{label}</div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <canvas ref={chartRef} width="440px" height="440px"></canvas>
      </div>
    </div>
  );
};

ChartJS.propTypes = {
  data: PropTypes.array,
  labelYears: PropTypes.any,
  selectedYears: PropTypes.any,
};

export default ChartJS;
/*
    nota, los estilos de fondo y legends se podrían realizar desde el objeto de opciones del chart.
    sin embargo es un proceso super largo y meticuloso. que invertiria una cantidad de tiempo significativa,
    por eso se realizó por capas y superposisionamiento para una mejor manejabilidad
    y se le dejó al chart solo el manejo de los datos
 */

const Title = styled.h1`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: var(--blue-dark);
`;
