import React, { useState } from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const types = [
  { id: 1, name: "Tecnología", color: "rgba(49, 125, 222, 0.8)" },
  { id: 2, name: "Crecimiento", color: "rgba(49, 125, 222, 0.8)" },
  { id: 3, name: "Diferencición", color: "rgba(49, 125, 222, 0.8)" },
];

const Filters = ({ getFilter }) => {
  const [active, setActive] = useState({ id: 0, name: "" });

  const styleBase = (type) => ({
    height: 26,
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    padding: "0px 8px",
    color: "var(--blue-dark)",
    fontWeight: type.id === active.id ? "bold" : "normal",
    cursor: "pointer",
    userSelect: "none",
  });

  const updateActiv = (type) => {
    if (active.id !== type.id) {
      setActive(type);
      getFilter(type);
    } else {
      setActive({ id: 0, name: "" });
      getFilter({ id: 0, name: "" });
    }
  };

  const menu = (
    <Menu>
      {types.map((type) => (
        <Menu.Item
          key={type.id}
          style={{ ...styleBase(type) }}
          onClick={() => updateActiv(type)}
        >
          {type.name}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
        <TitleLinkStyled
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          Filtros <DownOutlined />
        </TitleLinkStyled>
      </Dropdown>
    </>
  );
};

Filters.propTypes = {
  getFilter: PropTypes.any,
};
export default Filters;

const TitleLinkStyled = styled.a`
  :hover {
    color: var(--blue-dark);
  }
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: normal;
  font-size: var(--body);
  color: var(--blue-dark);
`;
