import React from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";

const { Content } = Layout;

function LayoutComponent(props) {
  return (
    <Layout>
      <Content
        style={{
          padding: "20px 30px",
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
