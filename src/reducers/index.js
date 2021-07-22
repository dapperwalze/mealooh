import { combineReducers } from "redux";

import foodItemsReducer from "./foodItemsReducer";
import cartActionsReducer from "./cartActionsReducer";
import orderActionsReducer from "./orderActionsReducer";

const rootReducer = combineReducers({
  foodItems: foodItemsReducer,
  cart: cartActionsReducer,
  orders: orderActionsReducer,
});

export default rootReducer;
