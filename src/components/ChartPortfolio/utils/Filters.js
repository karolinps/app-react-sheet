import React, { useState } from "react";
import PropTypes from "prop-types";

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
    color: "#FFF",
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

  return (
    <div
      style={{
        width: 150,
        height: "100%",
        paddingTop: "25px 0",
        margin: "8em 0",
      }}
    >
      <div>
        {types.map((type) => (
          <div
            key={type.id}
            style={{ backgroundColor: type.color, ...styleBase(type) }}
            onClick={() => updateActiv(type)}
          >
            {type.name}
          </div>
        ))}
      </div>
    </div>
  );
};

Filters.propTypes = {
  getFilter: PropTypes.any,
};
export default Filters;
