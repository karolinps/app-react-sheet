import React from "react";
import styled from "styled-components";
import Item from "../Default/Item";
import PropTypes from "prop-types";

function ContainerCounter(props) {
  const { data } = props;
  return (
    <Wrapper>
      <Row>
        {data.map((el, i) => {
          return (
            <Col key={i} xl={4}>
              <TitleStyled>{el.title}</TitleStyled>
              <Item>
                <BodyStyled>{el.counter}</BodyStyled>
              </Item>
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
}

ContainerCounter.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ContainerCounter;

const Wrapper = styled.div`
  margin: 1.5em 0;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 747px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Col = styled.div`
  margin: 5px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  line-height: 68px;
  text-align: center;
  color: var(--blue-dark);
`;
const TitleStyled = styled.h1`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: var(--subtitle);
  line-height: 27px;
  color: var(--blue-dark);
  text-align: left;
  @media screen and (min-width: 747px) and (max-width: 1195px) {
    height: 40%;
  }
`;
const BodyStyled = styled.p`
  font-size: var(--body-big);
`;
