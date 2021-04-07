import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Card({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;

const Wrapper = styled.div`
  background: #f3f3f3;
  height: 95%;
`;
