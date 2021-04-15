import React from "react";
import styled from "styled-components";
import Select from "../Default/Select";
import axios from "axios";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { Form, Input, message } from "antd";

const { TextArea } = Input;

import Button from "../Default/Button";
import config from "../../config";

const yesAndNot = [
  {
    label: "Si",
    value: "Si",
  },
  {
    label: "No",
    value: "No",
  },
];

const status = [
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

function FormComponent(props) {
  const { drawerOnClose } = props;

  const [tab, setTab] = React.useState(1);

  const [date, setDate] = React.useState(moment().format("DD/MM/YYYY"));

  const [requestCustomer, setRequestCustomer] = React.useState("");
  const [lostCustomer, setLostCustomer] = React.useState("");
  const [impactHSSEQ, setImpactHSSEQ] = React.useState("");
  const [impactEconomic, setImpactEconomic] = React.useState("");
  const [impactProductivity, setImpactProductivity] = React.useState("");
  const [implementationPeriod, setImplementationPeriod] = React.useState("");
  const [requiresIt, setRequiresIt] = React.useState("");

  const [datos, setDatos] = React.useState({
    titulo_proy: "",
    descr: "",
    obj_proy: "",
    pais: "",
    estacion: "",
    gerencia: "",
    area: "",
    benef_compr: "",
    capex_compr: "",
    cliente_int: "",
    sponsor: "",
    estado_wave: "L0",
  });

  const selectRequestCustomerRef = React.useRef();
  const selectLostCustomerRef = React.useRef();
  const selectImpactHSSEQRef = React.useRef();
  const selectRequireItRef = React.useRef();

  const [form] = Form.useForm();

  const allDataInitiatives = useSelector((store) => store.initiative.data);

  const maxFilter = Math.max(...allDataInitiatives.map((el) => el.id));

  const handlerTab = (action) => {
    if (action === 1) {
      setTab(1);
    } else {
      setTab(2);
    }
  };
  const onChange = (date, dateString) => {
    console.log(date);
    setDate(dateString);
  };

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = async () => {
    if (datos.titulo_proy === "" || datos.titulo_proy === null) {
      message.info("Por favor ingrese el titulo de la iniciativa");
    } else {
      const obj = {
        id: maxFilter + 1,
        titulo_proy: datos.titulo_proy,
        descr: datos.descr,
        obj_proy: datos.obj_proy,
        pais: datos.pais,
        estacion: datos.estacion,
        gerencia: datos.gerencia,
        area: datos.area,
        benef_compr: datos.benef_compr,
        capex_compr: datos.capex_compr,
        cliente_int: datos.cliente_int,
        sponsor: datos.sponsor,
        estado_wave: datos.estado_wave,
        date: moment(date).format("DD/MM/YYYY"),
        reque_client: requestCustomer,
        perdida_client: lostCustomer,
        imp_hse: impactHSSEQ,
        imp_ec: impactEconomic,
        imp_prod: impactProductivity,
        plazo_impl: implementationPeriod,
        requiere_it: requiresIt,
      };

      try {
        const response = await axios.post(`${config.api_sheet}/base_2021`, obj);
        if (response) {
          setDate("");
          drawerOnClose();
          clearValues();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const clearValues = () => {
    if (
      selectRequestCustomerRef.current !== null &&
      selectRequestCustomerRef.current !== undefined
    ) {
      selectRequestCustomerRef.current.select.clearValue();
    } else if (
      selectLostCustomerRef.current !== null &&
      selectLostCustomerRef.current !== undefined
    ) {
      selectLostCustomerRef.current.select.clearValue();
    } else if (
      selectImpactHSSEQRef.current !== null &&
      selectImpactHSSEQRef.current !== undefined
    ) {
      selectImpactHSSEQRef.current.select.clearValue();
    } else if (
      selectRequireItRef.current !== null &&
      selectRequireItRef.current !== undefined
    ) {
      selectRequireItRef.current.select.clearValue();
    }

    setDate(moment().format("DD/MM/YYYY"));
    setImpactHSSEQ("");
    setImpactEconomic("");
    setLostCustomer("");
    setImplementationPeriod("");
    setRequiresIt("");
    setImpactProductivity("");
    setDatos({
      titulo_proy: "",
      descr: "",
      obj_proy: "",
      pais: "",
      estacion: "",
      gerencia: "",
      area: "",
      benef_compr: "",
      capex_compr: "",
      cliente_int: "",
      sponsor: "",
      estado_wave: "",
    });
  };

  const handleChange = (e, action) => {
    if (e !== null && action === 1) {
      setRequestCustomer(e.value);
    } else if (e !== null && action === 2) {
      setLostCustomer(e.value);
    } else if (e !== null && action === 3) {
      setImpactHSSEQ(e.value);
    } else if (e !== null && action === 4) {
      setImpactEconomic(e.value);
    } else if (e !== null && action === 5) {
      setImpactProductivity(e.value);
    } else if (e !== null && action === 6) {
      setImplementationPeriod(e.value);
    } else if (e !== null && action === 7) {
      setRequiresIt(e.value);
    }
  };
  const getValue = (option) => {
    return option.value;
  };
  const getLabel = (option) => {
    return option.label;
  };
  return (
    <Wrapper>
      <TabStyled>
        <HeaderTab onClick={() => handlerTab(1)}>Detalle</HeaderTab>
        <HeaderTab onClick={() => handlerTab(2)}>Priorización</HeaderTab>
      </TabStyled>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={sendData}
        layout={"vertical"}
        form={form}
      >
        {tab === 1 ? (
          <TabFirstComponent>
            <Form.Item>
              <Input
                placeholder="Título"
                bordered={false}
                onChange={handleInputChange}
                value={datos.titulo_proy}
                name={"titulo_proy"}
              />
            </Form.Item>
            <Form.Item>
              <TextArea
                placeholder="Descripción"
                bordered={false}
                rows={4}
                onChange={handleInputChange}
                value={datos.descr}
                name="descr"
              />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Objetivo"
                bordered={false}
                onChange={handleInputChange}
                value={datos.obj_proy}
                name="obj_proy"
              />
            </Form.Item>
            <Grid>
              <Form.Item>
                <Input
                  placeholder="País"
                  bordered={false}
                  onChange={handleInputChange}
                  value={datos.pais}
                  name="pais"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Estación"
                  bordered={false}
                  onChange={handleInputChange}
                  value={datos.estacion}
                  name="estacion"
                />
              </Form.Item>
            </Grid>
            <Grid>
              <Form.Item>
                <Input
                  placeholder="Gerencia"
                  bordered={false}
                  onChange={handleInputChange}
                  value={datos.gerencia}
                  name="gerencia"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Área"
                  bordered={false}
                  onChange={handleInputChange}
                  value={datos.area}
                  name="area"
                />
              </Form.Item>
            </Grid>
            <Space direction="vertical">
              <DatePicker
                onChange={onChange}
                placeholder="Plazo comprometido"
                bordered={false}
              />
            </Space>
            <Form.Item>
              <Input
                placeholder="Beneficio esperado"
                bordered={false}
                onChange={handleInputChange}
                value={datos.benef_compr}
                name="benef_compr"
              />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Capex comprometido"
                bordered={false}
                onChange={handleInputChange}
                value={datos.capex_compr}
                name="capex_compr"
              />
            </Form.Item>
            <Grid>
              <Form.Item>
                <Input
                  placeholder="Cliente interno"
                  bordered={false}
                  onChange={handleInputChange}
                  value={datos.cliente_int}
                  name="cliente_int"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Sponsor"
                  bordered={false}
                  onChange={handleInputChange}
                  value={datos.sponsor}
                  name="sponsor"
                />
              </Form.Item>
            </Grid>
          </TabFirstComponent>
        ) : (
          <TabSecondComponent>
            <Select
              options={yesAndNot}
              placeholder={"¿Requerimiento de cliente?"}
              useRef={selectRequestCustomerRef}
              handleChange={(e) => handleChange(e, 1)}
              getOptionLabel={getLabel}
              getOptionValue={getValue}
            />
            <Select
              options={status}
              placeholder={"¿Potencial pérdida de cliente?"}
              useRef={selectLostCustomerRef}
              handleChange={(e) => handleChange(e, 2)}
              getOptionLabel={getLabel}
              getOptionValue={getValue}
            />
            <Select
              options={status}
              placeholder={"¿Impacto en HSSEQ?"}
              useRef={selectImpactHSSEQRef}
              handleChange={(e) => handleChange(e, 3)}
              getOptionLabel={getLabel}
              getOptionValue={getValue}
            />
            <Select
              //   options={size}
              placeholder={"Impacto Económico"}
              // useRef={selectImpECRef}
              handleChange={(e) => handleChange(e, 4)}
              getOptionLabel={getLabel}
              getOptionValue={getValue}
            />
            <Select
              //   options={size}
              placeholder={"¿Impacto en productividad?"}
              // useRef={selectImpProducRef}
              handleChange={(e) => handleChange(e, 5)}
              getOptionLabel={getLabel}
              getOptionValue={getValue}
            />
            <Select
              //   options={size}
              placeholder={"¿Plazo de implementación?"}
              // useRef={selectPlazoRef}
              handleChange={(e) => handleChange(e, 6)}
              getOptionLabel={getLabel}
              getOptionValue={getValue}
            />
            <Select
              options={yesAndNot}
              placeholder={"¿Requiere IT?"}
              useRef={selectRequireItRef}
              handleChange={(e) => handleChange(e, 7)}
              getOptionLabel={getLabel}
              getOptionValue={getValue}
            />
          </TabSecondComponent>
        )}
        <FooterButton>
          <Button
            htmlType="submit"
            background="var(--blue-medium)"
            title={"Crear Iniciativa"}
          />
          <Button
            onClick={clearValues}
            background="var(--danger)"
            title={"Borrar"}
          />
        </FooterButton>
      </Form>
    </Wrapper>
  );
}

FormComponent.propTypes = {
  drawerOnClose: PropTypes.func,
};
export default FormComponent;

const Wrapper = styled.div`
  .ant-space-vertical {
    background: var(--gray-low);
    width: 100%;
    border-radius: 5px;
    margin: 0 0 1.5em 0;
  }
  .ant-picker {
    width: 100%;
    border: none !important;
    background: var(--gray-low);
    height: 52px;
    border-radius: 5px;
  }
  .ant-picker-input > input {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: var(--subtitle);
    line-height: 23px;
    letter-spacing: 0.05em;
  }
  .ant-picker-input > input::placeholder {
    color: #8a8a8a;
  }
  .ant-select-selection__placeholder {
    color: blue;
  }
`;

const TabStyled = styled.div`
  display: flex;
  margin: 0.5em 0;
`;

const HeaderTab = styled.div`
  margin: 0 0.5em;
  font-family: var(font-opensans);
  font-style: normal;
  font-weight: normal;
  font-size: var(--body);
  line-height: 20px;
  color: var(--blue-dark);
  cursor: pointer;
`;

const TabFirstComponent = styled.div`
  input,
  textarea {
    width: 100%;
    height: 52px;
    background: var(--gray-low) !important;
    border-radius: 5px;
    border: none;
    padding: 0.5em;
    outline: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: var(--subtitle);
    letter-spacing: 0.05em;
    color: var(--gray);
  }
  textarea {
    resize: none;
    height: 8em;
  }
  .ant-form-item {
    margin-bottom: 15px;
  }
`;
const TabSecondComponent = styled.div`
  margin: 0.5em 0;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
`;

const FooterButton = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  width: 96%;
  left: 10px;
  right: 10px;
  button {
    display: grid;
    width: 100%;
  }
`;
