import allFoodItems from "./../mealData/index";
export const GET_FOOD_ITEMS = "GET_FOOD_ITEMS";
export const GET_FOOD_ITEMS_SUCCESS = "GET_FOOD_ITEMS_SUCCESS";
export const GET_FOOD_ITEMS_FAILURE = "GET_FOOD_ITEMS_FAILURE";
export const PLACE_ORDER = "PLACE_ORDER";

export const getFoodItems = () => ({
  type: GET_FOOD_ITEMS,
});

export const getFoodItemsSuccess = (foodItems) => ({
  type: GET_FOOD_ITEMS_SUCCESS,
  payload: foodItems,
});

export const getFoodItemsFailure = () => ({
  type: GET_FOOD_ITEMS_FAILURE,
});

export const placeOrder = () => ({
  type: PLACE_ORDER,
});

export const fetchFoodItems = () => {
  return (dispatch) => {
    dispatch(getFoodItems());

    try {
      const response = allFoodItems;
      //const data = response.json()

      dispatch(getFoodItemsSuccess(response));
    } catch (error) {
      dispatch(getFoodItemsFailure());
    }
  };
};
