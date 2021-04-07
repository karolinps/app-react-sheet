import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import routes from "./routes";
import ProtectedRoute from "./utils/ProtectedRoute";
import AuthProvider from "./context/auth/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          {routes.map((el) => {
            return (
              <ProtectedRoute
                path={el.path}
                component={el.component}
                key={el.key}
                exact
              />
            );
          })}
          <Route path="/login" component={Login} />
          <Route path="/" component={NotFound} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
