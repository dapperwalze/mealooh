import React from "react";
import styles from "./itemPrice.module.scss";
import { currencyFormatter } from "./../../utils/helpers";

export const ItemPrice = ({ amount, type }) => {
  const formattedAmount = currencyFormatter(amount);
  return (
    <>
      <span className={styles.selectedItemPrice}>
        {formattedAmount}
        {type}
      </span>
    </>
  );
};
