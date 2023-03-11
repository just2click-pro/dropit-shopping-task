import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import store from "./store"
import "./index.css";

import AppRouter from "./contexts/navigation/AppRouter"

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"))
