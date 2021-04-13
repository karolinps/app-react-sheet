import React from "react";
import styled from "styled-components";
import Button from "../Default/Button";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function FilterComponent(props) {
  const { clear, filterByT1, filterByT2, filterByT3, filterByT4 } = props;
  const dataByStatus = useSelector((store) => store.initiative.dataByStatus);

  return (
    <>
      <Filter>
        {dataByStatus.data.length > 0 ? (
          <Button
            title={"Limpiar"}
            background={"var(--turquoise)"}
            onClick={clear}
          />
        ) : null}

        <ItemFilter onClick={filterByT1}>T1</ItemFilter>
        <ItemFilter onClick={filterByT2}>T2</ItemFilter>
        <ItemFilter onClick={filterByT3}>T3</ItemFilter>
        <ItemFilter onClick={filterByT4}>T4</ItemFilter>
      </Filter>
    </>
  );
}
FilterComponent.propTypes = {
  clear: PropTypes.func,
  filterByT1: PropTypes.func,
  filterByT2: PropTypes.func,
  filterByT3: PropTypes.func,
  filterByT4: PropTypes.func,
};

export default FilterComponent;
const Filter = styled.div`
  display: flex;
  align-items: center;
  button {
    height: 22px;
    font-size: var(--body);
    cursor: pointer;
  }
`;
const ItemFilter = styled.div`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: normal;
  font-size: var(--body);
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: var(--blue-dark);
  margin: 0 0.5em;
  cursor: pointer;
`;
