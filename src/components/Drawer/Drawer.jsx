import React from "react";
import { Drawer } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../Default/Button";

function DrawerComponent(props) {
  const {
    children,
    onClose,
    visible,
    title,
    titleButton,
    titleButtonRight,
    handleAction,
  } = props;

  return (
    <>
      <Drawer
        title={<TitleStyled>{title}</TitleStyled>}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={400}
        footer={
          <FooterButton>
            <Button
              title={titleButton}
              background="var(--blue-medium)"
              onClick={handleAction}
            />
            {titleButtonRight && (
              <Button title={titleButtonRight} background="var(--danger)" />
            )}
          </FooterButton>
        }
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
  titleButton: PropTypes.string,
  titleButtonRight: PropTypes.string,
  handleAction: PropTypes.func,
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
  margin-bottom: 0px;
`;

const FooterButton = styled.div`
  display: flex;
  justify-content: center;
  // position: absolute;
  // right: 18px;
  // left: 18px;
  // margin: auto;
  // bottom: 18px;
  text-align: center;
  button {
    width: 100%;
    display: grid;
  }
`;
