/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

const Strategy = ({ getStrategy }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    getStrategy(count);
  }, []);

  const formStrategy = (numb) => {
    let strategy = 0;
    switch (numb) {
      case 3:
        strategy = 3 - 1;
        break;
      case 5:
        strategy = 6 - 1;
        break;
      case 7:
        strategy = 9 - 1;
        break;
      default:
        break;
    }
    getStrategy(strategy);
  };

  const upCount = (value) => {
    if (value <= 5) {
      setCount(value + 2);
      formStrategy(value + 2);
    }
  };
  const downCount = (value) => {
    if (value >= 5) {
      setCount(value - 2);
      formStrategy(value - 2);
    }
  };

  return (
    <Wrapper
      style={{
        marginBottom: 32,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          fontWeight: "500",
        }}
      >
        <div>ESTRATEGIA A</div>
        <div style={{ marginLeft: 16, marginRight: 8, color: "#32C77F" }}>
          {count}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -10,
          }}
        >
          <Button
            onClick={() => upCount(count)}
            type="text"
            icon={<UpOutlined style={{ fontSize: 10, color: "#32C77F" }} />}
            size="small"
          />
          <Button
            onClick={() => downCount(count)}
            type="text"
            icon={<DownOutlined style={{ fontSize: 10, color: "#32C77F" }} />}
            size="small"
          />
        </div>
        <div style={{ marginLeft: 8 }}>AÑOS</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-btn-icon-only.ant-btn-sm {
    width: 15px;
    height: 15px;
  }
`;
Strategy.propTypes = {
  getStrategy: PropTypes.any,
};
export default Strategy;
