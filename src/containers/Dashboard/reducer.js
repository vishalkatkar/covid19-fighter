import { SET_DONAR_LIST } from "./actions";

const initialState = {
  donarList: [],
};

const dashbaordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DONAR_LIST:
      return { ...state, donarList: action.payload || [] };
    default:
      return state;
  }
};

export default dashbaordReducer;
