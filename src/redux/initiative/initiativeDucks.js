const dataInitial = { dataByInitiative: {} };

//Actions
const GET_BY_INITIATIVE = "GET_BY_INITIATIVE";

export default function initiativeReducer(state = dataInitial, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_BY_INITIATIVE:
      return { ...state, dataByInitiative: payload };
    default:
      return { ...state };
  }
}

export const getByIniatitive = (dataByInitiative) => (dispatch) => {
  dispatch({ type: GET_BY_INITIATIVE, payload: dataByInitiative });
};
