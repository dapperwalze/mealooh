import React from "react";
import styles from "./itemPrice.module.scss";
import { handleCurrencyFormatting } from "./../../utils/helpers";

export const ItemPrice = ({ amount, type }) => {
  const formattedAmount = handleCurrencyFormatting(amount);
  return (
    <>
      <span className={styles.selectedItemPrice}>
        {formattedAmount}
        {type}
      </span>
    </>
  );
};
