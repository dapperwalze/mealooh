import React from "react";
import styles from "./itemPrice.module.scss";

export const ItemPrice = ({ price, type }) => {
  const formattedAmount = new Intl.NumberFormat("ng-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price);

  return (
    <>
      <span className={styles.selectedItemPrice}>
        {formattedAmount}
        {type}
      </span>
    </>
  );
};
