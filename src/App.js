import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Spin } from "antd";

import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";

import routes from "./routes";
import ProtectedRoute from "./utils/ProtectedRoute";

import { firebase } from "./firebase/firebase";

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    const fetchUser = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setFirebaseUser(user);
        } else {
          setFirebaseUser(null);
        }
      });
    };
    fetchUser();
  }, []);

  return firebaseUser !== false ? (
    <BrowserRouter>
      <Switch>
        {routes.map((el) => {
          return (
            <ProtectedRoute
              path={el.path}
              component={el.component}
              key={el.key}
              exact
              firebaseUser={firebaseUser}
            />
          );
        })}
        <Route path="/login" component={Login} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  ) : (
    <div style={{ position: "fixed", top: "50%", left: "50%" }}>
      <Spin />
    </div>
  );
}

export default App;
