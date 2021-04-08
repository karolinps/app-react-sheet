import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import Button from "./Button";
import Filter from "../Filter/Filter";
import InputSearch from "../Default/InputSearch";

import { firebase } from "../../firebase/firebase";

function Header(props) {
  const {
    title,
    icon,
    btnLogout,
    btnNewItem,
    btnFilter,
    inputSearch,
    placeholder,
    titleBtnNewItem,
  } = props;
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const logout = async () => {
    await firebase.auth().signOut();
    history.push("/login");
  };

  const drawerFilter = <Filter visible={visible} onClose={onClose} />;

  const isBtnNewItem = btnNewItem ? (
    <Button title={titleBtnNewItem} background="var(--blue-medium)" />
  ) : null;

  const isBtnFilter = btnFilter ? (
    <Button title="Filtro" background="var(--turquoise)" onClick={showDrawer} />
  ) : null;

  const isBtnLogout = btnLogout ? (
    <Button title="Salir" background="var(--danger)" onClick={logout} />
  ) : null;

  const isInputSearch = inputSearch ? (
    <InputSearch placeholder={placeholder} />
  ) : null;

  return (
    <Wrapper>
      {drawerFilter}
      <LeftRightCol>
        {icon ? (
          <>
            <CardStyled>
              <Img src={icon} />
            </CardStyled>
            <TitleStyled>{title}</TitleStyled>
          </>
        ) : null}
      </LeftRightCol>
      <LeftRightCol>
        {isInputSearch}
        {isBtnNewItem}
        {isBtnFilter}
        {isBtnLogout}
      </LeftRightCol>
    </Wrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  titleBtnNewItem: PropTypes.string,
  icon: PropTypes.any,
  btnLogout: PropTypes.any,
  btnNewItem: PropTypes.any,
  btnFilter: PropTypes.any,
  inputSearch: PropTypes.any,
};
export default Header;

const Wrapper = styled.div`
  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
  }
`;
const TitleStyled = styled.h1`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: var(--title);
  letter-spacing: 0.05em;
  color: var(--blue-dark);
  margin-bottom: 0px;
  position: relative;
  left: 0.5em;
  top: 0.25em;
`;
const CardStyled = styled.div`
  width: 50px;
  height: 50px;
  background: var(--gray-low);
  position: relative;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const LeftRightCol = styled.div`
  display: flex;
`;
