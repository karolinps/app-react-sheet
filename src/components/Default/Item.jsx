import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Item(props) {
  const { children, backgroundColor, width, borderRadius, height } = props;
  return (
    <ItemStyled
      style={{
        background: backgroundColor ? backgroundColor : "",
        width: width ? `${width}%` : "auto",
        height: height ? `${height}px` : "65px",
        borderRadius: borderRadius ? borderRadius : "auto",
      }}
    >
      {children}
    </ItemStyled>
  );
}

Item.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.any,
  width: PropTypes.string,
  borderRadius: PropTypes.number,
  height: PropTypes.number,
};

export default Item;

const ItemStyled = styled.div`
  background: var(--gray-low);
`;
