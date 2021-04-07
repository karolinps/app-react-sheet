import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Item(props) {
  const { children, backgroundColor, width } = props;
  return (
    <ItemStyled
      style={{
        background: backgroundColor ? backgroundColor : "",
        width: width ? `${width}%` : "auto",
      }}
    >
      {children}
    </ItemStyled>
  );
}

Item.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
};

export default Item;

const ItemStyled = styled.div`
  background: var(--gray-low);
  height: 65px;
`;
