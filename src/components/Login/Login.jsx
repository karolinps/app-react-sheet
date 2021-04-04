import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

function Login() {
  return (
    <Wrapper>
      <Row>
        <Col sm={10} lg={12} xs={0}>
          <div className="image-left"></div>
        </Col>
        <Col sm={14} lg={12} xs={24}>
          <div className="login-form">
            <h1 className="title">Bienvenido</h1>
            <input placeholder="Correo electrónico" />
            <input placeholder="Contraseña" />
            <button>Acceder</button>
            <p>
              ¿Olvido la contraseña? Tome contacto con alguien del equipo o en
              &nbsp;
              <span>exop@aerosan.com</span>
            </p>
          </div>
          <h2>Area de Excelencia Operacional</h2>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  background: #f3f3f3;
  height: 100vh;

  .image-left {
    background: var(--blue-dark);
    height: 100vh;
  }
  .title {
    color: var(--blue-dark);
    font-family: var(--font-opensans);
    text-align: center;
    font-weight: 700;
    font-size: 50px;
    margin: 0;
  }
  .login-form {
    display: grid;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 0px;
    input {
      width: 360px;
      height: 52px;
      left: 879px;
      top: 387px;
      background: #fff;
      border-radius: 5px;
      margin: 0.8em 0;
      border: none;
    }
    button {
      background: var(--blue-medium);
      border-radius: 5px;
      height: 52px;
      color: #fff;
      border: none;
      font-size: 20px;
      font-family: var(--font-roboto);
      margin: 0.8em 0;
      cursor: pointer;
      outline: none;
    }
    p {
      text-align: center;
      font-family: var(--font-opensas);
      font-size: 15px;
      font-weight: 400;
      color: var(--blue-dark);
    }
    span {
      font-weight: 600;
    }
  }
  h2 {
    font-family: var(--font-opensans);
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    color: var(--blue-dark);
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
  }
`;
