import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Input } from "antd";

const { Search } = Input;

function InputSearch(props) {
  const { placeholder } = props;

  return (
    <Wrapper>
      <Search placeholder={placeholder} size="large" bordered={false} />
    </Wrapper>
  );
}
InputSearch.propTypes = {
  placeholder: PropTypes.string,
};

export default InputSearch;

const Wrapper = styled.div`
  margin-right: 1.2em;
  button,
  button:focus,
  button:hover,
  .ant-input-group-addon {
    border: none;
    background: transparent;
    outline: none;
  }
  input,
  .ant-input-group {
    height: 50px;
    border: none;
    background: var(--gray-low);
    outline: none;
    border-radius: 5px;
  }
  .ant-input-group .ant-input {
    font-family: var(--font-roboto);
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.05em;
  }
`;
