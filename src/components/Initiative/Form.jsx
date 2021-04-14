import React from "react";
import styled from "styled-components";
import Select from "../Default/Select";
import axios from "axios";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { Form, Input } from "antd";

import Button from "../Default/Button";
import config from "../../config";

function FormComponent(props) {
  const { onClose } = props;
  const [tab, setTab] = React.useState(1);
  const [date, setDate] = React.useState("");
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

  const sendData = async (values) => {
    const obj = {
      id: maxFilter + 1,
      titulo_proy: values.titulo_proy,
      descr: values.descr,
      obj_proy: values.obj_proy,
      pais: values.pais,
      estacion: values.estacion,
      gerencia: values.gerencia,
      area: values.area,
      date: moment(date).format("DD/MM/YYYY"),
      benef_compr: values.benef_compr,
      capex_compr: values.capex_compr,
      cliente_int: values.cliente_int,
      sponsor: values.sponsor,
      estado_wave: "L0",
    };
    try {
      const response = await axios.post(`${config.api_sheet}/base_2021`, obj);
      if (response) {
        form.resetFields();
        setDate("");
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const clearValues = () => {
    form.resetFields();
    setDate("");
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
            <Form.Item
              name="titulo_proy"
              rules={[
                { required: true, message: "Por favor ingrese el titulo!" },
              ]}
            >
              <Input placeholder="Título" bordered={false} />
            </Form.Item>
            <Form.Item name="descr">
              <Input placeholder="Descripción" bordered={false} />
            </Form.Item>
            <Form.Item name="obj_proy">
              <Input placeholder="Objetivo" bordered={false} />
            </Form.Item>
            <Grid>
              <Form.Item name="pais">
                <Input placeholder="País" bordered={false} />
              </Form.Item>
              <Form.Item name="estacion">
                <Input placeholder="Estación" bordered={false} />
              </Form.Item>
            </Grid>
            <Grid>
              <Form.Item name="gerencia">
                <Input placeholder="Gerencia" bordered={false} />
              </Form.Item>
              <Form.Item name="area">
                <Input placeholder="Área" bordered={false} />
              </Form.Item>
            </Grid>
            <Space direction="vertical">
              <DatePicker
                onChange={onChange}
                placeholder="Plazo comprometido"
              />
            </Space>
            <Form.Item name="benef_compr">
              <Input placeholder="Beneficio esperado" bordered={false} />
            </Form.Item>
            <Form.Item name="capex_compr">
              <Input placeholder="Capex comprometido" bordered={false} />
            </Form.Item>
            <Grid>
              <Form.Item name="cliente_int">
                <Input placeholder="Cliente interno" bordered={false} />
              </Form.Item>
              <Form.Item name="sponsor">
                <Input placeholder="Sponsor" bordered={false} />
              </Form.Item>
            </Grid>
          </TabFirstComponent>
        ) : (
          <TabSecondComponent>
            <Select
              //   options={size}
              placeholder={"¿Requerimiento de cliente?"}
              //   useRef={selectSizeRef}
              //   handleChange={handleChange}
            />
            <Select
              //   options={size}
              placeholder={"¿Potencial pérdida de cliente?"}
              //   useRef={selectSizeRef}
              //   handleChange={handleChange}
            />
            <Select
              //   options={size}
              placeholder={"¿Impacto en HSSEQ?"}
              //   useRef={selectSizeRef}
              //   handleChange={handleChange}
            />
            <Select
              //   options={size}
              placeholder={"Impacto Económico"}
              //   useRef={selectSizeRef}
              //   handleChange={handleChange}
            />
            <Select
              //   options={size}
              placeholder={"¿Impacto en productividad?"}
              //   useRef={selectSizeRef}
              //   handleChange={handleChange}
            />
            <Select
              //   options={size}
              placeholder={"¿Plazo de implementación?"}
              //   useRef={selectSizeRef}
              //   handleChange={handleChange}
            />
            <Select
              //   options={size}
              placeholder={"¿Requiere IT?"}
              //   useRef={selectSizeRef}
              //   handleChange={handleChange}
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
  onClose: PropTypes.func,
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
    background: var(--gray-low);
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
