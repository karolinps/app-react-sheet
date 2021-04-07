import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Button(props) {
  const { title, background, onClick } = props;
  return (
    <ButtonStyled style={{ backgroundColor: background }} onClick={onClick}>
      {title}
    </ButtonStyled>
  );
}
Button.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

const ButtonStyled = styled.button`
  height: 50px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-family: var(--font-roboto);
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  padding: 0 1.2em;
  margin: 0 0.2em;
  outline: none;
  cursor: pointer;
`;
