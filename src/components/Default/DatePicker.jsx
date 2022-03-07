import React from "react";
import styled from "styled-components";
import { DatePicker, Space } from "antd";
import PropTypes from "prop-types";

function DatePickerComponet(props) {
  const { onChangeDate, placeholder } = props;

  return (
    <Wrapper>
      <Space direction="vertical">
        <DatePicker
          bordered={false}
          allowClear={true}
          placeholder={placeholder}
          onChange={onChangeDate}
        />
      </Space>
    </Wrapper>
  );
}

DatePickerComponet.propTypes = {
  onChangeDate: PropTypes.func,
  placeholder: PropTypes.string,
};
export default DatePickerComponet;

const Wrapper = styled.div`
  .ant-space-vertical {
    background: var(--gray-low);
    width: 100%;
    height: 50px;
    border-radius: 5px;
  }
  .ant-picker.ant-picker-borderless {
    width: 100%;
    margin: 0.5em 0px;
  }
  .ant-picker-input > input {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: var(--subtitle);
    line-height: 23px;
    letter-spacing: 0.05em;
  }
  .ant-picker-input > input::placeholder {
    color: #8a8a8a;
  }
  .ant-select-selection__placeholder {
    color: blue;
  }
`;
