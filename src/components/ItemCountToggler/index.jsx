import React from "react";
import styles from "./itemCountToggler.module.scss";

export const ItemCountToggler = ({
  itemCount,
  decrementCount,
  incrementCount,
}) => {
  return (
    <div className={styles.selectedProductCountContainer}>
      <button
        type="button"
        className={styles.decrementButton}
        onClick={decrementCount}
      >
        -
      </button>
      <span className={styles.selectedProductCountValue}>{itemCount}</span>
      <button
        type="button"
        className={styles.incrementButton}
        onClick={incrementCount}
      >
        +
      </button>
    </div>
  );
};
