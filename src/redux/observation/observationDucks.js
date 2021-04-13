const dataInitial = {
  data: [],
};

const GET_ALL_DATA = "GET_ALL_DATA";
const FILTER_BY_RISKS = "FILTER_BY_RISKS";
const FILTER_BY_MILESTONE = "FILTER_BY_MILESTONE";
const FILTER_BY_PROBLEM = "FILTER_BY_PROBLEM";

//Reducers
export default function observationReducer(state = dataInitial, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_DATA:
      return {
        ...state,
        data: payload,
      };

    case FILTER_BY_RISKS: {
      const filterRisks = payload.filter((el) => el.type === "riesgo");
      return {
        ...state,
        data: filterRisks,
      };
    }

    case FILTER_BY_MILESTONE: {
      const filterMilestone = payload.filter((el) => el.type === "hito");
      return {
        ...state,
        data: filterMilestone,
      };
    }

    case FILTER_BY_PROBLEM: {
      const filterProblem = payload.filter((el) => el.type === "problema");
      return {
        ...state,
        data: filterProblem,
      };
    }

    default:
      return { ...state };
  }
}

export const getAllObservations = (data) => (dispatch) => {
  dispatch({
    type: GET_ALL_DATA,
    payload: data,
  });
};
export const filterTypeByMilestone = (data) => (dispatch) => {
  dispatch({
    type: FILTER_BY_MILESTONE,
    payload: data,
  });
};

export const filterTypeByProblem = (data) => (dispatch) => {
  dispatch({
    type: FILTER_BY_PROBLEM,
    payload: data,
  });
};

export const filterTypeByRisks = (data) => (dispatch) => {
  dispatch({
    type: FILTER_BY_RISKS,
    payload: data,
  });
};
