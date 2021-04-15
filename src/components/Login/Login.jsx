import React, { useState, useEffect } from "react";
import { message } from "antd";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import { login } from "../../redux/auth/authDucks";

function Login(props) {
  const { history } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const activo = useSelector((store) => store.user.activo);
  const loading = useSelector((store) => store.user.loading);

  useEffect(() => {
    if (activo) {
      history.push("/dashboard");
    }
  }, [activo, loading, history]);

  const handleLogin = async (e, canal) => {
    e.preventDefault();
    try {
      if (canal === "correo") {
        await dispatch(login(email, password, canal));
      } else {
        await dispatch(login(canal));
      }
    } catch (error) {
      message.warning(error.message);
    }
  };

  return (
    <Wrapper>
      <LoginFormStyled>
        <form onSubmit={(ie) => handleLogin(ie, "correo")}>
          <Title className="title">Bienvenido</Title>
          <InputStyled
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputStyled
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type={"submit"}>Acceder</Button>
          <p>
            ¿Olvido la contraseña? Tome contacto con alguien del equipo o en
            &nbsp;
            <span>exop@aerosan.com</span>
          </p>
        </form>
      </LoginFormStyled>
      <TitleFooter>Area de Excelencia Operacional</TitleFooter>
    </Wrapper>
  );
}

Login.propTypes = {
  history: PropTypes.object,
};
export default withRouter(Login);

const Wrapper = styled.div`
  background: var(--gray-low);
`;
const Title = styled.h1`
  color: var(--blue-dark);
  font-family: var(--font-opensans);
  text-align: center;
  font-weight: 700;
  font-size: 50px;
  margin: 0;
`;
const TitleFooter = styled.h1`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  color: var(--blue-dark);
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
`;
const InputStyled = styled.input`
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
`;

const Button = styled.button`
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
`;

const LoginFormStyled = styled.div`
  display: grid;
  justify-content: center;
  margin: auto;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;

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
