import React from "react";
import { Provider, connect } from "react-redux";

import { store } from "./src/store";

import App from "./App";
console.log("check");

const app = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default app;
