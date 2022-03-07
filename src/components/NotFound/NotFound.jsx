import React from "react";
import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import Img from "../../assets/images/img-login.svg";
import styled from "styled-components";

function NotFound() {
  const history = useHistory();

  const back = () => {
    if (localStorage.getItem("user")) {
      history.push("/dashboard");
    } else {
      history.push("/login");
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
          <ContainerStyled>
            <TitleStyled>Excelencia Operacional</TitleStyled>
            <Button type={"button"} onClick={back}>
              {localStorage.getItem("user") ? "Dashboard" : "Login"}
            </Button>
          </ContainerStyled>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default NotFound;
const Wrapper = styled.div`
  background: var(--gray-low);
`;

const TitleStyled = styled.h1`
  color: var(--blue-dark);
  font-family: var(--font-opensans);
  text-align: center;
  font-weight: bold;
  font-size: var(--title-big);
  margin-bottom: 0.5em;
  letter-spacing: 0.05em;
`;
const ImgStyled = styled.div`
  img {
    height: 100vh;
  }
`;

const ContainerStyled = styled.div`
  @media (min-width: 992px) {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
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
