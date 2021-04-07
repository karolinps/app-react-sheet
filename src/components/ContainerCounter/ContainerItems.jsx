import React from "react";
import styled from "styled-components";
import Item from "../Default/Item";
import PropTypes from "prop-types";

function ContainerItems(props) {
  const { data } = props;
  return (
    <Wrapper>
      <Row>
        {data.map((el, i) => {
          return (
            <Col key={i} style={{ gridColumn: i === 0 ? "1/3" : "0" }}>
              <TitleStyled>{el.title}</TitleStyled>
              <Item>
                <BodyStyled>{el.body}</BodyStyled>
              </Item>
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
}

ContainerItems.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ContainerItems;

const Wrapper = styled.div`
  margin: 1.5em 0;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 100px;
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Col = styled.div`
  margin: 5px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
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

const BodyStyled = styled.p`
  padding: 20px 15px;
  margin: auto;
`;
