import _ from "lodash";

export const handleCurrencyFormatting = (amount) => {
  return new Intl.NumberFormat("ng-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
};

export const handleCalculateSubTotalAmount = (
  arr,
  handleCurrencyFormatting
) => {
  const subtotalAmount = arr.reduce(
    (accumulator, current) =>
      accumulator + parseInt(current.item.amount) * parseInt(current.quantity),
    0
  );
  return handleCurrencyFormatting(subtotalAmount);
};

export const handleCalculateTotalAmount = (
  arr,
  handleCurrencyFormatting = null,
  discount = 0
) => {
  const totalAmount = arr.reduce(
    (accumulator, current) =>
      accumulator + parseInt(current.item.amount) * parseInt(current.quantity),
    0
  );
  const amountAfterDiscount = totalAmount - (discount / 100) * totalAmount;
  if (handleCurrencyFormatting) {
    return handleCurrencyFormatting(amountAfterDiscount);
  }
  return amountAfterDiscount;
};

export const handleGetOrderDescription = (arr) => {
  let description = "";
  if (arr.length > 0) {
    arr.forEach((orderItem) => {
      if (arr.indexOf(orderItem) === 0) {
        return (description = orderItem.item.name);
      }
      if (arr.indexOf(orderItem) === arr.length - 1) {
        return (description = `${description} ${" & "} ${orderItem.item.name}`);
      }
      return (description = `${description}${", "} ${orderItem.item.name}`);
    });
  }
  return description;
};

export const handlePagination = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};

export const handleSearchProducts = (data, keyword) => {
  return data.filter(({ name }) => {
    return (
      keyword.length === 0 ||
      name?.toLowerCase()?.includes(keyword?.toLowerCase())
    );
  });
};
