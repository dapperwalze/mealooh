import { currencyFormatter } from "./../../utils/helpers";
import styles from "./card.module.scss";

export const Card = ({ alt, url, name, amount, setIsModalVisible }) => {
  const handleClick = () => {
    setIsModalVisible(true);
  };
  const formattedAmount = currencyFormatter(amount);

  return (
    <div className={styles.itemCard} onClick={handleClick}>
      <div className={styles.itemImageContainer}>
        <img className={styles.itemImage} alt={alt} src={url} />
      </div>
      <div className={styles.itemDetails}>
        <span className={styles.itemName}>{name}</span>
        <span className={styles.itemPrice}>{formattedAmount}</span>
      </div>
    </div>
  );
};
