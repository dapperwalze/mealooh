import { v4 as uuid } from "uuid";

export const PLACE_ORDER = "PLACE_ORDER";
export const DELETE_FROM_HISTORY = "DELETE_FROM_HISTORY";
export const ADD_TO_CART_ROM_HISTORY = "ADD_TO_CART_ROM_HISTORY";

export const placeOrder = (description, amount) => ({
  type: PLACE_ORDER,
  payload: {
    id: uuid(),
    date: new Date().toLocaleString(),
    description,
    amount,
  },
});

export const addToCartFromHistory = (name, amount) => ({
  type: ADD_TO_CART_ROM_HISTORY,
  payload: {
    id: uuid(),
    name,
    amount,
    quantity: 1,
  },
});
export const deletefromHistory = (id) => ({
  type: DELETE_FROM_HISTORY,
  payload: id,
});