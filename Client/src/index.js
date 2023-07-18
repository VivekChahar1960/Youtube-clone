import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import {applyMiddleware, compose} from 'redux'
import {createStore} from 'redux'
import thunk from "redux-thunk"
import Reducers from "./Reducers"

const store=createStore(Reducers,compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <Provider >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  /* </Provider> */
);
reportWebVitals();
