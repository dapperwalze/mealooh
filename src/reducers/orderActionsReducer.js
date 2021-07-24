import * as actions from "../actions/orderActions";

const initialState = {
  order: [],
};

const orderActionsReducer = (state = initialState, action) => {
  const addOrder = state.order.concat(action.payload);
  const deleteItem = state.order.filter((item) => item.id !== action.payload);
  switch (action.type) {
    case actions.PLACE_ORDER:
      return { ...state, order: addOrder };
    case actions.DELETE_FROM_HISTORY:
      return { ...state, order: deleteItem };

    default:
      return state;
  }
};

export const orderSelector = (state) => state.order;
export default orderActionsReducer;
