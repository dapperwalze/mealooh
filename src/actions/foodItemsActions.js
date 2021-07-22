import allFoodItems from "./../mealData/index";
export const GET_FOOD_ITEMS = "GET_FOOD_ITEMS";
export const GET_FOOD_ITEMS_SUCCESS = "GET_FOOD_ITEMS_SUCCESS";
export const GET_FOOD_ITEMS_FAILURE = "GET_FOOD_ITEMS_FAILURE";

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

export const fetchFoodItems = () => {
  return (dispatch) => {
    dispatch(getFoodItems());

    try {
      const response = allFoodItems;

      dispatch(getFoodItemsSuccess(response));
    } catch (error) {
      dispatch(getFoodItemsFailure());
    }
  };
};
