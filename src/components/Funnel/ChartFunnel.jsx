import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Item from "../Default/Item";
import { showAllInitiatives } from "../../redux/project/projectDucks";

export default function ChartFunnel(props) {
  const { data } = props;
  const dispatch = useDispatch();

  return (
    <>
      <TitleStyled>Embudo de gestión</TitleStyled>
      <Wrapper>
        {data.map((el, i) => {
          return (
            <Container key={i} onClick={() => dispatch(showAllInitiatives(el))}>
              <Item width={el.percentage} backgroundColor={"#E5E5E5"}>
                <Row>
                  <Left>
                    <h1>{el.counter}</h1>
                    <span>{el.musd} MSUD</span>
                  </Left>

                  <Right>
                    <p className="counter">L {i}</p>
                    <p>{el.label}</p>
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
  // width: 47vw;
  // @media (min-width: 768px) {
  //   top: 3em;
  //   bottom: 0em;
  //   overflow: hidden;
  //   left: 0em;
  //   right: 0em;
  //   position: absolute;
  // }
  // :hover {
  //   overflow-y: auto;
  // }
`;
const TitleStyled = styled.h2`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: 1.3em;
  line-height: 27px;
  color: var(--blue-dark);
`;

const Container = styled.div`
  margin-bottom: 2em;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  h1 {
    font-family: var(--font-opensans);
    font-style: normal;
    font-weight: bold;
    font-size: var(--body-big);
    color: var(--blue-dark);
    margin-bottom: 0;
    position: relative;
    top: 0.25em;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1em;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  span {
    font-family: var(--font-opensans);
    font-style: normal;
    font-weight: normal;
    font-size: var(--body);
    color: var(--blue-dark);
    position: relative;
    left: 1em;
  }
`;

const Right = styled.div`
  p {
    font-family: var(--font-opensans);
    font-style: normal;
    font-weight: normal;
    font-size: var(--body);
    text-align: right;
    color: var(--blue-dark);
    margin-bottom: 0;
  }
  .counter {
    font-weight: bold;
    font-size: var(--subtitle);
  }
`;
