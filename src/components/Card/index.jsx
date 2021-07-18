import styles from "./card.module.scss";

export const Card = ({ alt, url, name, amount }) => {
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemImageContainer}>
        <img className={styles.itemImage} alt={alt} src={url} />
      </div>
      <div className={styles.itemDetails}>
        <span className={styles.itemName}>{name}</span>
        <span className={styles.itemPrice}>NGN {amount}.00</span>
      </div>
    </div>
  );
};
