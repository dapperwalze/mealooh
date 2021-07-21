export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const EMPTY_CART = "EMPTY_CART";

export const addToCart = (id, name, amount, quantity) => ({
  type: ADD_TO_CART,
  payload: {
    id,
    name,
    amount,
    quantity,
  },
});

export const deleteFromCart = (id) => ({
  type: DELETE_FROM_CART,
  payload: id,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});
