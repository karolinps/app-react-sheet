import React from "react";
import { Drawer } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";


function DrawerComponent(props) {
  const { children, onClose, visible, title } = props;

  return (
    <>
      <Drawer
        title={<TitleStyled>{title}</TitleStyled>}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={400}
      >
        {children}
      </Drawer>
    </>
  );
}

DrawerComponent.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
};
export default DrawerComponent;
const TitleStyled = styled.h1`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: var(--title);
  line-height: 41px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: var(--blue-dark);
`;
