const namespace = "containers/dashbaord";

export const SET_DONAR_LIST = `${namespace}/SET_DONAR_LIST`;

export const setDonarList = (payload) => ({
  type: SET_DONAR_LIST,
  payload,
});
