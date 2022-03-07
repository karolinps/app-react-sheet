import { data } from "../../json/project";

const dataInitial = {
  data: data,
};

//Actions
const GET_DATA = "GET_DATA";
const GET_DATA_BY_PROJECT = "GET_DATA_BY_PROJECT";

//Reducers
export default function funnelReducer(state = dataInitial, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA:
      return { ...state, data: payload };
    case GET_DATA_BY_PROJECT:
      return { ...state, dataByProject: payload };
    default:
      return { ...state };
  }
}

export const getAllData = () => (dispatch) => {
  dispatch({ type: GET_DATA, payload: "" });
};

export const showAllInitiatives = (dataByProject) => (dispatch) => {
  dispatch({ type: GET_DATA_BY_PROJECT, payload: dataByProject });
};
