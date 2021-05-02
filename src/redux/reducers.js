import { combineReducers } from "redux";
import dashbaordReducer from "../containers/Dashboard/reducer";

const createReducer = () => {
  const comnbinedAppReducer = combineReducers({
    dashbaordReducer,
  });

  const rootReducer = (state, action) => {
    return comnbinedAppReducer(state, action);
  };
  return rootReducer;
};

export default createReducer;
