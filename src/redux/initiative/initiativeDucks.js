import moment from "moment";

const dataInitial = {
  data: [],
  dataByInitiative: {},
  dataByStatus: { counter: "", data: [], label: "", musd: "", percentage: "" },
  filterCountry: "",
  filterArea: "",
};

//Actions
const GET_DATA = "GET_DATA";
const GET_DATA_BY_STATUS = "GET_DATA_BY_STATUS";
const GET_BY_INITIATIVE = "GET_BY_INITIATIVE";
const CLEAR_FILTER_ALL = "CLEAR_FILTER_ALL";
const FILTER_BY_FIRST_TRIMESTER = "FILTER_BY_FIRST_TRIMESTER";
const FILTER_BY_SECOND_TRIMESTER = "FILTER_BY_SECOND_TRIMESTER";
const FILTER_BY_THIRD_TRIMESTER = "FILTER_BY_THIRD_TRIMESTER";
const FILTER_BY_FOURTH_TRIMESTER = "FILTER_BY_FOURTH_TRIMESTER";
const FILTER_BY_COUNTRY = "FILTER_BY_COUNTRY";
const FILTER_BY_AREA = "FILTER_BY_AREA";

//Reducers
export default function initiativeReducer(state = dataInitial, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return { ...state, data: payload };
    case GET_DATA_BY_STATUS:
      return { ...state, dataByStatus: payload };
    case GET_BY_INITIATIVE:
      return { ...state, dataByInitiative: payload };
    case CLEAR_FILTER_ALL:
      return {
        ...state,
        dataByStatus: {
          data: [],
        },
      };
    case FILTER_BY_FIRST_TRIMESTER: {
      const data = payload.filter(
        (el) => moment(el.fecha_inicio_implementacion).quarter() === 1
      );
      return {
        ...state,
        dataByStatus: {
          data: data,
        },
      };
    }
    case FILTER_BY_SECOND_TRIMESTER: {
      const data = payload.filter(
        (el) => moment(el.fecha_inicio_implementacion).quarter() === 2
      );
      return {
        ...state,
        dataByStatus: {
          data: data,
        },
      };
    }
    case FILTER_BY_THIRD_TRIMESTER: {
      const data = payload.filter(
        (el) => moment(el.fecha_inicio_implementacion).quarter() === 3
      );
      return {
        ...state,
        dataByStatus: {
          data: data,
        },
      };
    }
    case FILTER_BY_FOURTH_TRIMESTER: {
      const data = payload.filter(
        (el) => moment(el.fecha_inicio_implementacion).quarter() === 4
      );
      return {
        ...state,
        dataByStatus: {
          data: data,
        },
      };
    }
    case FILTER_BY_COUNTRY: {
      const filterCountry = state.data.filter((el) =>
        el.pais.toLowerCase().includes(payload.toLowerCase())
      );
      return { ...state, data: filterCountry };
    }
    case FILTER_BY_AREA: {
      const filterArea = state.data.filter((el) =>
        el.area.toLowerCase().includes(payload.toLowerCase())
      );

      return { ...state, data: filterArea };
    }
    default:
      return { ...state };
  }
}

export const getAllData = (data) => (dispatch) => {
  dispatch({ type: GET_DATA, payload: data });
};

export const getDataByStatus = (dataByStatus) => (dispatch) => {
  dispatch({ type: GET_DATA_BY_STATUS, payload: dataByStatus });
};

export const getByIniatitive = (dataByInitiative) => (dispatch) => {
  dispatch({ type: GET_BY_INITIATIVE, payload: dataByInitiative });
};

export const clearFilterAll = () => (dispatch) => {
  dispatch({ type: CLEAR_FILTER_ALL, payload: [] });
};

export const filterByFirstTrimester = (dataFilterByT1) => (dispatch) => {
  dispatch({ type: FILTER_BY_FIRST_TRIMESTER, payload: dataFilterByT1 });
};

export const filterBySecondTrimester = (dataFilter) => (dispatch) => {
  dispatch({ type: FILTER_BY_SECOND_TRIMESTER, payload: dataFilter });
};

export const filterByThirdTrimester = (dataFilter) => (dispatch) => {
  dispatch({ type: FILTER_BY_THIRD_TRIMESTER, payload: dataFilter });
};

export const filterByFourthTrimester = (dataFilterByT4) => (dispatch) => {
  dispatch({ type: FILTER_BY_FOURTH_TRIMESTER, payload: dataFilterByT4 });
};

export const filterByCountry = (dataByCountry) => (dispatch) => {
  dispatch({ type: FILTER_BY_COUNTRY, payload: dataByCountry });
};

export const filterByArea = (dataByArea) => (dispatch) => {
  dispatch({ type: FILTER_BY_AREA, payload: dataByArea });
};
