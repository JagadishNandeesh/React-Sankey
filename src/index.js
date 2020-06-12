import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { todoApp } from "./charts/sankey/reducer";
import { enhancers } from "./enhancers";
import "./i18n";

const rootReducer = combineReducers({
  todoApp,
});

const store = createStore(rootReducer, {}, enhancers);

ReactDOM.render(
  <Suspense fallback={null}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
