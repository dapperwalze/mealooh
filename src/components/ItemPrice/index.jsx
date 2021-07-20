import styles from "./itemPrice.module.scss";

export const ItemPrice = ({ price, type }) => {
  return (
    <>
      <span className={styles.selectedItemPrice}>
        {new Intl.NumberFormat("ng-NG", {
          style: "currency",
          currency: "NGN",
        }).format(price)}
        {type}
      </span>
    </>
  );
};
