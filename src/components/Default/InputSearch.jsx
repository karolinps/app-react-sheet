import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function InputSearch(props) {
  const { placeholder, handleOnSearch, handleOnSelect, data } = props;

  return (
    <Wrapper>
      <ReactSearchAutocomplete
        items={data}
        fuseOptions={{ keys: ["titulo_proy", "desc"] }} // Search on both fields
        resultStringKeyName="titulo_proy" // String to display in the results
        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        autoFocus
        placeholder={placeholder}
        styling={{
          height: "40px",
          border: "none",
          boxShadow: "none",
          backgroundColor: "white",
          hoverBackgroundColor: "var(--gray-medium)",
          color: "var(--gray-dark)",
          borderRadius: "5px",
        }}
      />
    </Wrapper>
  );
}
InputSearch.propTypes = {
  placeholder: PropTypes.string,
  handleOnSelect: PropTypes.func,
  handleOnSearch: PropTypes.func,
  data: PropTypes.array,
};

export default InputSearch;

const Wrapper = styled.div`
  margin-right: 1.2em;
  width: 300px;
  svg {
    position: absolute;
    right: 9px;
  }

  input {
    height: 40px;
    border: none;
    background: var(--gray-low);
    outline: none;
    border-radius: 5px;
    font-family: var(--font-roboto);
    font-style: normal;
    font-weight: normal;
    line-height: 23px;
    letter-spacing: 0.05em;
  }
  ul {
    .icon {
      display: none;
    }
  }
  .ellipsis {
    font-family: var(--font-opensans);
    font-size:var(--body)
  }
`;
