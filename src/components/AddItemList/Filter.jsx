import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function FilterComponent(props) {
  const { filterByT1, filterByT2, filterByT3 } = props;

  return (
    <>
      <Filter>
        <ItemFilter onClick={filterByT1}>Hito BC</ItemFilter>
        <ItemFilter onClick={filterByT2}>Problemas</ItemFilter>
        <ItemFilter onClick={filterByT3}>Riesgos</ItemFilter>
      </Filter>
    </>
  );
}
FilterComponent.propTypes = {
  clear: PropTypes.func,
  filterByT1: PropTypes.func,
  filterByT2: PropTypes.func,
  filterByT3: PropTypes.func,
};

export default FilterComponent;
const Filter = styled.div`
  display: flex;
  align-items: center;
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
  // text-decoration-line: underline;
  color: var(--blue-dark);
  margin: 0 0.5em;
  cursor: pointer;
`;
