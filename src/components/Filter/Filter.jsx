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
} from "../../redux/initiative/initiativeDucks";
import axios from "axios";
import config from "../../config";

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
  {
    label: "Sistemas",
    value: "Sistemas",
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
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const dispacth = useDispatch();

  const clearFilter = async () => {
    selectSizeRef.current.select.clearValue();
    selectStatusRef.current.select.clearValue();
    selectProfileRef.current.select.clearValue();
    selectTypeRef.current.select.clearValue();
    selectCountryRef.current.select.clearValue();
    selectAreaRef.current.select.clearValue();
    setSelectedCountry("");
    setSelectedArea("");
    setDateTo("");
    setDateFrom("");

    const resp = await axios.get(`${config.api_sheet}/base_2021`);
    dispacth(getAllData(resp.data));
    dispacth(filterByCountry("", false));
    onClose();
  };

  const handleChange = (e) => {
    if (e !== null) {
      setSelectedCountry(e.value);
    }
  };

  const handleChangeArea = (e) => {
    if (e !== null) {
      setSelectedArea(e.value);
    }
  };

  const handleChangeDate = (dates, dateStrings) => {
    console.log(dates, dateTo);
    setDateFrom(moment(dateStrings[0]).format("DD/MM/YYYY"));
    setDateTo(moment(dateStrings[1]).format("DD/MM/YYYY"));
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
    dispacth(filterByDate(dateFrom));

    try {
      const resp = await axios.get(
        `${config.api_sheet}/base_2021/search?pais=*${selectedCountry}*&area=*${selectedArea}*&fecha_creacion=*${dateFrom}`
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
          handleChange={handleChange}
        />
        <Select
          options={status}
          placeholder={"Estado"}
          useRef={selectStatusRef}
          handleChange={handleChange}
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
          handleChange={handleChange}
        />
        <Select
          options={area}
          placeholder={"Area"}
          useRef={selectAreaRef}
          getOptionLabel={getLabel}
          getOptionValue={getValue}
          handleChange={handleChangeArea}
        />
        <DatePicker onChangeDate={handleChangeDate} />
        {/* <Select
          options={area}
          placeholder={"¿Esta en wave?"}
          useRef={'selectAreaRef'}
          getOptionLabel={getLabel}
          getOptionValue={getValue}
          handleChange={handleChangeArea}
        /> */}
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
