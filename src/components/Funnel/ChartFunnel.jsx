import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Item from "../Default/Item";

export default function ChartFunnel(props) {
  const { data } = props;

  return (
    <>
      <TitleStyled>Embudo de gestión</TitleStyled>
      <Wrapper>
        {data.map((el, i) => {
          return (
            <Container key={i}>
              <Item width={el.percentage} backgroundColor={"#E5E5E5"}>
                <Row>
                  <Left>
                    <h1>{el.number}</h1>
                    <span>{el.counter} MUSD</span>
                  </Left>

                  <Right>
                    <p className="counter">L {i + 1}</p>
                    <p>{el.description}</p>
                  </Right>
                </Row>
              </Item>
            </Container>
          );
        })}
      </Wrapper>
    </>
  );
}
ChartFunnel.propTypes = {
  data: PropTypes.array,
};

const Wrapper = styled.div`
  width: 46vw;
  @media (min-width: 768px) {
    top: 3em;
    bottom: 0em;
    overflow: hidden;
    left: 0em;
    right: 0em;
    position: absolute;
  }
  :hover {
    overflow-y: auto;
  }
`;
const TitleStyled = styled.h2`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: var(--blue-dark);
`;

const Container = styled.div`
  margin-bottom: 2em;
  display: flex;
  justify-content: flex-end;
  height: 72px;
  h1 {
    font-family: var(--font-opensans);
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 1.2em;
    color: var(--blue-dark);
    margin-bottom: 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2em;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  span {
    font-family: var(--font-opensans);
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: var(--blue-dark);
    position: relative;
    left: 1.2em;
  }
`;

const Right = styled.div`
  p {
    font-family: var(--font-opensans);
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    text-align: right;
    color: var(--blue-dark);
    margin-bottom: 0;
  }
  .counter {
    font-weight: bold;
    font-size: 20px;
  }
`;
