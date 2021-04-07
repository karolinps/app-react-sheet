import React from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";

const { Content } = Layout;

function LayoutComponent(props) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Content
        style={{
          position: "absolute",
          top: 20,
          bottom: 20,
          left: 20,
          right: 20,
        }}
      >
        {props.children}
      </Content>
    </Layout>
  );
}
LayoutComponent.propTypes = {
  history: PropTypes.object,
  children: PropTypes.node,
};
export default LayoutComponent;
