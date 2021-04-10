import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/authDucks";
import projectReducer from "./project/projectDucks";
import initiativeReducer from "./initiative/initiativeDucks";

const rootReducer = combineReducers({
  user: authReducer,
  project: projectReducer,
  initiative: initiativeReducer,
});

export default function generateStore() {
  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
  return store;
}
