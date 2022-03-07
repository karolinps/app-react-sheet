import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/authDucks";
import initiativeReducer from "./initiative/initiativeDucks";
import observationReducer from "./observation/observationDucks";

const rootReducer = combineReducers({
  user: authReducer,
  initiative: initiativeReducer,
  observation: observationReducer,
});

export default function generateStore() {
  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
  return store;
}
