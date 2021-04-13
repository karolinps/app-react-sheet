import React, { useState } from "react";
import styled from "styled-components";
import { Input, Radio } from "antd";
import PropTypes from "prop-types";
import axios from "axios";
import moment from "moment";
import config from "../../config";
import Item from "../Default/Item";
import { useDispatch, useSelector } from "react-redux";
import { getAllObservations } from "../../redux/observation/observationDucks";

import { DeleteOutlined } from "@ant-design/icons";

function AddItemList(props) {
  const { data } = props;
  const [value, setValue] = useState("");
  const [valueRadio, setValueRadio] = useState("riesgo");
  const [visible, setVisible] = useState("");

  const dataListUpdate = useSelector((store) => store.observation.data);

  const dispatch = useDispatch();

  const handleConfirm = async () => {
    const dataNew = {
      id: Math.random(),
      fecha: moment(new Date()).format("L"),
      descripcion: value,
      type: valueRadio,
    };

    await axios.post(`${config.api}/observaciones`, dataNew);
    setValueRadio("riesgo");
    dispatch(getAllObservations(dataListUpdate));
    setValue("");
  };

  const onChange = (e) => {
    setValueRadio(e.target.value);
  };

  const showIcon = (i) => {
    setVisible(() => {
      return { [i]: true };
    });
  };
  const hideIcon = (i) => {
    setVisible(() => {
      return { [i]: false };
    });
  };

  const deleteItem = async (id) => {
    await axios.delete(`${config.api}/observaciones/${id}`);

    dispatch(getAllObservations(dataListUpdate));
  };

  return (
    <Wrapper>
      <Container>
        {data.map((el, i) => {
          return (
            <div
              style={{ marginBottom: "1em", position: "relative" }}
              key={i}
              onMouseEnter={() => showIcon(i)}
              onMouseLeave={() => hideIcon(i)}
            >
              <Item
                backgroundColor={"var(--gray-medium)"}
                borderRadius={5}
                height={90}
              >
                <BodyStyled>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <DateStyled>{el.fecha}</DateStyled>
                    {visible[i] && (
                      <Icon onClick={() => deleteItem(el.id)}>
                        <DeleteOutlined />
                      </Icon>
                    )}
                  </div>
                  <DescriptionStyled>{el.descripcion}</DescriptionStyled>
                </BodyStyled>
              </Item>
            </div>
          );
        })}
      </Container>
      <Filters>
        <Radio.Group onChange={onChange} value={valueRadio}>
          <Radio value={"riesgo"}>Riesgo</Radio>
          <Radio value={"problema"}>Problema</Radio>
          <Radio value={"hito"}>hito</Radio>
        </Radio.Group>
      </Filters>
      <Footer>
        <Input
          placeholder="Insertar comentario"
          value={value}
          onPressEnter={handleConfirm}
          onChange={(e) => setValue(e.target.value)}
          bordered={false}
        />
      </Footer>
    </Wrapper>
  );
}
AddItemList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AddItemList;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  p {
    margin-bottom: 0px;
    font-family: var(--font-opensans);
    font-style: normal;
    padding: 0px 1em;
    position: relative;
    top: 1em;
  }
`;
const DateStyled = styled.p`
  font-weight: 600;
  font-size: var(--body);
  color: var(--gray-dark);
`;

const DescriptionStyled = styled.p`
  font-weight: 400;
  font-size: var(--body);
  color: var(--blue-dark);
`;

const Container = styled.div`
  padding: 0.5em 1em;
  margin-bottom: 1em;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 12em;
  top: 0;
  overflow: auto;
`;
const Footer = styled.div`
  position: absolute;
  right: 1em;
  left: 1em;
  bottom: 1em;
  input,
  input:hover,
  input:focus {
    border-radius: 5px;
    font-family: var(--font-roboto);
    font-style: normal;
    font-weight: normal;
    font-size: var(--subtitle);
    line-height: 23px;
    letter-spacing: 0.05em;
    outline: none;
    width: 100%;
    padding: 1em;
    background: #fff;
    height: 100px;
    background: #fff;
  }
`;

const BodyStyled = styled.div`
  margin: 1em 0;
`;
const Filters = styled.div`
  display: flex;
  justify-content: left;
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: normal;
  font-size: var(--body);
  color: var(--gray-dark);
  position: absolute;
  bottom: 10em;
  margin-left: 1em;
  div {
    margin: 0 1em;
  }
`;

const Icon = styled.div`
  position: relative;
  top: 0.8em;
  right: 1em;
  color: var(--blue-dark);
  cursor: pointer;
`;
