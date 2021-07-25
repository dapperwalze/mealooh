export const handleCurrencyFormatting = (amount) => {
  return new Intl.NumberFormat("ng-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
};

export const handleCalculateSubTotalAmount = (arr, currencyFormatter) => {
  const reducedValue = arr.reduce(
    (accumulator, current) =>
      accumulator + parseInt(current.item.amount) * parseInt(current.quantity),
    0
  );
  return handleCurrencyFormatting(reducedValue);
};

export const handleCalculateTotalAmount = (
  arr,
  handleCurrencyFormatting = null,
  discount = 0
) => {
  const reducedValue = arr.reduce(
    (accumulator, current) =>
      accumulator + parseInt(current.item.amount) * parseInt(current.quantity),
    0
  );
  const amountAfterDiscount = reducedValue - (discount / 100) * reducedValue;
  if (handleCurrencyFormatting === null) {
    return amountAfterDiscount;
  }
  return handleCurrencyFormatting(amountAfterDiscount);
};

export const handleGetOrderDescription = (arr) => {
  let description = "";
  if (arr.length > 0) {
    arr.forEach((orderItem) => {
      description = description + ", " + orderItem.item.name;
      if (arr.indexOf(orderItem) === 0) {
        return (description = orderItem.item.name);
      } else if (arr.indexOf(orderItem) !== arr.length - 1) {
        return description + ", " + orderItem.item.name;
      } else {
        return description + ", " + orderItem.item.name;
      }
    });
  }
  return description;
};
