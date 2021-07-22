import * as actions from "../actions/orderActions";

const initialState = {
  order: [],
};

const orderActionsReducer = (state = initialState, action) => {
  const addOrder = state.order.concat(action.payload);
  switch (action.type) {
    case actions.PLACE_ORDER:
      return { ...state, orders: addOrder };

    default:
      return state;
  }
};

export const orderSelector = (state) => state.order;
export default orderActionsReducer;
