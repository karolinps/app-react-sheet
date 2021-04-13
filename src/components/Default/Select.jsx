import React from "react";
import Select from "react-select";
import styled from "styled-components";
import PropTypes from "prop-types";

function SelectComponent(props) {
  const {
    options,
    placeholder,
    useRef,
    handleChange,
    getValue,
    getLabel,
  } = props;

  return (
    <Wrapper>
      <Select
        onChange={handleChange}
        options={options}
        className="select-customer"
        autoFocus={false}
        placeholder={placeholder}
        isSearchable={false}
        getOptionLabel={getLabel}
        getOptionValue={getValue}
        ref={useRef}
      />
    </Wrapper>
  );
}

SelectComponent.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  useRef: PropTypes.any,
  handleChange: PropTypes.func,
  getLabel: PropTypes.func,
  getValue: PropTypes.func,
};
export default SelectComponent;

const Wrapper = styled.div`
  .select-customer {
    margin-bottom: 1em;
  }
  .css-yk16xz-control,
  .css-1pahdxg-control:hover,
  .css-1pahdxg-control,
  .css-1pahdxg-control:focus {
    border: none;
    box-shadow: none;
    background: var(--gray-low);
    border-radius: 5px;
    height: 50px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: var(--subtitle);
    line-height: 23px;
    letter-spacing: 0.05em;
    color: #8a8a8a;
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
  .css-9gakcf-option {
    background: rgba(0, 96, 217, 0.2);
    border-radius: 5px;
    font-family: var(--font-roboto);
    font-style: normal;
    font-weight: normal;
    font-size: var(--body);
    letter-spacing: 0.5px;
    color: black;
  }
  .css-1n7v3ny-option {
    background: var(--gray-low);
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    letter-spacing: 0.5px;
  }

  .css-26l3qy-menu {
    box-shadow: none;
  }
`;
