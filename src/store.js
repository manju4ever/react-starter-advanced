import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import createRootReducer from "~/reducers";

export const history = createBrowserHistory();

export default createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(routerMiddleware(history))
  )
);
