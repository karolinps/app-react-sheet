import React, { useRef } from "react";
import { Drawer } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";
import Select from "../Default/Select";
import DatePicker from "../Default/DatePicker";
import Button from "../Default/Button";

const size = [
  {
    label: "Grande",
    value: "grande",
  },
  {
    label: "Mediano",
    value: "mediano",
  },
  {
    label: "Pequeño",
    value: "pequeño",
  },
];
const status = [
  {
    label: "Abiertos",
    value: "abiertos",
  },
  {
    label: "Pausados",
    value: "mediano",
  },
  {
    label: "Cerrados",
    value: "cerrados",
  },
  {
    label: "Eliminados",
    value: "eliminados",
  },
];
const profile = [
  {
    label: "Nuevos",
    value: "nuevos",
  },
  {
    label: "Críticos",
    value: "mediano",
  },
  {
    label: "Cerrados",
    value: "cerrados",
  },
  {
    label: "Eliminados",
    value: "eliminados",
  },
];
const country = [
  {
    label: "Chile",
    value: "chile",
  },
  {
    label: "Colombia",
    value: "colombia",
  },
  {
    label: "Ecuador",
    value: "ecuador",
  },
];
const area = [
  {
    label: "Import",
    value: "import",
  },
  {
    label: "Export",
    value: "export",
  },
  {
    label: "Rampa",
    value: "Rampa",
  },
];
const type = [
  {
    label: "Ahorro",
    value: "ahorro",
  },
  {
    label: "Revenue Management",
    value: "RevenueManagement",
  },
];

function Filter(props) {
  const { visible, onClose } = props;
  const selectSizeRef = useRef();
  const selectStatusRef = useRef();
  const selectProfileRef = useRef();
  const selectTypeRef = useRef();
  const selectCountryRef = useRef();
  const selectAreaRef = useRef();

  const clearFilter = () => {
    selectSizeRef.current.select.clearValue();
    selectStatusRef.current.select.clearValue();
    selectProfileRef.current.select.clearValue();
    selectTypeRef.current.select.clearValue();
    selectCountryRef.current.select.clearValue();
    selectAreaRef.current.select.clearValue();
  };

  const title = <TitleStyled>Filtros</TitleStyled>;

  return (
    <>
      <Drawer
        title={title}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={400}
      >
        <Select options={size} placeholder={"Tamaño"} useRef={selectSizeRef} />
        <Select
          options={status}
          placeholder={"Estado"}
          useRef={selectStatusRef}
        />
        <Select
          options={profile}
          placeholder={"Perfil"}
          useRef={selectProfileRef}
        />
        <Select options={type} placeholder={"Tipo"} useRef={selectTypeRef} />
        <Select
          options={country}
          placeholder={"País"}
          useRef={selectCountryRef}
        />
        <Select options={area} placeholder={"Area"} useRef={selectAreaRef} />
        <DatePicker />
        <FooterButton>
          <Button title="Aplicar filtros" background="var(--blue-medium)" />
          <Button
            title="Borrar"
            background="var(--danger)"
            onClick={clearFilter}
          />
        </FooterButton>
      </Drawer>
    </>
  );
}

Filter.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Filter;

const TitleStyled = styled.h1`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: var(--blue-dark);
`;

const FooterButton = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 22px;
  left: 22px;
  margin: auto;
  bottom: 22px;
`;
