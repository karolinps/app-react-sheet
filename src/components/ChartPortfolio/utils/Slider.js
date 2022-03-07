/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Slider as SliderAnd } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";
import iconSlider from "../../../assets/images/icoSlider.svg";

const Slider = ({ yearsCreateAt, getSelectedYear }) => {
  const [yaearsList, setYearList] = useState([]);
  const [selected, setSelected] = useState([]);
  const max = Math.max(...yaearsList);
  const min = Math.min(...yaearsList);

  useEffect(() => {
    setYearList(yearsCreateAt);
    setSelected(max);
  }, [JSON.stringify(yearsCreateAt)]);

  const onChange = (selected) => {
    setSelected(selected);
    getSelectedYear(selected);
  };

  return (
    <Wrapper>
      <SliderAnd
        defaultValue={max}
        value={selected}
        onChange={onChange}
        step={1}
        min={min}
        max={max}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {yaearsList.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </Wrapper>
  );
};

Slider.propTypes = {
  yearsCreateAt: PropTypes.any,
  getSelectedYear: PropTypes.any,
};
export default Slider;

const Wrapper = styled.div`
  width: calc(100% - 60px);
  float: right;
  height: 55px;

  .ant-slider-handle {
    background-color: rgba(0, 0, 0, 0);
    border: solid 2px rgba(0, 0, 0, 0);
    background-image: url(${iconSlider});
    background-repeat: no-repeat;
    background-size: cover;
    width: 11px;
    height: 23px;
    margin-top: -10px;
  }
  .ant-slider-handle:hover {
    box-shadow: none;
  }
  .ant-slider-handle:focus {
    box-shadow: none;
  }
  .ant-slider-track {
    background-color: #707070;
    height: 5px;
  }
  .ant-slider:hover .ant-slider-track {
    background-color: #707070;
  }
  .ant-slider-rail {
    background-color: #e1e1e1;
  }
`;

