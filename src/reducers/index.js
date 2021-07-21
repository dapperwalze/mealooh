import { combineReducers } from "redux";

import foodItemsReducer from "./foodItemsReducer";
import cartActionsReducer from "./cartActionsReducer";

const rootReducer = combineReducers({
  foodItems: foodItemsReducer,
  cart: cartActionsReducer,
});

export default rootReducer;

/*import appReducer from "./PageReducers"
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import cartActionsReducer from './cartActionsReducer';

const appReducers = history =>
    combineReducers({
        router: connectRouter(history),
        appReducer

       });

    export default appReducers;*/
