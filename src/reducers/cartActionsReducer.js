import * as actions from "../actions/cartActions";

const initialState = {
  cart: [],
};

const cartActionsReducer = (state = initialState, action) => {
  const addItem = state.cart.concat(action.payload);
  const deleteItem = state.cart.filter((item) => item.id !== action.payload);

  switch (action.type) {
    case actions.ADD_TO_CART:
      return {
        ...state,
        cart: addItem,
      };
    case actions.DELETE_FROM_CART:
      return {
        ...state,
        cart: deleteItem,
      };
    case actions.EMPTY_CART:
      return { ...state, cart: [] };

    default:
      return state;
  }
};

export default cartActionsReducer;
