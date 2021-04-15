import moment from "moment";

const dataInitial = {
  data: [],
  dataByInitiative: {},
  dataByStatus: { counter: "", data: [], label: "", musd: "", percentage: "" },
  filterCountry: "",
  filterArea: "",
  filterDate: "",
  filterStatus: "",
  filterSize: "",
  filterWave: "",
  activeFilter: false,
  dataBySeasonsAndStatus: [],
};

//Actions
const GET_DATA = "GET_DATA";
const GET_DATA_BY_STATUS = "GET_DATA_BY_STATUS";
const GET_BY_INITIATIVE = "GET_BY_INITIATIVE";
const CLEAR_FILTER_ALL = "CLEAR_FILTER_ALL";
const CLEAR_FILTER_ALL_SEASONS = "CLEAR_FILTER_ALL_SEASONS";
const FILTER_BY_FIRST_TRIMESTER = "FILTER_BY_FIRST_TRIMESTER";
const FILTER_BY_SECOND_TRIMESTER = "FILTER_BY_SECOND_TRIMESTER";
const FILTER_BY_THIRD_TRIMESTER = "FILTER_BY_THIRD_TRIMESTER";
const FILTER_BY_FOURTH_TRIMESTER = "FILTER_BY_FOURTH_TRIMESTER";
const FILTER_BY_COUNTRY = "FILTER_BY_COUNTRY";
const FILTER_BY_AREA = "FILTER_BY_AREA";
const FILTER_BY_STATUS = "FILTER_BY_STATUS";
const FILTER_BY_SIZE = "FILTER_BY_SIZE";
const FILTER_BY_DATE = "FILTER_BY_DATE";
const FILTER_BY_WAVE = "FILTER_BY_WAVE";
const FILTER_BY_SEASONS_AND_STATUS = "FILTER_BY_SEASONS_AND_STATUS";

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
        (el) => moment(el.fecha_fin_compr).quarter() === 1
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
        (el) => moment(el.fecha_fin_compr).quarter() === 2
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
        (el) => moment(el.fecha_fin_compr).quarter() === 3
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
        (el) => moment(el.fecha_fin_compr).quarter() === 4
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
        el.pais.includes(payload)
      );

      return {
        ...state,
        data: payload.dataByCountry === "" ? state.data : filterCountry,
        activeFilter: payload.activeFilter,
      };
    }
    case FILTER_BY_AREA: {
      const filterArea = state.data.filter((el) =>
        el.area.toLowerCase().includes(payload.toLowerCase())
      );

      return { ...state, data: filterArea };
    }
    case FILTER_BY_STATUS: {
      const filterStatus = state.data.filter((el) =>
        el.status.toLowerCase().includes(payload.toLowerCase())
      );

      return { ...state, data: filterStatus };
    }
    case FILTER_BY_SIZE: {
      const filterSize = state.data.filter((el) =>
        el.status.toLowerCase().includes(payload.toLowerCase())
      );

      return { ...state, data: filterSize };
    }
    case FILTER_BY_WAVE: {
      const filterWave = state.data.filter((el) =>
        el.en_wave.toLowerCase().includes(payload.toLowerCase())
      );

      return { ...state, data: filterWave };
    }
    case FILTER_BY_DATE: {
      const filterDate = state.data.filter((el) =>
        el.fecha_creacion.toLowerCase().includes(payload.toLowerCase())
      );

      return { ...state, data: filterDate };
    }

    case FILTER_BY_SEASONS_AND_STATUS: {
      return { ...state, dataBySeasonsAndStatus: payload };
    }
    case CLEAR_FILTER_ALL_SEASONS:
      return {
        ...state,
        dataBySeasonsAndStatus: [],
      };
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

export const clearFilterAllSeasons = () => (dispatch) => {
  dispatch({ type: CLEAR_FILTER_ALL_SEASONS, payload: [] });
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

export const filterByCountry = (dataByCountry, activeFilter) => (dispatch) => {
  dispatch({
    type: FILTER_BY_COUNTRY,
    payload: { dataByCountry, activeFilter },
  });
};

export const filterByArea = (dataByArea) => (dispatch) => {
  dispatch({ type: FILTER_BY_AREA, payload: dataByArea });
};
export const filterByStatus = (dataByStatus) => (dispatch) => {
  dispatch({ type: FILTER_BY_STATUS, payload: dataByStatus });
};
export const filterBySize = (dataBySize) => (dispatch) => {
  dispatch({ type: FILTER_BY_SIZE, payload: dataBySize });
};
export const filterByWave = (dataByWave) => (dispatch) => {
  dispatch({ type: FILTER_BY_WAVE, payload: dataByWave });
};
export const filterByDate = (dataByDate) => (dispatch) => {
  dispatch({ type: FILTER_BY_DATE, payload: dataByDate });
};

export const filterBySeasonAndStatus = (data) => (dispatch) => {
  dispatch({ type: FILTER_BY_SEASONS_AND_STATUS, payload: data });
};
