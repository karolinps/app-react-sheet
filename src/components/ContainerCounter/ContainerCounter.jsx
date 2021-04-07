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
              <Item>{el.counter}</Item>
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
  display: flex;
  flex-wrap: wrap;
`;
const Col = styled.div`
  flex: 1 0 18%;
  margin: 5px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 68px;
  text-align: center;
  color: var(--blue-dark);
`;
const TitleStyled = styled.h1`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: var(--blue-dark);
  text-align: left;
`;
