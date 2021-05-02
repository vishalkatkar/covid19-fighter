import { combineReducers } from "redux";
import dashboardReducer from "../containers/Dashboard/reducer";

const createReducer = () => {
  const comnbinedAppReducer = combineReducers({
    dashboardReducer,
  });

  const rootReducer = (state, action) => {
    return comnbinedAppReducer(state, action);
  };
  return rootReducer;
};

export default createReducer;
