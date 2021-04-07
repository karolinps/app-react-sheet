import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import PropTypes from "prop-types";
import AuthContext from "./AuthContext";
import { firebase, providerGoogle } from "../../firebase/firebase";

function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const loginBySocial = () => {
    return firebase.auth().signInWithPopup(providerGoogle);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, loginBySocial }}>
      {!loading ? (
        props.children
      ) : (
        <div style={{ position: "fixed", top: "50%", left: "50%" }}>
          <Spin />
        </div>
      )}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
