import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'
import App from './App'
import store from './store'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
