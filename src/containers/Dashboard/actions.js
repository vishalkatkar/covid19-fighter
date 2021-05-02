const namespace = "containers/dashbaord";

export const SET_DONAR_LIST = `${namespace}/SET_DONAR_LIST`;
export const SET_APPLIED_FILTERS = `${namespace}/SET_APPLIED_FILTERS`;

export const setDonarList = (payload) => ({
  type: SET_DONAR_LIST,
  payload,
});

export const setAppliedFilters = (payload) => ({
  type: SET_APPLIED_FILTERS,
  payload,
});
