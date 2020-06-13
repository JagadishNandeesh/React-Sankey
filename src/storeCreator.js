import { createStore, applyMiddleware, combineReducers } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import compose from "ramda/src/compose";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const composeStore = ({ reducers, initialState = {}, epics = [] }) => {
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(combineEpics(...epics));
  return store;
};
