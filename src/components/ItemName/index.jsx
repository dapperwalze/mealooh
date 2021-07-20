import styles from "./itemName.module.scss";

export const ItemName = ({ name }) => {
  return (
    <>
      <span className={styles.selectedItemName}>{name}</span>
    </>
  );
};
