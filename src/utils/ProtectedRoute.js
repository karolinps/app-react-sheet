import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../context/auth/AuthContext";
import Layout from "../components/Layout/Layout";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
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
