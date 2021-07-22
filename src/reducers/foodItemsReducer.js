import * as actions from "../actions/foodItemsActions";

const initialState = {
  foodItems: [],
  isLoading: false,
  hasErrors: false,
};

const foodItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_FOOD_ITEMS:
      return { ...state, isLoading: true };
    case actions.GET_FOOD_ITEMS_SUCCESS:
      return { foodItems: action.payload, isLoading: false, hasErrors: false };
    case actions.GET_FOOD_ITEMS_FAILURE:
      return { ...state, isLoading: false, hasErrors: true };
    default:
      return state;
  }
};

export const foodItemsSelector = (state) => state.foodItems;
export default foodItemsReducer;
