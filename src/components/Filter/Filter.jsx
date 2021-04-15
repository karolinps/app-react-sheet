import React, { useRef, useState } from "react";
import { Drawer } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";
import Select from "../Default/Select";
import DatePicker from "../Default/DatePicker";
import Button from "../Default/Button";
import { useDispatch } from "react-redux";
import moment from "moment";
import {
  filterByCountry,
  getAllData,
  filterByArea,
  filterByDate,
  filterByStatus,
  filterBySize,
  filterByWave,
} from "../../redux/initiative/initiativeDucks";
import axios from "axios";
import config from "../../config";

const size = [
  {
    label: "Muy bajo",
    value: "Muy bajo",
  },
  {
    label: "Bajo",
    value: "Bajo",
  },
  {
    label: "Moderado",
    value: "Moderado",
  },
  {
    label: "Alto",
    value: "Alto",
  },
  {
    label: "Muy alto",
    value: "Muy alto",
  },
];
const status = [
  {
    label: "En proceso",
    value: "En proceso",
  },
  {
    label: "Capturada",
    value: "Capturada",
  },
  {
    label: "Algunos Problemas",
    value: "Algunos Problemas",
  },
  {
    label: "Cancelada",
    value: "Cancelada",
  },
];
const profile = [];
const country = [
  {
    label: "Chile",
    value: "Chile",
  },
  {
    label: "Colombia",
    value: "Colombia",
  },
  {
    label: "Ecuador",
    value: "Ecuador",
  },
];
const area = [
  {
    label: "Exportaciones",
    value: "Exportaciones",
  },
  {
    label: "Importaciones",
    value: "Importaciones",
  },
  {
    label: "Rampa",
    value: "Rampa",
  },
  {
    label: "Pasajeros",
    value: "Pasajeros",
  },
  {
    label: "Mantenimiento",
    value: "Mantenimiento",
  },
  {
    label: "IT",
    value: "IT",
  },
  {
    label: "Recursos Humanos",
    value: "Recursos Humanos",
  },
  {
    label: "HSSEQ",
    value: "HSSEQ",
  },
  {
    label: "Finanzas",
    value: "Finanzas",
  },
];
const type = [];
const wave = [
  {
    label: "Si",
    value: "Si",
  },
  {
    label: "No",
    value: "No",
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
  const selectWaveRef = useRef();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedWave, setSelectedWave] = useState("");
  const [dateFrom, setDateFrom] = useState("");

  const dispacth = useDispatch();

  const clearFilter = async () => {
    selectSizeRef.current.select.clearValue();
    selectStatusRef.current.select.clearValue();
    selectProfileRef.current.select.clearValue();
    selectTypeRef.current.select.clearValue();
    selectCountryRef.current.select.clearValue();
    selectAreaRef.current.select.clearValue();
    selectWaveRef.current.select.clearValue();
    setSelectedCountry("");
    setSelectedSize("");
    setSelectedStatus("");
    setSelectedWave("");
    setSelectedArea("");
    setDateFrom("");

    const resp = await axios.get(`${config.api_sheet}/base_2021`);
    dispacth(getAllData(resp.data));
    dispacth(filterByCountry("", false));
    onClose();
  };

  const handleChange = (e, action) => {
    if (e !== null && action === 1) {
      setSelectedCountry(e.value);
    } else if (e !== null && action === 2) {
      setSelectedStatus(e.value);
    } else if (e !== null && action === 3) {
      setSelectedSize(e.value);
    } else if (e !== null && action === 4) {
      setSelectedArea(e.value);
    } else if (e !== null && action === 5) {
      setSelectedWave(e.value);
    }
  };

  const handleChangeDate = (dates, dateStrings) => {
    console.log(dates, dateStrings);
    setDateFrom(moment(dateStrings).format("DD/MM/YYYY"));
  };

  const getValue = (option) => {
    return option.value;
  };
  const getLabel = (option) => {
    return option.label;
  };
  const filter = async () => {
    dispacth(filterByCountry(selectedCountry, true));
    dispacth(filterByArea(selectedArea));
    dispacth(filterByStatus(selectedStatus));
    dispacth(filterBySize(selectedSize));
    dispacth(filterByWave(selectedWave));
    dispacth(filterByDate(dateFrom));

    try {
      const resp = await axios.get(
        `${config.api_sheet}/base_2021/search?pais=*${selectedCountry}*&area=*${selectedArea}*&fecha_creacion=*${dateFrom}*&status=*${selectedStatus}*&aux_impacto_capex=*${selectedSize}*&en_wave=*${selectedWave}`
      );
      dispacth(getAllData(resp.data));
      onClose();
    } catch (error) {
      console.log(error);
    }
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
        <Select
          options={size}
          placeholder={"Tamaño"}
          useRef={selectSizeRef}
          getOptionLabel={getLabel}
          getOptionValue={getValue}
          handleChange={(e) => handleChange(e, 3)}
        />
        <Select
          options={status}
          placeholder={"Estado"}
          useRef={selectStatusRef}
          getOptionLabel={getLabel}
          getOptionValue={getValue}
          handleChange={(e) => handleChange(e, 2)}
        />
        <Select
          options={profile}
          placeholder={"Perfil"}
          useRef={selectProfileRef}
          handleChange={handleChange}
        />
        <Select options={type} placeholder={"Tipo"} useRef={selectTypeRef} />
        <Select
          options={country}
          placeholder={"País"}
          useRef={selectCountryRef}
          getOptionLabel={getLabel}
          getOptionValue={getValue}
          handleChange={(e) => handleChange(e, 1)}
        />
        <Select
          options={area}
          placeholder={"Area"}
          useRef={selectAreaRef}
          getOptionLabel={getLabel}
          getOptionValue={getValue}
          handleChange={(e) => handleChange(e, 4)}
        />
        <DatePicker
          onChangeDate={handleChangeDate}
          placeholder={"Fecha Creación"}
        />
        <Select
          options={wave}
          placeholder={"¿Esta en wave?"}
          useRef={selectWaveRef}
          getOptionLabel={getLabel}
          getOptionValue={getValue}
          handleChange={(e) => handleChange(e, 5)}
        />
        <FooterButton>
          <Button
            title="Aplicar filtros"
            background="var(--blue-medium)"
            onClick={filter}
          />
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
  font-size: var(--title);
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
  right: 18px;
  left: 18px;
  margin: auto;
  bottom: 18px;
`;
