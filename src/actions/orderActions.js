export const PLACE_ORDER = "PLACE_ORDER";

export const placeOrder = (id, description) => ({
  type: PLACE_ORDER,
  payload: {
    id,
    description,
  },
});
