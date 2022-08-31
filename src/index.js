import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider as ContextProvider } from "./_shared/index";
import App from "./App";
import styles from "./main.module.scss";
import "antd/dist/antd.min.css";
import rootReducer from "./reducers/index";
import reportWebVitals from "./reportWebVitals";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Router>
    <ContextProvider>
      <Provider store={store}>
        <App className={styles.app} />
      </Provider>
    </ContextProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
