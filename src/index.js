import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./store";
import "./i18n";

ReactDOM.render(
  <Suspense fallback={null}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.unregister();
