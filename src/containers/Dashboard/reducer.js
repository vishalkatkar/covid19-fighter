import {
  SET_DONAR_LIST,
  SET_FILTER_DONAR_LIST,
  SET_APPLIED_FILTERS,
} from "./actions";

const initialState = {
  donarList: [],
  filterDonarList: [],
  appliedFilters: {},
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DONAR_LIST:
      return {
        ...state,
        donarList: action.payload || [],
        filterDonarList: action.payload || [],
      };
    case SET_FILTER_DONAR_LIST:
      return {
        ...state,
        filterDonarList: action.payload || [],
      };
    case SET_APPLIED_FILTERS:
      return {
        ...state,
        appliedFilters: action.payload || [],
      };
    default:
      return state;
  }
};

export default dashboardReducer;
