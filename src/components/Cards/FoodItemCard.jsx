import { handleCurrencyFormatting } from "../../utils/helpers";
import styles from "./card.module.scss";

export const FoodItemCard = ({ alt, url, name, amount, onClick }) => {
  const handleCardClick = () => {
    onClick(true);
  };
  const formattedAmount = handleCurrencyFormatting(amount);

  return (
    <div className={styles.itemCard} onClick={handleCardClick}>
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
