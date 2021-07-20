import appReducer from "./PageReducers"
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const appReducers = history =>
    combineReducers({
        router: connectRouter(history),
        appReducer

       });

export default appReducers;