import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import Header from "../Default/Header";
import { data } from "./menu";

function Menu() {
  const history = useHistory();

  return (
    <Wrapper>
      <Header btnLogout />
      <div className="block-menu">
        <div className="content-menu">
          <h1>Area de Excelencia Operacional</h1>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {data.map((el, i) => {
              return (
                <Col sm={6} xs={12} key={i}>
                  <div className="card" onClick={() => history.push(el.route)}>
                    <div>
                      {el.icon}
                      <p>{el.title}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </Wrapper>
  );
}

export default Menu;

const Wrapper = styled.div`
  @media (max-width: 575px) {
    height: auto;
  }
  .block-menu {
    position: absolute;
    top: 4em;
    bottom: 1em;
    left: 0em;
    right: 0em;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    @media (max-width: 767px) {
      position: relative;
    }
  }
  .content-menu {
    width: 75%;
  }
  h1 {
    font-family: var(--font-opensans);
    color: var(--blue-dark);
    font-style: normal;
    font-weight: bold;
    font-size: var(--title-big);
    text-align: center;
    letter-spacing: 0.05em;
    @media (min-width: 1600px) {
      margin-bottom: 1em;
    }
    @media (max-width: 575px) {
      font-size: 20px;
    }
  }
  .card {
    height: 200px;
    background: var(--gray-low);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
    text-align: center;
    cursor: pointer;
    @media (min-width: 1600px) {
      height: 300px;
    }
    p {
      font-family: var(--font-opensans);
      font-style: normal;
      font-weight: bold;
      font-size: var(--title);
      line-height: 0px;
      letter-spacing: 0.05em;
      color: var(--blue-dark);
      @media (max-width: 991px) {
        font-size: var(--body);
      }
    }
    svg {
      margin: 1.5em 0;
      width: 70%;
      @media (min-width: 1600px) {
        width: 80%;
        margin: 3.5em 0;
      }
    }
  }
`;
