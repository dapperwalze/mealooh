import React from "react";
import styles from "./itemCountToggler.module.scss";

export const ItemCountToggler = ({
  itemCount,
  handleDecrementCount,
  handleIncrementCount,
}) => {
  return (
    <div className={styles.selectedProductCountContainer}>
      <button
        type="button"
        className={styles.decrementButton}
        onClick={handleDecrementCount}
      >
        -
      </button>
      <span className={styles.selectedProductCountValue}>{itemCount}</span>
      <button
        type="button"
        className={styles.incrementButton}
        onClick={handleIncrementCount}
      >
        +
      </button>
    </div>
  );
};
