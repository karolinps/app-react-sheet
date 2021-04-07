import React, { useState, useContext } from "react";
import { Row, Col, message } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Img from "../../assets/images/img-login.svg";

import AuthContext from "../../context/auth/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loginBySocial } = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      history.push("/dashboard");
    } catch (error) {
      message.warning(error.message);
    }
  };

  const handleLoginBySocial = async () => {
    try {
      await loginBySocial();
      history.push("/dashboard");
    } catch (error) {
      message.warning(error.message);
    }
  };

  return (
    <Wrapper>
      <Row>
        <Col sm={0} lg={12} xs={0}>
          <ImgStyled>
            <img src={Img} />
          </ImgStyled>
        </Col>
        <Col sm={24} lg={12} xs={24}>
          <LoginFormStyled>
            <form onSubmit={handleLogin}>
              <h1 className="title">Bienvenido</h1>
              <input
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type={"submit"}>Acceder</button>
              <button onClick={handleLoginBySocial} type={"button"}>
                Acceder por Gmail
              </button>
              <p>
                ¿Olvido la contraseña? Tome contacto con alguien del equipo o en
                &nbsp;
                <span>exop@aerosan.com</span>
              </p>
            </form>
          </LoginFormStyled>
          <h2>Area de Excelencia Operacional</h2>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  background: var(--gray-low);
  .title {
    color: var(--blue-dark);
    font-family: var(--font-opensans);
    text-align: center;
    font-weight: 700;
    font-size: 50px;
    margin: 0;
  }

  h2 {
    font-family: var(--font-opensans);
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    color: var(--blue-dark);
    text-align: center;

    @media (min-width: 992px) {
      position: absolute;
      bottom: 20px;
      left: 0;
      right: 0;
    }
  }
`;

const ImgStyled = styled.div`
  img {
    height: 100vh;
  }
`;

const LoginFormStyled = styled.div`
  display: grid;
  justify-content: center;
  margin: 2em 1em;
  @media (min-width: 992px) {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
  }

  input {
    width: 360px;
    height: 52px;
    left: 879px;
    top: 387px;
    background: #fff;
    border-radius: 5px;
    margin: 0.8em 0;
    border: none;
    outline: none;
    width: 100%;
    padding: 0 1em;
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
    width: 100%;
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
`;
