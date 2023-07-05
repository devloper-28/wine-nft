import { combineReducers } from "redux";

import dummyReducer from "./dummy/dummy";
import auth from "./auth/auth";
import collections from "./collections/collections";
import dashboard from "./dashboard/dashboard";

const allReducers = combineReducers({
  dummyReducer,
  auth,
  collections,
  dashboard,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return allReducers(state, action);
};

export default rootReducer;
