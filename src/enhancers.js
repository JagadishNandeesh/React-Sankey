import compose from "ramda/src/compose";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { applyMiddleware } from "redux";

export const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
