import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import auth from "~/reducers/auth";

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    auth,
  });
}
