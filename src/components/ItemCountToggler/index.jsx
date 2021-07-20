import { useState } from "react";
import styles from "./itemCountToggler.module.scss";

export const ItemCountToggler = (props) => {
  const [itemCount, setItemCount] = useState(1);

  const decrementCount = () => {
    setItemCount((prevValue) =>
      prevValue > 1 ? prevValue - 1 : (prevValue = 1)
    );
  };

  const incrementCount = () => {
    setItemCount((prevValue) => prevValue + 1);
  };

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
