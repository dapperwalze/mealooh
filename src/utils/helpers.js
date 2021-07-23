export const currencyFormatter = (amount) => {
  return new Intl.NumberFormat("ng-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
};

export const calculateSubTotalAmount = (arr, currencyFormatter) => {
  const reducedValue = arr.reduce(
    (accumulator, current) =>
      accumulator + parseInt(current.amount) * parseInt(current.quantity),
    0
  );
  return currencyFormatter(reducedValue);
};

export const calculateTotalAmount = (
  arr,
  currencyFormatter = null,
  discount = 0
) => {
  const reducedValue = arr.reduce(
    (accumulator, current) =>
      accumulator + parseInt(current.amount) * parseInt(current.quantity),
    0
  );
  const amountAfterDiscount = reducedValue - (discount / 100) * reducedValue;
  if (currencyFormatter === null) {
    return amountAfterDiscount;
  }
  return currencyFormatter(amountAfterDiscount);
};

export const getOrderDescription = (arr) => {
  let description = "";
  if (arr.length > 0) {
    arr.forEach((orderItem) => {
      description = description + ", " + orderItem.name;
      if (arr.indexOf(orderItem) === 0) {
        return (description = orderItem.name);
      } else if (arr.indexOf(orderItem) !== arr.length - 1) {
        return description + ", " + orderItem.name;
      } else {
        return description + ", " + orderItem.name;
      }
    });
  }
  return description;
};
