import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Layout from "../components/Layout/Layout";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const userStorage = localStorage.getItem("user");

  return (
    <Route
      {...rest}
      render={(props) =>
        userStorage ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.object,
};

export default ProtectedRoute;
