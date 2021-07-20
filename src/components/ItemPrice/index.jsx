import styles from "./itemPrice.module.scss";


export const ItemPrice = ({ price, type }) => {
  const currencyFormatter = new Intl.NumberFormat("ng-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price);

  return (
    <>
      <span className={styles.selectedItemPrice}>
        {currencyFormatter}
        {type}
      </span>
    </>
  );
};
