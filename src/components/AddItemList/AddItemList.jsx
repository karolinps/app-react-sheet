import React, { useState } from "react";
import styled from "styled-components";
import Item from "../Default/Item";
import { Input } from "antd";

function AddItemList() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([
    {
      description:
        "Aqui ingreso una observación al respectivo id del problema en la la hoja proyecto-observación",
      date: "22/10/2021",
    },
  ]);
  const handleConfirm = () => {
    const dataNew = [
      {
        date: "22/10/2021",
        description: value,
      },
    ];
    setData(data.concat(dataNew));
    setValue("");
  };
  return (
    <Wrapper>
      <Container>
        {data.map((el, i) => {
          return (
            <div style={{ marginBottom: "1em", position: "relative" }} key={i}>
              <Item
                backgroundColor={"var(--gray-medium)"}
                borderRadius={5}
                height={90}
              >
                <BodyStyled>
                  <DateStyled>{el.date}</DateStyled>
                  <DescriptionStyled>{el.description}</DescriptionStyled>
                </BodyStyled>
              </Item>
            </div>
          );
        })}
      </Container>
      <Filters>
        <div>Riesgo</div>
        <div>Problema</div>
        <div>hito</div>
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
  position: relative;
  margin-bottom: 1em;
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
  div {
    margin: 0 1em;
  }
`;
